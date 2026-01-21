import{test,expect} from '@playwright/test';

test.skip('check Alert dialog',async({ page })=>{

   await page.goto("https://dev.automationtesting.in/alerts");

   page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('alert');
      expect(dialog.message()).toContain("Hi! I'm an alert");
     await dialog.accept();


   })

    await page.getByRole('button').click();
     await page.waitForTimeout(8000);

})

 /* NOTE: we are also Using toEqual()method instead of to contain()
  for non retrying assertion not use await in
  */

test.skip('check alert ok or cancle',async({ page })=>{

   await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

   page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('confirm');
      expect(dialog.message()).toContain('Press a button!');
      await dialog.accept();


   })
      await page.locator('#confirmBtn').click();
      await expect(page.locator('#demo')).toHaveText("You pressed OK!");
    
     await page.waitForTimeout(8000); 

})

/* Enableling dialog indo handler
    "Event should be trigger and click button"

    "Alert,confirm,prompt"
*/


test('promt dialog',async({ page })=>{

   await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

   page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain('prompt');
      expect(dialog.message()).toContain('Please enter your name:');
      expect(dialog.defaultValue()).toContain("Harry Potter");
      await dialog.accept("John");
      


   })
      await page.getByRole('button', { name: 'Prompt Alert' }).click();
      await expect(page.locator('#demo')).toHaveText("Hello John! How are you today?");
    
     await page.waitForTimeout(8000); 

})




