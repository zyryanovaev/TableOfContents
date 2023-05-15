import {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';

export const getPreOpenedItems = (
    pages: Record<string, HelpTableOfContentPage>,
    currentPageId: string
): Set<string> => {
    const result = new Set();
    const addPreOpenedItem = (pageId: string) => {
        result.add(pageId);
        const parent = pages[pageId].level > 0 ? pages[pageId].parentId : null;

        if (parent) {
            addPreOpenedItem(parent);
        }
    };

    addPreOpenedItem(currentPageId);

    return result;
};
