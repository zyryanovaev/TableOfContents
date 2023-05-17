import {BrowserContext, expect, Page, test} from '@playwright/test';

test.describe('select elements: ', () => {
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/configuring-project-and-ide-settings.html');
        const header = page.getByTestId('content-header');

        await expect(header).toHaveText('IDE configuration');
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

    test('select another element with URL', async () => {
        const selectedItem = page.getByTestId('tree-node-Configuring_Project_and_IDE_Settings');
        const nextSelectedItem = page.getByTestId('tree-node-Getting_started');
        const subPageSelectedItem = page.getByTestId('tree-node-Configuring_Colors_and_Fonts');
        const subPageNextSelectedItem = page.getByTestId('tree-node-Accessibility');

        await expect(selectedItem).toBeVisible();
        await expect(subPageSelectedItem).toBeVisible();
        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(nextSelectedItem).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
        await expect(subPageNextSelectedItem).not.toBeVisible();
        await expect(selectedItem).toBeVisible();

        await nextSelectedItem.click();

        await expect(subPageSelectedItem).toBeVisible();
        await expect(selectedItem).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');
        await expect(nextSelectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(subPageNextSelectedItem).toBeVisible();
    });

    test('select another element without URL', async () => {
        const selectedItem = page.getByTestId('tree-node-Configuring_Project_and_IDE_Settings');
        const nextSelectedItem = page.getByTestId('tree-node-a3590da1');
        const subPageSelectedItem = page.getByTestId('tree-node-Configuring_Colors_and_Fonts');
        const subPageNextSelectedItem = page.getByTestId('tree-node-64cd486');

        await expect(selectedItem).toBeVisible();
        await expect(subPageSelectedItem).toBeVisible();
        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(subPageNextSelectedItem).not.toBeVisible();
        await expect(selectedItem).toBeVisible();

        await nextSelectedItem.click();

        await expect(subPageSelectedItem).toBeVisible();
        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(nextSelectedItem).toHaveCSS('background-color', 'rgba(25, 25, 28, 0.05)');
        await expect(subPageNextSelectedItem).toBeVisible();
    });
});

test.describe('interaction with item: ', () => {
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/getting-started.html');
        const header = page.getByTestId('content-header');

        await expect(header).toHaveText('Getting started');
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

    test('close/open element sub tree', async () => {
        const selectedItem = page.getByTestId('tree-node-Getting_started');
        const subTree = page.getByTestId('sub-tree-Getting_started');
        const closeIcon = selectedItem.getByTestId('tree-node-expanded-icon');

        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(subTree).toBeVisible();

        await closeIcon.click();

        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(subTree).not.toBeVisible();

        await closeIcon.click();

        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(subTree).toBeVisible();
    });

    test('hover element', async () => {
        const selectedItem = page.getByTestId('tree-node-Getting_started');
        const notSelectedElement = page.getByTestId('tree-node-Discover_IntelliJ_IDEA');

        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');
        await expect(notSelectedElement).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)');

        await selectedItem.hover();

        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');

        await notSelectedElement.hover();

        await expect(notSelectedElement).toHaveCSS('background-color', 'rgba(25, 25, 28, 0.05)');
    });
});
