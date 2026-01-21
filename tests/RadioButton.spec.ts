import {test,expect} from "@playwright/test";

test('Radio Button', async ({ page }) => {

/* await page.goto("https://demoqa.com/automation-practice-form");
const radio1= page.locator('#gender-radio-1')
await radio1.check();
await expect(radio1).toBeChecked(); */

await page.goto("https://omayo.blogspot.com/");
const radio=page.locator('#radio1');
await radio.check();
await expect(radio).toBeAttached();

await page.locator('#radio2').check();
await expect(radio).toBeChecked();
//await expect(radio).not.toBeChecked();








await page.waitForTimeout(8000);



})