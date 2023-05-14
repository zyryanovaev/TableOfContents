import {type FC, ReactNode} from 'react';

import {SideBar} from '@components/SideBar';

import {Header, MainContent, StyledRoot} from './styles';

interface Props {
    children: ReactNode;
}

export const AppLayout: FC<Props> = ({children}) => {
    return (
        <StyledRoot>
            <Header />
            <SideBar />
            <MainContent>{children}</MainContent>
        </StyledRoot>
    );
};
