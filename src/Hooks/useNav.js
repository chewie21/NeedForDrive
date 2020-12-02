import {useState} from "react";

export const useNav = () => {

    const navSteps = [
        {to: '/order/step1', text: 'Местоположение', active: true, lock: false, img: false, button: 'Выбрать модель'},
        {to: '/order/step2', text: 'Модель', active: false, lock: true, img: true, button: 'Дополнительно'},
        {to: '/order/step3', text: 'Дополнительно', active: false, lock: true, img: true, button: 'Итого'},
        {to: '/order/step4', text: 'Итого', active: false, lock: true, img: false, button: 'Заказать'}
    ]

    const [navs, setNavs] = useState(navSteps);

    const setActiveStep = (id) => {
        const arr = navs.map(
            (item, index) => {
                item.active = index === id;
                return item;
            });
        setNavs(arr);
    }

    const removeUnlockSteps = (id) => {
        const arr = navs.map(
            (item, index) => {
                item.lock = index >= id + 1
                return item;
            });
        setNavs(arr);
    }

    const changeUnlockSteps = (id) => {
        const arr = navs.map(
            (item, index) => {
                item.lock = index > id + 1;
                return item;
            }
        )
        setNavs(arr);
    }

    return {navs, setActiveStep, removeUnlockSteps, changeUnlockSteps}
}