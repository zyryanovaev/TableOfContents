import {Dispatch, FC, RefObject, SetStateAction, useMemo} from 'react';

import {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';
import {ExpandIcon} from '@components/icons/ExpandIcon';

import {MenuItem} from './MenuItem';
import {SubTree} from '../SubTree';
import {ColoredSubTree, ExpandIconContainer, StyledListItem, StyledTreeNode} from './styles';
import {TableOfContentsState} from '../types';

interface TreeNodeProps {
    item: HelpTableOfContentPage;
    allPages: Record<string, HelpTableOfContentPage>;
    itemsState: TableOfContentsState;
    openedItems: Set<string>;
    setOpenedItems: Dispatch<SetStateAction<Set<string>>>;
    scrollerRef: RefObject<HTMLLIElement>;
}

export const TreeNode: FC<TreeNodeProps> = ({item, allPages, itemsState, openedItems, setOpenedItems, scrollerRef}) => {
    const {pages, level, title, url, id} = item;
    const hasChildren = pages && pages.length > 0;

    const selected = itemsState.selectedItemId === id;
    const active = itemsState.activeParentId === id;
    const highlighted = itemsState.highlightedParentId === id;

    const isOpened = openedItems.has(id);

    const toggle = () => {
        setOpenedItems(prev => {
            const newState = new Set([...prev]);

            if (newState.has(id)) {
                newState.delete(id);
            } else {
                newState.add(id);
            }

            return newState;
        });
    };

    const handleIconClick = event => {
        event.preventDefault();
        toggle();
    };

    const ref = useMemo(() => {
        return selected ? scrollerRef : undefined;
    }, [selected]);

    return (
        <>
            <StyledListItem ref={ref}>
                <MenuItem url={url}>
                    <StyledTreeNode
                        data-testid={`tree-node-${id}`}
                        level={level}
                        selected={selected}
                        active={active}
                        highlighted={highlighted}
                        onClick={url ? undefined : toggle}
                    >
                        {hasChildren && (
                            <ExpandIconContainer
                                data-testid="tree-node-expanded-icon"
                                selected={selected}
                                onClick={url ? handleIconClick : undefined}
                                expanded={isOpened}
                            >
                                <ExpandIcon />
                            </ExpandIconContainer>
                        )}
                        {title}
                    </StyledTreeNode>
                </MenuItem>
            </StyledListItem>

            {pages && isOpened && (
                <ColoredSubTree active={active} highlighted={highlighted} data-testid={`sub-tree-${id}`}>
                    <SubTree
                        scrollerRef={scrollerRef}
                        pages={pages}
                        allPages={allPages}
                        itemsState={itemsState}
                        openedItems={openedItems}
                        setOpenedItems={setOpenedItems}
                    />
                </ColoredSubTree>
            )}
        </>
    );
};
