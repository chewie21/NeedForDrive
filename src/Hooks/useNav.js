import {useState} from "react";

export const useNav = () => {

    const step1 = {to: '/order/step1', text: 'Местоположение', active: true, lock: false, img: false, button: 'Выбрать модель'};
    const step2 = {to: '/order/step2', text: 'Модель', active: false, lock: true, img: true, button: 'Дополнительно'};
    const step3 = {to: '/order/step3', text: 'Дополнительно', active: false, lock: true, img: true, button: 'Итого'};
    const step4 = {to: '/order/step4', text: 'Итого', active: false, lock: true, img: false, button: 'Заказать'};

    const navSteps = [step1, step2, step3, step4];

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