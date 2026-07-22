import { test, expect } from '@playwright/test';

const baseUrl = 'https://stage.chairlyo.com/login';

test.describe('Chairlyo Login - Negative Test Cases', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);
  });

  test('Invalid email + Valid password should not log in', async ({ page }) => {
    await page.locator('[type="email"]').fill('wrong@chairlyo.com');
    await page.locator('[type="password"]').fill('adminpassword');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
    await expect(page).toHaveURL(/login/);
  });

  test('Valid email + Invalid password should not log in', async ({ page }) => {
    await page.locator('[type="email"]').fill('admin@chairlyo.com');
    await page.locator('[type="password"]').fill('wrongpassword');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
    await expect(page).toHaveURL(/login/);
  });

  test('Invalid email + Invalid password should not log in', async ({ page }) => {
    await page.locator('[type="email"]').fill('wrong@chairlyo.com');
    await page.locator('[type="password"]').fill('wrongpassword');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
    await expect(page).toHaveURL(/login/);
  });

  test('Empty credentials should prevent login', async ({ page }) => {
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page).toHaveURL(/login/);
  });

});

// import { test, expect } from '@playwright/test';

// test.describe('Chairlyo Login - Negative Test Cases', () => {
//   const baseUrl = 'https://stage.chairlyo.com/login';

//   // सबै test अघि login page मा जाने
//   test.beforeEach(async ({ page }) => {
//     await page.goto(baseUrl);
//   });

//   test('Invalid email + Valid password should not log in', async ({ page }) => {
//     // 1. Fill invalid email and valid password
//     await page.locator('[type="email"]').fill('wrong@chairlyo.com');
//     await page.locator('[type="password"]').fill('adminpassword');

//     // 2. Click Log In
//     await page.getByRole('button', { name: 'Log in' }).click();

//     // 3. Verify login unsuccessful
//     await expect(page.getByText('Invalid credentials')).toBeVisible();
//     await expect(page).toHaveURL(/login/);
//   });

//   test('Valid email + Invalid password should not log in', async ({ page }) => {
//     // 1. Fill valid email and invalid password
//     await page.locator('[type="email"]').fill('admin@chairlyo.com');
//     await page.locator('[type="password"]').fill('wrongpassword');

//     // 2. Click Log In
//     await page.getByRole('button', { name: 'Log in' }).click();

//     // 3. Verify login unsuccessful
//     await expect(page.getByText('Invalid credentials')).toBeVisible();
//     await expect(page).toHaveURL(/login/);
//   });

//   test('Invalid email + Invalid password should not log in', async ({ page }) => {
//     // 1. Fill invalid email and invalid password
//     await page.locator('[type="email"]').fill('wrong@chairlyo.com');
//     await page.locator('[type="password"]').fill('wrongpassword');

//     // 2. Click Log In
//     await page.getByRole('button', { name: 'Log in' }).click();

//     // 3. Verify login unsuccessful
//     await expect(page.getByText('Invalid credentials')).toBeVisible();
//     await expect(page).toHaveURL(/login/);
//   });

//   test('Empty credentials should prevent login', async ({ page }) => {
//     // 1. Leave both fields empty and click Log In
//     await page.getByRole('button', { name: 'Log in' }).click();

//     // 2. Verify login is prevented (still on login page)
//     await expect(page).toHaveURL(/login/);
//   });

// });