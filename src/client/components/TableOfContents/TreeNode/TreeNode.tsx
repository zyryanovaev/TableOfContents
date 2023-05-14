import {FC} from 'react';
import Link from 'next/link';

import {HelpTableOfContentPage} from '@clientTypes/help-table-of-content';
import {ExpandIcon} from '@components/icons/ExpandIcon';
import {useOpened} from '@hooks/useOpened';

import {SubTree} from '../SubTree';
import {ExpandIconContainer, StyledListItem, StyledTreeNode, SubTreeContainer} from './styles';

interface TreeNodeProps {
    item: HelpTableOfContentPage;
    allPages: Record<string, HelpTableOfContentPage>;
}

export const TreeNode: FC<TreeNodeProps> = ({item, allPages}) => {
    const {pages, level, title, url} = item;
    const hasChildren = pages?.length > 0;

    const [opened, toggle] = useOpened();

    const handleIconClick = event => {
        event.preventDefault();
        toggle();
    };

    return (
        <>
            <StyledListItem>
                <Link scroll={false} href={url || '#'} passHref>
                    <StyledTreeNode level={level}>
                        {hasChildren && (
                            <ExpandIconContainer onClick={handleIconClick} expanded={opened}>
                                <ExpandIcon />
                            </ExpandIconContainer>
                        )}
                        {title}
                    </StyledTreeNode>
                </Link>
            </StyledListItem>

            {pages && (
                <SubTreeContainer expanded={opened}>
                    <SubTree pages={pages} allPages={allPages} />
                </SubTreeContainer>
            )}
        </>
    );
};
