import {type FC, ReactNode, useMemo} from 'react';
import ky, {HTTPError} from 'ky';
import {useQuery} from 'react-query';

import {HelpTableOfContent} from '@clientTypes/help-table-of-content';
import {AppContext} from '@contexts/AppContext';

const HELP_TOC_DATA_QUERY_KEY = 'app-help-toc-query-key';

const fetchHelpTOCData = async (): Promise<HelpTableOfContent> => ky.get('/api/help-toc').json<HelpTableOfContent>();

export const AppContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const {data, isLoading} = useQuery<HelpTableOfContent, HTTPError, HelpTableOfContent>(
        HELP_TOC_DATA_QUERY_KEY,
        fetchHelpTOCData,
        {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    );

    const pagesByUrls: Map<string, string> = useMemo(() => {
        return Object.keys(data?.entities.pages || {}).reduce((acc, currentValue) => {
            const url = data?.entities.pages[currentValue].url;

            if (url) {
                acc.set(url, currentValue);
            }

            return acc;
        }, new Map());
    }, [data]);

    return <AppContext.Provider value={{data, isLoading, pagesByUrls}}>{children}</AppContext.Provider>;
};
