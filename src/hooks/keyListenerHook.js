import { useEffect, useState } from 'react';

export const useKeyData = () => {
    const defaultKeyPressed = '';
    const keyData = useState(defaultKeyPressed);
    const setKeyPressed = keyData[1];

    useEffect(() => {
        const processKeyDown = (event) => {
            setKeyPressed(event.key.toLowerCase());
        }

        document.addEventListener('keydown', processKeyDown);
    }, [setKeyPressed]);

    return keyData;
};
