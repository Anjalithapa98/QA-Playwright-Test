import { expect, Page } from '@playwright/test';
import BasePage from './BasePage';
import OrganizationsLocators from '../locators/organizations.locator';

export default class OrganizationsPage extends BasePage {
  readonly locators: OrganizationsLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new OrganizationsLocators(page);
  }

  async searchOrganization(name: string) {
    await this.locators.searchInput.fill(name);
  }

  async openAddOrganizationForm() {
    await this.locators.addOrganizationButton.click();
  }

  async getOrganizationRowCount() {
    return await this.locators.organizationRow.count();
  }

  async verifyOrganizationExists(name: string) {
    await expect(this.locators.organizationNameCell.filter({ hasText: name })).toBeVisible();
  }
}
// import { expect, Page } from '@playwright/test';
// import BasePage from './BasePage';
// import OrganizationsLocators from '../locators/organizations.locator';

// export default class OrganizationsPage extends BasePage {
//   readonly locators: OrganizationsLocators;

//   constructor(page: Page) {
//     super(page);
//     this.locators = new OrganizationsLocators(page);
//   }

//   async createOrganization(name: string) {
//     await this.locators.addOrganizationButton.click();
//     await this.locators.organizationNameInput.fill(name);
//     await this.locators.saveButton.click();
//   }

//   async editOrganization(newName: string) {
//     await this.locators.editButton.click();
//     await this.locators.organizationNameInput.fill(newName);
//     await this.locators.updateButton.click();
//   }

//   async deleteOrganization() {
//     await this.locators.deleteButton.click();
//     await this.locators.confirmDeleteButton.click();
//   }

//   async searchOrganization(name: string) {
//     await this.locators.searchInput.fill(name);
//   }

//   async verifyOrganizationExists(name: string) {
//     await expect(this.locators.organizationNameCell.filter({ hasText: name })).toBeVisible();
//   }
// }