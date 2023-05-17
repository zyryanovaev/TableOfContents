import {BrowserContext, expect, Page, test} from '@playwright/test';

test.describe('zero level element is selected: ', () => {
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

    test('first level elements are open', async () => {
        const selectedItem = page.getByTestId('tree-node-Getting_started');
        const subPageSelectedItem = page.getByTestId('tree-node-Accessibility');
        const subPageWithPagesSelectedItem = page.getByTestId('tree-node-Discover_IntelliJ_IDEA');
        const secondLevelSubPageItem = page.getByTestId('tree-node-Guided_Tour_Around_the_User_Interface');

        await expect(selectedItem).toBeVisible();
        await expect(subPageSelectedItem).toBeVisible();
        await expect(subPageWithPagesSelectedItem).toBeVisible();
        await expect(secondLevelSubPageItem).not.toBeVisible();
    });

    test('elements have correct colors', async () => {
        const selectedItem = page.getByTestId('tree-node-Getting_started');
        const subTree = page.getByTestId('sub-tree-Getting_started');

        await expect(selectedItem).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');

        await expect(subTree).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(subTree).toHaveCSS('background-color', 'rgb(249, 249, 249)');
    });
});

test.describe('first level element without pages is selected: ', () => {
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/accessibility.html');
        const header = page.getByTestId('content-header');

        await expect(header).toHaveText('Accessibility');
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

    test('first level elements are open', async () => {
        const parentItem = page.getByTestId('tree-node-Getting_started');
        const selectedItem = page.getByTestId('tree-node-Accessibility');
        const sameLevelWithPagesSelectedItem = page.getByTestId('tree-node-Discover_IntelliJ_IDEA');

        await expect(parentItem).toBeVisible();
        await expect(selectedItem).toBeVisible();
        await expect(sameLevelWithPagesSelectedItem).toBeVisible();
    });

    test('elements have correct colors', async () => {
        const parentItem = page.getByTestId('tree-node-Getting_started');
        const selectedItem = page.getByTestId('tree-node-Accessibility');
        const currentTree = page.getByTestId('sub-tree-Getting_started');

        await expect(selectedItem).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');

        await expect(parentItem).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(parentItem).toHaveCSS('background-color', 'rgb(249, 249, 249)');

        await expect(currentTree).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(currentTree).toHaveCSS('background-color', 'rgb(249, 249, 249)');
    });
});

test.describe('first level element with pages is selected: ', () => {
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/discover-intellij-idea.html');
        const header = page.getByTestId('content-header');

        await expect(header).toHaveText('IntelliJ IDEA overview');
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

    test('first and second level elements are open', async () => {
        const parentItem = page.getByTestId('tree-node-Getting_started');
        const parentSubTree = page.getByTestId('sub-tree-Getting_started');
        const selectedItem = page.getByTestId('tree-node-Discover_IntelliJ_IDEA');
        const selectedItemSubTree = page.getByTestId('sub-tree-Discover_IntelliJ_IDEA');

        await expect(parentItem).toBeVisible();
        await expect(parentSubTree).toBeVisible();
        await expect(selectedItem).toBeVisible();
        await expect(selectedItemSubTree).toBeVisible();
    });

    test('elements have correct colors', async () => {
        const parentItem = page.getByTestId('tree-node-Getting_started');
        const parentSubTree = page.getByTestId('sub-tree-Getting_started');
        const selectedItem = page.getByTestId('tree-node-Discover_IntelliJ_IDEA');
        const selectedItemSubTree = page.getByTestId('sub-tree-Discover_IntelliJ_IDEA');

        await expect(selectedItem).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');

        await expect(parentItem).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(parentItem).toHaveCSS('background-color', 'rgb(249, 249, 249)');

        await expect(parentSubTree).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(parentSubTree).toHaveCSS('background-color', 'rgb(249, 249, 249)');

        await expect(selectedItemSubTree).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(selectedItemSubTree).toHaveCSS('background-color', 'rgb(244, 244, 244)');
    });
});

test.describe('second level element without pages is selected: ', () => {
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/guided-tour-around-the-user-interface.html');
        const header = page.getByTestId('content-header');

        await expect(header).toHaveText('User interface');
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

    test('first and second level elements are open', async () => {
        const mainParentItem = page.getByTestId('tree-node-Getting_started');
        const mainParentSubTree = page.getByTestId('sub-tree-Getting_started');
        const parentItem = page.getByTestId('tree-node-Discover_IntelliJ_IDEA');
        const parentItemSubTree = page.getByTestId('sub-tree-Discover_IntelliJ_IDEA');
        const selectedItem = page.getByTestId('tree-node-Guided_Tour_Around_the_User_Interface');

        await expect(mainParentItem).toBeVisible();
        await expect(mainParentSubTree).toBeVisible();
        await expect(parentItem).toBeVisible();
        await expect(parentItemSubTree).toBeVisible();
        await expect(selectedItem).toBeVisible();
    });

    test('elements have correct colors', async () => {
        const mainParentItem = page.getByTestId('tree-node-Getting_started');
        const mainParentSubTree = page.getByTestId('sub-tree-Getting_started');
        const parentItem = page.getByTestId('tree-node-Discover_IntelliJ_IDEA');
        const parentItemSubTree = page.getByTestId('sub-tree-Discover_IntelliJ_IDEA');
        const selectedItem = page.getByTestId('tree-node-Guided_Tour_Around_the_User_Interface');

        await expect(selectedItem).toHaveCSS('color', 'rgb(255, 255, 255)');
        await expect(selectedItem).toHaveCSS('background-color', 'rgb(48, 127, 255)');

        await expect(mainParentItem).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(mainParentItem).toHaveCSS('background-color', 'rgb(249, 249, 249)');

        await expect(mainParentSubTree).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(mainParentSubTree).toHaveCSS('background-color', 'rgb(249, 249, 249)');

        await expect(parentItem).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(parentItem).toHaveCSS('background-color', 'rgb(244, 244, 244)');

        await expect(parentItemSubTree).toHaveCSS('color', 'rgb(25, 25, 28)');
        await expect(parentItemSubTree).toHaveCSS('background-color', 'rgb(244, 244, 244)');
    });
});
