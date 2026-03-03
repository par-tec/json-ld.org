import { test, expect } from '@playwright/test';

test('playground next opens successfully', async ({ page }) => {
  await page.goto('/playground/next/');
  await expect(page).toHaveURL(/\/playground\/next\/?/);
  await expect(page.getByRole('heading', { name: 'JSON-LD Playground' })).toBeVisible();
});
