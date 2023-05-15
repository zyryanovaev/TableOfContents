import {AppProps} from 'next/app';
import Head from 'next/head';
import {Global} from '@emotion/react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {AppLayout} from '@layouts/AppLayout';
import globalCss from '@styles/index';
import {AppContextProvider} from '@contexts/AppContextProvider';

const queryClient = new QueryClient();

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Table of Contents</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Global styles={globalCss} />

            <QueryClientProvider client={queryClient}>
                <AppContextProvider>
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                </AppContextProvider>
            </QueryClientProvider>
        </>
    );
}
