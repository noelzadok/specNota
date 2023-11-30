import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://specnota-nextgen.herokuapp.com/');
  await page.getByPlaceholder('abrahamjohn@gmail.com').click();
  await page.getByPlaceholder('abrahamjohn@gmail.com').fill('okolijohnson69@gmail.com');
  await page.getByPlaceholder('******').click();
  await page.getByPlaceholder('******').fill('12345678');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause()
  await page.getByRole('link').nth(1).click();
  await page.locator('svg:nth-child(2)').first().click();
  await page.getByLabel('Collaborators').getByLabel('Close').click();
  await page.getByRole('img', { name: 'create new project' }).click();
  await page.getByPlaceholder('Name of project').click();
  await page.getByPlaceholder('Name of project').fill('nz');
  await page.getByPlaceholder('Description of project').click();
  await page.getByPlaceholder('Description of project').fill('test');
  await page.getByRole('button', { name: 'Create project' }).click();
  await page.locator('.css-qfgwja > svg').first().click();
  await page.locator('.css-qfgwja > svg').click();
  await page.locator('.css-1jj8tj8 > div:nth-child(3) > svg').click();
  await page.locator('.css-1i8tota').click();
  await page.getByRole('tab', { name: 'BackLogs' }).click();
  await page.getByRole('tab', { name: 'Tasks (Kanban)' }).click();
  await page.getByRole('tab', { name: 'Sprints' }).click();
  await page.getByRole('tab', { name: 'Documents' }).click();
  await page.getByRole('tab', { name: 'BackLogs' }).click();
  await page.locator('.css-8atqhb > div > div > svg').first().click();
  await page.getByLabel('BackLogs').click();
  await page.getByRole('button', { name: 'Create Sprint' }).click();
  await page.getByPlaceholder('Sprint name').click();
  await page.getByPlaceholder('Sprint goal').click();
  await page.getByText('Custom').click();
  await page.getByText('4 Weeks').click();
  await page.getByRole('button', { name: 'Add Sprint' }).click();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
 
});