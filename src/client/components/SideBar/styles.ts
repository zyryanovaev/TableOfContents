import styled from '@emotion/styled';

export const StyledSideBar = styled.aside`
    grid-area: sidebar;
    padding-top: 24px;
    width: 280px;
    background-color: #f9f9f9;
`;

export const SkeletonSideBar = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: sidebar;
    gap: 20px;
    width: 280px;
    background-color: #f9f9f9;
`;
