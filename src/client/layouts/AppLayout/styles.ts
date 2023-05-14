import styled from '@emotion/styled';

export const StyledRoot = styled.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    grid-template-areas:
        'header header'
        'sidebar content';
    height: 100vh;
`;

export const Header = styled.header`
    grid-area: header;
    height: 70px;
    background-color: #303033;
`;

export const MainContent = styled.main`
    grid-area: content;
    padding: 32px;
`;
