import {css} from '@emotion/react';

export const main = css`
    :root {
        --text-s-font-size: 13px;
        --text-s-line-height: 20px;

        --text-m-font-size: 16px;
        --text-m-line-height: 24px;

        --text-l-font-size: 42px;
        --text-l-line-height: 28px;

        font-family: JetBrains Sans, Inter, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Arial, sans-serif;
        font-style: normal;
        margin: 0;
        font-size: var(--text-m-font-size);
        font-weight: 400;
        line-height: var(--text-m-line-height);
        letter-spacing: 0.0015em;
        color: var(--color-black);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
