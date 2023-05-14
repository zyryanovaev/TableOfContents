import {FC, memo} from 'react';

import type {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';

import {TreeNode} from './TreeNode';

interface TableOfContentsProps {
    pages: Record<string, HelpTableOfContentPage>;

    topLevelIds: string[];
}

export const TableOfContents: FC<TableOfContentsProps> = memo(({pages, topLevelIds}) => {
    return (
        <>
            {topLevelIds.map(id => (
                <TreeNode key={id} item={pages[id]} allPages={pages} />
            ))}
        </>
    );
});
