import { test, expect } from "@playwright/test";

test("playground next opens successfully", async ({ page }) => {
  await page.goto("/playground/next/");
  await expect(page).toHaveURL(/\/playground\/next\/?/);
  await expect(
    page.getByRole("heading", { name: "JSON-LD Playground" }),
  ).toBeVisible();
});

test("format radio switches output between JSON and YAML", async ({ page }) => {
  await page.goto("/playground/next/");
  await page.getByRole("button", { name: "Person" }).click();
  await expect(page.locator("#read-only-editor .cm-content")).toBeVisible();

  await page.getByText("Options", { exact: true }).click();
  await expect(page.locator("#options-formatMode")).toBeVisible();
  await page.locator("#options-formatMode-yaml").check();
  await page.getByText(/YAML-LD Input|JSON-LD Input/).click();
  await expect(page.locator("#read-only-editor .cm-content")).toContainText(
    /@type|schema|Person/,
    {
      timeout: 5000,
    },
  );
  const outputAfterYaml = await page
    .locator("#read-only-editor .cm-content")
    .innerText();
  expect(outputAfterYaml).toBeTruthy();
  expect(outputAfterYaml).not.toMatch(/^\s*"[^"]+"\s*:/m);

  await page.getByText("Options", { exact: true }).click();
  await page.locator("#options-formatMode-json").check();
  await page.getByText(/YAML-LD Input|JSON-LD Input/).click();
  await expect(page.locator("#read-only-editor .cm-content")).toContainText(
    '"@type"',
    {
      timeout: 5000,
    },
  );
  const outputAfterJson = await page
    .locator("#read-only-editor .cm-content")
    .innerText();
  expect(outputAfterJson).toMatch(/"[^"]+"\s*:/);
});

test("permalink button opens popup and copy copies URL to clipboard", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/playground/next/");
  await page.getByRole("button", { name: "Person" }).click();
  await expect(page.locator("#read-only-editor .cm-content")).toBeVisible();

  await page.locator("#permalink").click();
  await expect(page.getByText("Share this")).toBeVisible();
  const permalinkInput = page.locator('.ui.popup.visible input[type="text"]');
  await expect(permalinkInput).toBeVisible();
  const urlInPopup = await permalinkInput.inputValue();
  expect(urlInPopup).toMatch(/#.*json-ld=/);
  expect(urlInPopup).toMatch(/formatMode=/);
  expect(urlInPopup).toMatch(/startTab=/);

  await page
    .locator(".ui.popup.visible button")
    .filter({ has: page.locator(".icon.copy") })
    .click();
  const clipboardText = await page.evaluate(() =>
    navigator.clipboard.readText(),
  );
  expect(clipboardText).toBe(urlInPopup);
});

test("URL hash params auto-populate json-ld, frame, startTab, formatMode and produce output", async ({
  page,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alice",
  };
  const frame = { "@context": "https://schema.org", "@type": "Person" };
  const hash = new URLSearchParams({
    "json-ld": JSON.stringify(jsonLd),
    frame: JSON.stringify(frame),
    startTab: "tab-framed",
    formatMode: "yaml",
  });
  await page.goto(`/playground/next/#${hash.toString()}`);
  await page.waitForLoadState("networkidle");

  const mainEditor = page.locator("#editor .cm-content");
  await expect(mainEditor).toBeVisible({ timeout: 10000 });
  const mainText = await mainEditor.innerText();
  expect(mainText).toContain("Alice");
  expect(mainText).toMatch(/@context|context/);

  const outputTabBar = page
    .locator(".ui.tabular.menu")
    .filter({ hasText: "Expanded" });
  await expect(
    outputTabBar.locator(".item.active").filter({ hasText: "Framed" }),
  ).toBeVisible();

  const frameEditor = page.locator("#frame-editor .cm-content");
  await expect(frameEditor).toBeVisible();
  const frameText = await frameEditor.innerText();
  expect(frameText).toMatch(/Person|@type/);

  await page.getByText("Options", { exact: true }).click();
  await expect(page.locator("#options-formatMode-yaml")).toBeChecked();

  const output = page.locator("#read-only-editor .cm-content");
  await expect(output).toBeVisible();
  const outputText = await output.innerText();
  expect(outputText).toBeTruthy();
  expect(outputText).toContain("Alice");
});
