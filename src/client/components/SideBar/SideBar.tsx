import {FC, useContext} from 'react';

import {TableOfContents} from '@components/TableOfContents';
import {AppContext} from '@contexts/AppContext';
import {Skeleton} from '@components/Skeleton';

import {SkeletonSideBar, StyledSideBar} from './styles';

export const SideBar: FC = () => {
    const {data, isLoading, pagesByUrls} = useContext(AppContext);

    if (isLoading) {
        return (
            <SkeletonSideBar data-testid="loading-side-bar">
                <Skeleton height="20px" />
                <Skeleton height="20px" margin="0 32px 0 16px" />
                <Skeleton height="20px" margin="0 0 0 16px" />
                <Skeleton height="20px" margin="0 32px 0 16px" />
                <Skeleton height="20px" margin="0 0 0 32px" />
                <Skeleton height="20px" margin="0 32px 0 32px" />
                <Skeleton height="20px" margin="0 0 0 32px" />
                <Skeleton height="20px" margin="0 32px 0 32px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
            </SkeletonSideBar>
        );
    }

    if (data) {
        return (
            <StyledSideBar data-testid="toc-side-bar">
                <TableOfContents pages={data.entities.pages} topLevelIds={data.topLevelIds} pagesByUrls={pagesByUrls} />
            </StyledSideBar>
        );
    }

    return <StyledSideBar data-testid="no-data-side-bar" />;
};
