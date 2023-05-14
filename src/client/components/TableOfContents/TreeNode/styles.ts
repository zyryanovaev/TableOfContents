import styled from '@emotion/styled';

export const StyledListItem = styled.li`
    cursor: pointer;
    list-style-type: none;
`;

export const StyledTreeNode = styled.div<{level: number}>`
    padding: ${({level}) => `8px 0px 8px ${16 * (level + 1)}px`};
    word-break: break-word;
    position: relative;
    border-left: 22px solid transparent;
    border-right: 22px solid transparent;
`;

export const ExpandIconContainer = styled.span<{expanded: boolean}>`
    transform: ${({expanded}) => (expanded ? 'rotate(90deg)' : undefined)};
    position: absolute;
    top: 10px;
    width: 16px;
    height: 16px;
    margin-left: -16px;
    transition: transform 0.2s;
`;

export const SubTreeContainer = styled.div<{expanded: boolean}>`
    display: ${({expanded}) => (expanded ? undefined : 'none')};
`;
