import styled from '@emotion/styled';

export const SkeletonContainer = styled.div<{height?: string; width?: string; margin?: string}>`
    background: var(--color-skeleton-light);
    background: linear-gradient(
        110deg,
        var(--color-skeleton-dark) 8%,
        var(--color-skeleton-light) 18%,
        var(--color-skeleton-dark) 33%
    );
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
