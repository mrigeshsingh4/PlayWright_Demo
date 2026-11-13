import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

// test('Test Case Without Framework', async ({ page }) => {
//   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//   await page.getByPlaceholder("Username").fill("Admin");
//   await page.getByPlaceholder("Password").fill("admin123");
//   await page.getByRole("button", { name: "Login" }).click();
//   await page.getByTitle("Help").click();
// });


test('Test Case With Framework', async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  const loginPage = new LoginPage(page);
  await loginPage.enterUserName("Admin");
  await loginPage.enterPassword("admin123");
  await loginPage.clickLogin();
  await expect(page).toHaveURL(/dashboard/);
  //await page.pause();
});

//npx playwright test OrangeHRM.spec.ts --headed --project=chromium
