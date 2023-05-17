import {BrowserContext, expect, Page, test} from '@playwright/test';

test.describe('states: ', () => {
    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();

        await page.goto('/getting-started.html');
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
    });

    test('no data', async () => {
        await page.route('/api/help-toc', async route => {
            const json = {entities: {pages: {}}, topLevelIds: []};

            await route.fulfill({json});
        });
        const tocSideBar = page.getByTestId('toc-side-bar');

        await expect(tocSideBar).toBeVisible();
        await expect(tocSideBar).toBeEmpty();
    });

    test('error', async () => {
        await page.route('/api/help-toc', async route => {
            await route.fulfill({response: undefined});
        });
        const noDataSideBar = page.getByTestId('no-data-side-bar');

        await expect(noDataSideBar).toBeVisible();
        await expect(noDataSideBar).toBeEmpty();
    });

    test('loading', async () => {
        const loadingSideBar = page.getByTestId('loading-side-bar');

        await expect(loadingSideBar).toBeVisible();

        const header = page.getByTestId('content-header');

        await expect(header).toHaveText('Getting started');
    });
});
