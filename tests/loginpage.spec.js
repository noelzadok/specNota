import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://specnota-nextgen.herokuapp.com/');
  await page.getByPlaceholder('abrahamjohn@gmail.com').click();
  await page.getByPlaceholder('abrahamjohn@gmail.com').fill('okolijohnson69@gmail.com');
  await page.getByPlaceholder('******').click();
  await page.getByPlaceholder('******').fill('12345678');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator('.toggler').click();
  await page.locator('p').filter({ hasText: 'Logout' }).click();
});