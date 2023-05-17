import {createRef, FC, useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';

import type {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';

import {getPreOpenedItems, getTableOfContentsState} from './utils';
import {TreeNode} from './TreeNode';

interface TableOfContentsProps {
    pages: Record<string, HelpTableOfContentPage>;

    topLevelIds: string[];

    pagesByUrls: Map<string, string>;
}

export const TableOfContents: FC<TableOfContentsProps> = ({pages, topLevelIds, pagesByUrls}) => {
    const [openedItems, setOpenedItems] = useState<Set<string>>(new Set());
    const pathname = useRouter().asPath.substring(1);
    const currentPageId = pagesByUrls.get(pathname);
    const scrollerRef = createRef<HTMLLIElement>();

    useEffect(() => {
        if (currentPageId) {
            const result = getPreOpenedItems(pages, currentPageId);

            setOpenedItems(prev => new Set([...prev, ...result]));
        }
    }, [currentPageId, pages]);

    const itemsState = useMemo(() => {
        return currentPageId ? getTableOfContentsState(pages, currentPageId) : {};
    }, [currentPageId, pages]);

    useEffect(() => {
        if (currentPageId && scrollerRef.current) {
            scrollerRef.current.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    }, [currentPageId, scrollerRef]);

    return (
        <>
            {topLevelIds.map(id => (
                <TreeNode
                    scrollerRef={scrollerRef}
                    openedItems={openedItems}
                    setOpenedItems={setOpenedItems}
                    key={id}
                    item={pages[id]}
                    allPages={pages}
                    itemsState={itemsState}
                />
            ))}
        </>
    );
};
