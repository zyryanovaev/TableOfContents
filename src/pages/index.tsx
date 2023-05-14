import {useContext} from 'react';
import {useRouter} from 'next/router';

import {AppContext} from '@contexts/AppContext';
import {Skeleton} from '@components/Skeleton';

export default function Home() {
    const {data, isLoading} = useContext(AppContext);
    const router = useRouter();

    if (isLoading) {
        return <Skeleton width="500px" height="60px" />;
    }

    if (data && data.topLevelIds.length > 0) {
        const firstPageId = data.topLevelIds[0];
        const url = data.entities.pages[firstPageId].url;

        router.replace(`/${url}`);
    }

    return null;
}
