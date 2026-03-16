import { test, expect } from "@playwright/test";

test("playground next opens successfully", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL("/");
  await expect(
    page.getByRole("heading", { name: "JSON-LD Playground" }),
  ).toBeVisible();
});

test("format radio switches output between JSON and YAML", async ({ page }) => {
  await page.goto("/");
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
  await page.goto("/");
  await page.getByRole("button", { name: "Person" }).click();
  await expect(page.locator("#read-only-editor .cm-content")).toBeVisible();

  await page.locator("#dropdownMenuShare").click();
  const popover = page.locator("div[aria-labelledby=dropdownMenuShare]");
  await expect(popover.getByText("Share this")).toBeVisible();
  const permalinkInput = popover.locator('input[type="text"]');
  await expect(permalinkInput).toBeVisible();
  const urlInPopup = await permalinkInput.inputValue();
  expect(urlInPopup).toMatch(/#.*json-ld=/);
  expect(urlInPopup).toMatch(/formatMode=/);
  expect(urlInPopup).toMatch(/startTab=/);
  const copyButton = popover.locator("button", {
    has: page.locator("svg[aria-label='Copy link to clipboard']"),
  });
  await copyButton.click();
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
  await page.goto(`/#${hash.toString()}`);
  await page.waitForLoadState("networkidle");

  const mainEditor = page.locator("#editor .cm-content");
  await expect(mainEditor).toBeVisible({ timeout: 10000 });
  const mainText = await mainEditor.innerText();
  expect(mainText).toContain("Alice");
  expect(mainText).toMatch(/@context|context/);

  const outputTabBar = page.locator("ul.nav").filter({ hasText: "Expanded" });
  await expect(
    outputTabBar.locator(".nav-link.active").filter({ hasText: "Framed" }),
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

test("click Person loads the resource successfully", async ({ page }) => {
  await page.goto("/");

  const responsePromise = page.waitForResponse(res =>
    res.url().includes("/examples/playground/person.json") &&
    res.status() === 200
  );

  await page.getByRole("button", { name: "Person" }).click();

  const response = await responsePromise;

  const json = await response.json();
  expect(json).toHaveProperty("@context");
});

test("click Event loads the resource successfully", async ({ page }) => {
  await page.goto("/");

  const responsePromise = page.waitForResponse(res =>
    res.url().includes("/examples/playground/event.json") &&
    res.status() === 200
  );

  await page.getByRole("button", { name: "Event" }).click();

  const response = await responsePromise;

  const json = await response.json();
  expect(json).toHaveProperty("@context");
});

test("click Place loads the resource successfully", async ({ page }) => {
  await page.goto("/");

  const responsePromise = page.waitForResponse(res =>
    res.url().includes("/examples/playground/place.json") &&
    res.status() === 200
  );

  await page.getByRole("button", { name: "Place" }).click();

  const response = await responsePromise;

  const json = await response.json();
  expect(json).toHaveProperty("@context");
});

test("click Product loads the resource successfully", async ({ page }) => {
  await page.goto("/");

  const responsePromise = page.waitForResponse(res =>
    res.url().includes("/examples/playground/product.json") &&
    res.status() === 200
  );

  await page.getByRole("button", { name: "Product" }).click();

  const response = await responsePromise;

  const json = await response.json();
  expect(json).toHaveProperty("@context");
});


test("click Recipe loads the resource successfully", async ({ page }) => {
  await page.goto("/");

  const responsePromise = page.waitForResponse(res =>
    res.url().includes("/examples/playground/recipe.json") &&
    res.status() === 200
  );

  await page.getByRole("button", { name: "Recipe" }).click();

  const response = await responsePromise;

  const json = await response.json();
  expect(json).toHaveProperty("@context");
});

test("click Library loads the resource successfully", async ({ page }) => {
  await page.goto("/");

  const responsePromise = page.waitForResponse(res =>
    res.url().includes("/examples/playground/library.json") &&
    res.status() === 200
  );

  await page.getByRole("button", { name: "Library" }).click();

  const response = await responsePromise;

  const json = await response.json();
  expect(json).toHaveProperty("@context");
});

test("click Activity loads the resource successfully", async ({ page }) => {
  await page.goto("/");

  const responsePromise = page.waitForResponse(res =>
    res.url().includes("/examples/playground/activity.json") &&
    res.status() === 200
  );

  await page.getByRole("button", { name: "Activity" }).click();

  const response = await responsePromise;

  const json = await response.json();
  expect(json).toHaveProperty("@context");
});