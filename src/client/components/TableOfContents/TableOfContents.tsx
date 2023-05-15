import {FC, useEffect, useMemo, useState} from 'react';
import {useRouter} from 'next/router';

import type {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';

import {getTableOfContentsState, getPreOpenedItems} from './utils';
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

    useEffect(() => {
        if (currentPageId) {
            const result = getPreOpenedItems(pages, currentPageId);

            setOpenedItems(prev => new Set([...prev, ...result]));
        }
    }, [currentPageId, pages]);

    const itemsState = useMemo(() => {
        return currentPageId ? getTableOfContentsState(pages, currentPageId) : {};
    }, [currentPageId, pages]);

    return (
        <>
            {topLevelIds.map(id => (
                <TreeNode
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
