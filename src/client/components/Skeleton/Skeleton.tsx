import {FC} from 'react';

import {SkeletonContainer} from './styles';

export interface SkeletonProps {
    height?: string;

    width?: string;

    margin?: string;
}

export const Skeleton: FC<SkeletonProps> = ({height, width, margin}) => {
    return <SkeletonContainer height={height} width={width} margin={margin} />;
};
