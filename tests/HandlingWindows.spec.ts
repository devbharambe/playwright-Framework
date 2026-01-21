import{test,expect} from '@playwright/test'

test('Handling Windows',async({page})=>{

    await page.goto('https://demoqa.com/browser-windows');
    await page.locator('#tabButton').click();

    const totalpage= page.context().pages(); 
    console.log('Total pages are:', totalpage.length);

})