import{test,expect} from '@playwright/test';

test('iframe event',async({ page })=>{

//  await page.goto("https://dev.automationtesting.in/frames");

    /* const fram=await page.frameLocator("//iframe[@id='single_iframe']");
     await fram.locator("//input[@id=':r0:']").fill("devendrabharambe");
     //  */

      


      await page.goto("https://demoqa.com/frames");
      const lo=await page.locator('#frame1').contentFrame().getByRole('heading', { name: 'This is a sample page' });
     console.log(lo.textContent());
      








 /*    await page.goto("https://omayo.blogspot.com/");
    const loc=await page.frameLocator("//iframe[@id='iframe1']");
    await loc.getByRole('link').nth(2).click();
 */
 

      /* Part of muliseclection option

     await page.goto("https://omayo.blogspot.com/");
    const lis= await page.locator('#multiselect1').selectOption(['volvox','swiftx','Hyundaix','audix']);
     console.log(lis);  */
 




     


    await page.waitForTimeout(8000);

})
