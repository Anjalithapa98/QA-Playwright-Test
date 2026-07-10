import { Locator, Page } from '@playwright/test';

export default class OrganizationsLocators {
  readonly pageTitle: Locator;
  readonly pageDescription: Locator;

  readonly searchInput: Locator;
  readonly statusFilterDropdown: Locator;
  readonly plansFilterDropdown: Locator;
  readonly datesFilterDropdown: Locator;
  readonly filterByDateButton: Locator;

  readonly addOrganizationButton: Locator;

  readonly organizationTable: Locator;
  readonly organizationRow: Locator;
  readonly organizationNameCell: Locator;
  readonly statusColumn: Locator;
  readonly planColumn: Locator;
  readonly trialEndsColumn: Locator;
  readonly adminColumn: Locator;

  readonly editIcon: Locator;
  readonly deleteIcon: Locator;

  constructor(page: Page) {
    this.pageTitle = page.getByRole('heading', { name: 'Organization' });
    this.pageDescription = page.getByText('Manage all studio organizations');

    this.searchInput = page.getByPlaceholder('Search...');
    this.statusFilterDropdown = page.getByText('All Status');
    this.plansFilterDropdown = page.getByText('All Plans');
    this.datesFilterDropdown = page.getByText('All Dates');
    this.filterByDateButton = page.getByRole('button', { name: 'Filter by date' });

    this.addOrganizationButton = page.getByRole('button', { name: 'Add Organiz' });

    this.organizationTable = page.locator('table');
    this.organizationRow = page.locator('table tbody tr');
    this.organizationNameCell = page.locator('table tbody tr td:first-child');
    this.statusColumn = page.getByText(/Trial|Active|Suspended/);
    this.planColumn = page.locator('table thead').getByText('PLAN');
    this.trialEndsColumn = page.locator('table thead').getByText('TRIAL ENDS');
    this.adminColumn = page.locator('table thead').getByText('ADMIN');

    this.editIcon = page.locator('table tbody tr').locator('svg').nth(1);
    this.deleteIcon = page.locator('table tbody tr').locator('svg').nth(3);
  }
}

// import { Locator, Page } from '@playwright/test';

// export default class OrganizationsLocators {
//   // Create
//   readonly addOrganizationButton: Locator;
//   readonly organizationNameInput: Locator;
//   readonly saveButton: Locator;

//   // Edit
//   readonly editButton: Locator;
//   readonly updateButton: Locator;

//   // Delete
//   readonly deleteButton: Locator;
//   readonly confirmDeleteButton: Locator;

//   // Search
//   readonly searchInput: Locator;

//   // Table/List
//   readonly organizationTable: Locator;
//   readonly organizationRow: Locator;
//   readonly organizationNameCell: Locator;

//   constructor(page: Page) {
//     // Create
//     this.addOrganizationButton = page.getByRole('button', { name: 'Add Organization' });
//     this.organizationNameInput = page.locator('[name="organizationName"]');
//     this.saveButton = page.getByRole('button', { name: 'Save' });

//     // Edit
//     this.editButton = page.getByRole('button', { name: 'Edit' });
//     this.updateButton = page.getByRole('button', { name: 'Update' });

//     // Delete
//     this.deleteButton = page.getByRole('button', { name: 'Delete' });
//     this.confirmDeleteButton = page.getByRole('button', { name: 'Confirm' });

//     // Search
//     this.searchInput = page.getByPlaceholder('Search organizations');

//     // Table/List
//     this.organizationTable = page.locator('table');
//     this.organizationRow = page.locator('table tbody tr');
//     this.organizationNameCell = page.locator('table tbody tr td:first-child');
//   }
// }