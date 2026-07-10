//import { expect as baseExpect, test as baseTest } from '@playwright/test';

//type Fixtures = {
 // email: string;
  //password: string;
 // baseUrl: string;
//};

//export const tests = baseTest.extend<Fixtures>({
 // email: 'admin@chairlyo.com',
  //password: 'adminpassword',
  //baseUrl: 'https://stage.chairlyo.com/login',
//});

//export const expect = baseExpect;

import { test as base, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import OrganizationsPage from '../pages/organizationspage';

type MyFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  organizationsPage: OrganizationsPage;
  validEmail: string;
  validPassword: string;
  baseUrl: string;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  organizationsPage: async ({ page }, use) => {
    await use(new OrganizationsPage(page));
  },
  validEmail: 'admin@chairlyo.com',
  validPassword: 'adminpassword',
  baseUrl: 'https://stage.chairlyo.com/login',
});

export { expect };
