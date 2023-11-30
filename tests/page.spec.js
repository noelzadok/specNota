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
  await page.getByRole('link', { name: 'Projects' }).click();
  await page.locator('.css-1jj8tj8 > div:nth-child(2) > svg').click();
  await page.getByRole('button', { name: 'To pages' }).click();
  await page.getByText('Add Pages').first().click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('test');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('.headerMenu > div:nth-child(2) > div > svg > path').first().click();
  await page.locator('.calcelIcon').click();
  await page.locator('li').filter({ hasText: 'test Document page' }).getByRole('img').nth(1).click();
  await page.getByText('Add Pages').nth(1).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('test');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('link', { name: 'jjjj' }).click();
  await page.locator('li').filter({ hasText: 'test Annotation page' }).getByRole('img').nth(1).click();
  await page.getByText('Add Pages').nth(2).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('test');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('link', { name: 'jjjj' }).click();
  await page.locator('li').filter({ hasText: 'test Diagram page' }).getByRole('img').nth(1).click();
  await page.locator('div').filter({ hasText: /^In Progress$/ }).getByRole('img').click();
  await page.getByRole('link', { name: 'Projects' }).nth(1).click();
  await page.locator('.css-1jj8tj8 > div:nth-child(3) > svg').click();
  await page.locator('p').filter({ hasText: 'Logout' }).click();
});