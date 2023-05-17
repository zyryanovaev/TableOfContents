import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    timeout: 60000,
    testDir: './tests',
    fullyParallel: true,
    reporter: 'html',
    use: {
        headless: true,
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },

        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
        },

        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },
    ],

    webServer: {
        command: 'npm run start',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
    },
});
