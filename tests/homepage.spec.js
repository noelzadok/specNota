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
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByText('1').first().click();
  await page.getByText('Tasks Overdue1 Tickets').click();
  await page.getByRole('tab', { name: 'Closed (0)' }).click();
  await page.getByRole('tab', { name: 'All (1)' }).click();
  await page.getByRole('tab', { name: 'Hidden (0)' }).click();
  await page.getByRole('tab', { name: 'All (1)' }).click();
  await page.getByRole('tab', { name: 'Overdue (1)' }).click();
  await page.getByRole('tab', { name: 'Due Soon (0)' }).click();
  await page.getByRole('tab', { name: 'Overdue (1)' }).click();
  await page.getByRole('link', { name: 'Task 65: oswppw jjjj Oct 11th' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByLabel('Today (0)').getByText('Create a task').click();
  await page.getByRole('tab', { name: 'All (1)' }).click();
  await page.getByRole('button', { name: 'To pages' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('tab', { name: 'All (1)' }).click();
  await page.getByRole('button', { name: 'To tasks' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('.ant-dropdown-trigger').first().click();
  await page.getByRole('img', { name: 'create new project' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('svg').first().click();
  await page.getByRole('img', { name: 'Johnson' }).click();
  await page.locator('path').first().click();
  await page.getByRole('tab', { name: 'All (1)' }).click();
  //await page.locator('p').filter({ hasText: 'Logout' }).click();
});