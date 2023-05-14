import {useCallback, useMemo, useState} from 'react';

export const useOpened = (defaultValue: boolean = false): [boolean, () => void, () => void, () => void] => {
    const [opened, setOpened] = useState(defaultValue);

    const open = useCallback(() => setOpened(true), []);
    const close = useCallback(() => setOpened(false), []);
    const toggle = useCallback(() => setOpened(prevState => !prevState), []);

    return useMemo(() => [opened, toggle, open, close], [close, open, opened, toggle]);
};
