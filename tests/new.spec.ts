import{test,expect} from '@playwright/test';

test('New test case',async({ page })=>{

    await page.goto("https://example.com");

});