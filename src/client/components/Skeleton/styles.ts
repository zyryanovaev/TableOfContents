import styled from '@emotion/styled';

export const SkeletonContainer = styled.div<{height?: string; width?: string; margin?: string}>`
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    height: ${({height}) => height || undefined};
    width: ${({width}) => width || undefined};
    margin: ${({margin}) => margin || '0'};

    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
`;
