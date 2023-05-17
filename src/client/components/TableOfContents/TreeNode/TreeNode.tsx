import {Dispatch, FC, SetStateAction} from 'react';
import Link from 'next/link';

import {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';
import {ExpandIcon} from '@components/icons/ExpandIcon';

import {SubTree} from '../SubTree';
import {ColoredSubTree, ExpandIconContainer, StyledListItem, StyledTreeNode} from './styles';
import {TableOfContentsState} from '../types';

interface TreeNodeProps {
    item: HelpTableOfContentPage;
    allPages: Record<string, HelpTableOfContentPage>;
    itemsState: TableOfContentsState;
    openedItems: Set<string>;
    setOpenedItems: Dispatch<SetStateAction<Set<string>>>;
}

export const TreeNode: FC<TreeNodeProps> = ({item, allPages, itemsState, openedItems, setOpenedItems}) => {
    const {pages, level, title, url, id} = item;
    const hasChildren = pages?.length > 0;

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

    return (
        <>
            <StyledListItem>
                {url ? (
                    <Link href={url} style={{textDecoration: 'none'}}>
                        <StyledTreeNode
                            data-testid={`tree-node-${id}`}
                            level={level}
                            selected={selected}
                            active={active}
                            highlighted={highlighted}
                        >
                            {hasChildren && (
                                <ExpandIconContainer
                                    data-testid="tree-node-expanded-icon"
                                    selected={selected}
                                    onClick={handleIconClick}
                                    expanded={isOpened}
                                >
                                    <ExpandIcon />
                                </ExpandIconContainer>
                            )}
                            {title}
                        </StyledTreeNode>
                    </Link>
                ) : (
                    <StyledTreeNode
                        level={level}
                        selected={selected}
                        active={active}
                        highlighted={highlighted}
                        onClick={toggle}
                        data-testid={`tree-node-${id}`}
                    >
                        {hasChildren && (
                            <ExpandIconContainer selected={selected} expanded={isOpened}>
                                <ExpandIcon />
                            </ExpandIconContainer>
                        )}
                        {title}
                    </StyledTreeNode>
                )}
            </StyledListItem>

            {pages && isOpened && (
                <ColoredSubTree active={active} highlighted={highlighted} data-testid={`sub-tree-${id}`}>
                    <SubTree
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
