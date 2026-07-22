import { test, expect } from '../Fixtures/fixtures';

test.describe('Organizations - Create Organization', () => {

  test.beforeEach(async (fixtures) => {
    const { loginPage, dashboardPage, baseUrl } = fixtures as any;

    const validEmail = 'admin@chairlyo.com';
    const validPassword = 'testpassword123';

    // Login first
    await loginPage.navigateToChairlyo(baseUrl);
    await loginPage.loginToChairlyo(validEmail, validPassword);

    // Navigate using the sidebar
    await dashboardPage.goToOrganizations();

  });

  test('Create a new organization', async (fixtures) => {
    const { organizationsPage } = fixtures as any;

    await organizationsPage.createOrganization({
      orgName: 'Test Salon',
      slug: 'test-salon',
      status: 'Trial',
      planType: 'Claude',
      firstName: 'Obin',
      lastName: 'Bade',
      email: 'obin@gmail.com',
      password: 'testpassword123',
      phone: '9800000000',
    });

    await expect(
      organizationsPage.locators.addOrgFormTitle
    ).toBeVisible();

  });

});