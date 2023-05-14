import {HelpTableOfContent} from './help-table-of-content';

export interface Context {
    data?: HelpTableOfContent;

    isLoading: boolean;

    pagesByUrls: Map<string, string>;
}
