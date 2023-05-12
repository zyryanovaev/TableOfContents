import {type FC, ReactNode} from 'react';
import styled from '@emotion/styled';

interface Props {
    children: ReactNode;
}

const StyledRoot = styled.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    grid-template-areas:
        'header header'
        'sidebar content';
    height: 100vh;
`;

export const AppLayout: FC<Props> = ({children}) => {
    return (
        <StyledRoot>
            <header style={{gridArea: 'header', height: '70px', backgroundColor: '#303033'}} />
            <div style={{gridArea: 'sidebar', width: '272px', backgroundColor: '#F9F9F9'}} />
            <div style={{gridArea: 'content'}}>{children}</div>
        </StyledRoot>
    );
};
