import {FC, useMemo} from 'react';

import {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';

import {TreeNode} from '../TreeNode';

interface SubTreeProps {
    pages: string[];
    allPages: Record<string, HelpTableOfContentPage>;
}

export const SubTree: FC<SubTreeProps> = ({pages, allPages}) => {
    const subPages = useMemo(() => {
        return pages.map(page => allPages[page]);
    }, [allPages, pages]);

    return (
        <>
            {subPages.map(item => (
                <TreeNode key={item.id} item={item} allPages={allPages} />
            ))}
        </>
    );
};
