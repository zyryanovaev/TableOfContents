import {FC, ReactNode} from 'react';
import Link from 'next/link';

interface MenuItemProps {
    url?: string;

    children: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({url, children}) => {
    return (
        <>
            {url ? (
                <Link href={url} style={{textDecoration: 'none'}}>
                    {children}
                </Link>
            ) : (
                <>{children}</>
            )}
        </>
    );
};
