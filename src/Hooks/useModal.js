import { useState } from 'react';

export const useModal = () => {

    const [active, setActive] = useState(false);

    const toggle = () => setActive(!active);

    return {active, toggle};
}
