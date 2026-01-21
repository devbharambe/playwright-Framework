import { test,expect } from "@playwright/test"

/* test('Mouse hover', async ({ page }) => {
//await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
// <---------mouse hover action-------->
//await page.getByText('Point Me').hover();

}) */


test('dispatch event click', async ({ page }) => {

await page.goto("https://demoqa.com/menu");
await page.getByText('Sub Sub Item 2').dispatchEvent("click");


})




