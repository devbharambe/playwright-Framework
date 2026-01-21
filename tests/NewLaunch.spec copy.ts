import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://tagzfoods.com/');
  await page.locator('button.btn.search-btn:visible').click();
  
})
