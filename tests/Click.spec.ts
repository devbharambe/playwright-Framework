
import{test,expect} from '@playwright/test';

/* 
test('Click', async ({ page }) => {
  //await page.goto('https://omayo.blogspot.com/');
  //----->Double Click action<-------
  /* const double=await page.getByRole('button', { name: 'Double click Here' });
  double.dblclick(); */
  
//----->Right Click action<-------
  // await page.getByRole('button', { name: 'Submit' }).click({button:'right'});
  //await page.waitForTimeout(8000);

 //await page.goto("https://demoqa.com/buttons");
 //await page.getByText('Click Me').last().click({force:true});

//})


test('Click and mouse action', async ({ page }) => {
 await page.goto('https://demoqa.com/links');
 //await page.locator('#dynamicLink').click({modifiers:['Shift']});
// await page.locator('#dynamicLink').click({modifiers:['Control']});


 await page.waitForTimeout(8000);



 

  
  
})
