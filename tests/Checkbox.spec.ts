import{test,expect} from '@playwright/test';

test('check box event',async({ page })=>{

   //await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator('#sunday').check();
    
    //await expect(page.locator('#sunday')).not.toBeChecked();

/* await page.goto("https://omayo.blogspot.com/");
await page.locator('#checkbox1').uncheck(); */

    await page.waitForTimeout(8000);

})

