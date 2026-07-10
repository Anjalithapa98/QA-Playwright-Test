import { test, expect } from '../Fixtures/fixtures';

test.describe('Chairlyo Login - Positive Test Cases', () => {

  test.beforeEach(async ({ loginPage, baseUrl }) => {
    await loginPage.navigateToChairlyo(baseUrl);
  });

  test('Login with valid credentials should succeed', async ({ loginPage, validEmail, validPassword }) => {
    await loginPage.loginToChairlyo(validEmail, validPassword);
    await loginPage.verifyLoginSuccess();
  });

});


// import { test, expect } from '../fixtures/fixtures';

// test.describe('Chairlyo Login - Positive Test Cases', () => {

//   test.beforeEach(async ({ loginPage, baseUrl }) => {
//     await loginPage.navigateToChairlyo(baseUrl);
//   });

//   test('Login with valid credentials should succeed', async ({ loginPage, email, password }) => {
//     await loginPage.login(email, password);
//     await loginPage.verifyLoginSuccess();
//   });

// });