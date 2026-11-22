const { test, expect } = require('@playwright/test');

test('page title is correct', async ({ page }) => {
  await page.setContent('<title>Hello Playwright</title><h1>Hi</h1>');
  await expect(page).toHaveTitle('Hello Playwright');
  await expect(page.locator('h1')).toHaveText('Hi');
});
