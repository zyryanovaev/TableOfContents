export interface HelpTableOfContentPage {
    pages?: string[];
    id: string;
    title: string;
    url?: string;
    parentId: string;
    level: number;
}

export interface HelpTableOfContent {
    entities: {
        pages: Record<string, HelpTableOfContentPage>;
    };

    topLevelIds: string[];
}
