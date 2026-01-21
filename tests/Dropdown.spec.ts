import{test,expect} from '@playwright/test';


test('Drop Down event event',async({ page })=>{

   await page.goto("https://testautomationpractice.blogspot.com/");


     //<-------------- Value/label/text------------>
   //await page.locator('#country').selectOption("brazil"); By "Value"
   // await page.locator('#country').selectOption("Japan");  By "Text"
     // await page.locator('#country').selectOption({index:3}); By "Index"
     await page.locator('#country').selectOption({label:"Canada"});

    await page.waitForTimeout(8000);

})
