import {createContext} from 'react';

import {Context} from '@clientTypes/context';

export const AppContext = createContext<Context>({
    isLoading: true,
    pagesByUrls: new Map(),
});
