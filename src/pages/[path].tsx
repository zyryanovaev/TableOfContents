import {FC, useContext} from 'react';
import {GetServerSideProps} from 'next';

import {AppContext} from '@contexts/AppContext';
import {Skeleton} from '@components/Skeleton';

import NotFound from './404';

interface PageProps {
    pathname: string;
}

const Page: FC<PageProps> = ({pathname}) => {
    const {data, pagesByUrls, isLoading} = useContext(AppContext);

    if (isLoading) {
        return <Skeleton width="500px" height="60px" />;
    }

    if (data && pathname && pagesByUrls.has(pathname)) {
        const pageId = pagesByUrls.get(pathname);

        return <h1 data-testid="content-header">{data.entities.pages[pageId].title}</h1>;
    }

    return <NotFound />;
};

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const pathname = params.path;

    return {
        props: {pathname},
    };
};

export default Page;
