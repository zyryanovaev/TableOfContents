import styled from '@emotion/styled';

interface StyledTreeNodeProps {
    level: number;
    selected: boolean;
    highlighted: boolean;
    active: boolean;
}

type ColoredTreeNodeProps = Omit<StyledTreeNodeProps, 'level'>;

export const StyledListItem = styled.li`
    cursor: pointer;
    list-style-type: none;
`;

const ColoredTreeNode = styled.div<ColoredTreeNodeProps>`
    color: ${({selected}) => (selected ? 'var(--color-white)' : 'var(--color-black)')};
    background-color: ${({selected, highlighted, active}) => {
        if (selected) return 'var(--color-background-selected)';
        if (highlighted) return 'var(--color-background-highlighted)';
        if (active) return 'var(--color-background-highlighted-active)';

        return 'var(--color-white)';
    }};
`;

export const StyledTreeNode = styled(ColoredTreeNode)<StyledTreeNodeProps>`
    padding: ${({level}) => `8px 0px 8px ${16 * (level + 1)}px`};
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;
    border-left: 22px solid transparent;
    border-right: 22px solid transparent;
    font-size: var(--text-s-font-size);
    line-height: var(--text-s-line-height);
    letter-spacing: 0.0045em;
`;

export const ExpandIconContainer = styled.span<{expanded: boolean; selected: boolean}>`
    transform: ${({expanded}) => (expanded ? 'rotate(90deg)' : undefined)};
    position: absolute;
    top: 10px;
    width: 16px;
    height: 16px;
    margin-left: -18px;
    transition: transform 0.2s;
    fill: ${({selected}) => (selected ? 'var(--color-white)' : 'var(--color-black)')};
`;
