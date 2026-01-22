<<<<<<< HEAD
import { test, expect } from '@playwright/test';

test.describe("Annotation",async()=>{
 //test.skip();
test('has title', async ({ page }) => {
 
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
})
})

test('get started link', async ({ page }) => {
 test.skip()
  await page.goto('https://playwright.dev/');
  
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})

=======
import { test,expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage.spec";
import { SetUp } from "../Utils/SetUp";

test("Login Test", async ({ page }) => {

  const loginPage = new LoginPage(page);
 await loginPage.openApplication();
  await loginPage.loginToApplication(SetUp.username, SetUp.password);
  await page.waitForTimeout(8000);
  
});
>>>>>>> bca423d (POM plyawwright)

