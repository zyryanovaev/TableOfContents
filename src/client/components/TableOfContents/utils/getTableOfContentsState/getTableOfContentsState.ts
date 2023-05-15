import {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';

import {TableOfContentsState} from '../../types';

export const getTableOfContentsState = (
    pages: Record<string, HelpTableOfContentPage>,
    currentPageId: string
): TableOfContentsState => {
    const selectedPage = pages[currentPageId];
    const selectedParentId = selectedPage.pages ? selectedPage.id : selectedPage.parentId;
    const activeParentId = pages[selectedParentId].level > 0 ? selectedParentId : undefined;

    let highlightedParentId = selectedParentId;

    while (pages[highlightedParentId].level > 0) {
        highlightedParentId = pages[highlightedParentId].parentId;
    }

    return {
        selectedItemId: currentPageId,
        activeParentId,
        highlightedParentId,
    };
};
