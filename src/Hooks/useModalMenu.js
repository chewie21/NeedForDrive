import { useState } from 'react';

export const useModalMenu = () => {
    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    return {active, toggle};
}
