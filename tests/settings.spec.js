import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://specnota-nextgen.herokuapp.com/');
  await page.getByPlaceholder('abrahamjohn@gmail.com').click();
  await page.getByPlaceholder('abrahamjohn@gmail.com').fill('okolijohnson69@gmail.com');
  await page.getByPlaceholder('******').click();
  await page.getByPlaceholder('******').fill('12345678');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause()
  await page.locator('.toggler').click();
  await page.getByText('Settings').click();
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="lastName"]').click();
  await page.locator('textarea[name="description"]').click();
  await page.locator('textarea[name="description"]').fill('dev');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Account' }).click();
  await page.locator('input[name="oldPassword"]').click();
  await page.locator('input[name="oldPassword"]').fill('qwerty');
  await page.locator('input[name="newPassword"]').click();
  await page.locator('input[name="newPassword"]').fill('qwertty');
  await page.getByRole('button', { name: 'Change' }).click();
  await page.locator('div').filter({ hasText: /^Current Password$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Old Password$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Subscription' }).click();
  await page.getByRole('link', { name: 'Notification' }).click();
  await page.getByRole('link', { name: 'Teams' }).click();
  //await page.getByRole('button', { name: 'Logout' }).click();
});