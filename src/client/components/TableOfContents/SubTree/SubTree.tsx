import {Dispatch, FC, SetStateAction, useMemo} from 'react';

import {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';

import {TreeNode} from '../TreeNode';
import {TableOfContentsState} from '../types';

interface SubTreeProps {
    pages: string[];
    allPages: Record<string, HelpTableOfContentPage>;
    itemsState: TableOfContentsState;
    openedItems: Set<string>;
    setOpenedItems: Dispatch<SetStateAction<Set<string>>>;
}

export const SubTree: FC<SubTreeProps> = ({pages, allPages, itemsState, openedItems, setOpenedItems}) => {
    const subPages = useMemo(() => {
        return pages.map(page => allPages[page]);
    }, [allPages, pages]);

    return (
        <>
            {subPages.map(item => (
                <TreeNode
                    key={item.id}
                    item={item}
                    allPages={allPages}
                    itemsState={itemsState}
                    openedItems={openedItems}
                    setOpenedItems={setOpenedItems}
                />
            ))}
        </>
    );
};
