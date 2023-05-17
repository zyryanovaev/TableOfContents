import styled from '@emotion/styled';

export const StyledSideBar = styled.aside`
    grid-area: sidebar;
    padding-top: 24px;
    width: 280px;
    background-color: var(--color-white);
    border-right: 1px solid var(--color-border);
    overflow-y: scroll;
`;

export const SkeletonSideBar = styled(StyledSideBar)`
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
