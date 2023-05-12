import {AppProps} from 'next/app';
import Head from 'next/head';
import {Global} from '@emotion/react';

import {AppLayout} from '@layouts/AppLayout';
import globalCss from '@styles/index';

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Table of Contents</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Global styles={globalCss} />

            <AppLayout>
                <Component {...pageProps} />
            </AppLayout>
        </>
    );
}
