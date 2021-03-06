import React, {useState} from "react";

import {useInterval} from "@restart/hooks";
import {AdminMenu} from "./AdminMenu/AdminMenu";
import {AdminHeader} from "./AdminHeader/AdminHeader";
import {AdminSwitch} from "./AdminContent/AdminSwitch";
import {useGetRequest} from "../../../Hooks/useGetRequest";
import {getRequest, logoutRequest} from "../../../Functions/RequestsToApiFactory";
import {AdminFooter} from "./AdminFooter/AdminFooter";
import {Notification} from "./Notification/Notification";

import {
    Container,
    FooterContainer,
    HeaderContainer,
    MenuContainer,
    NotificationContainer,
    Style,
    SwitchContainer
} from "./AdminPage.styled";

import {
    carsUrlPages,
    categoriesUrlPages,
    citiesUrlPages,
    logoutUrlPages,
    orderStatusUrlPages, orderUrlPages,
    pointsUrlPages, rateTypeUrlPages,
    rateUrlPages
} from "../../../Environments/ApiFactoryUrls";

import OrdersActive from "../../../img/adminOrdersActive.png";
import CarsActive from "../../../img/adminCarsActive.svg";
import CitiesActive from "../../../img/citiesActive.svg";
import RateActive from "../../../img/rateActive.svg";

export const AdminPage = ({auth, setAuth, history}) => {

    const cities = useGetRequest(citiesUrlPages);
    const points = useGetRequest(pointsUrlPages);
    const cars = useGetRequest(carsUrlPages);
    const categories = useGetRequest(categoriesUrlPages);
    const rate = useGetRequest(rateUrlPages);
    const orderStatus = useGetRequest(orderStatusUrlPages);
    const rateType = useGetRequest(rateTypeUrlPages);

    const [notice, setNotice] = useState(false);
    const [noticeConfig, setNoticeConfig] = useState(null);
    const [noticeError, setNoticeError] = useState(false);
    const [noticeLoading, setNoticeLoading] = useState(false);

    //в нормальном приложении тут должны выводится новые заказы, но так как у нас тут все заказы новые взял другой статус
    const getNotifications = () => {
        setNoticeLoading(true);
        getRequest(`${orderUrlPages}?orderStatusId=5e26a1f0099b810b946c5d8b&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
            .then(res => {
                setNoticeConfig({
                    data: res.data,
                    count: res.count
                });
                setNoticeLoading(false);
            }).catch(error => {
            setNoticeError(true);
            setNoticeLoading(false);
        });
    }

    useInterval(() => {
        getNotifications();
    }, 10000);

    const ordersSec =  {name: 'Заказы', active: true, img: OrdersActive, link: '/admin/orders'};
    const orderStatusSec = {name: 'Статусы заказов', active: false, img: OrdersActive, link: '/admin/orderStatus'};

    const carsSec = {name: 'Автомобили', active: false, img: CarsActive, link: '/admin/cars'};
    const categoriesSec = {name: 'Категории авто', active: false, img: CarsActive, link: '/admin/categories'};

    const citiesSec = {name: 'Города', active: false, img: CitiesActive, link: '/admin/cities'};
    const pointsSec = {name: 'Пункты выдачи', active: false, img: CitiesActive, link: '/admin/points'};

    const rateSec = {name: 'Тарифы', active: false, img: RateActive, link: '/admin/rate'};
    const rateTypeSec = {name: 'Виды тарифов', active: false, img: RateActive, link: '/admin/rateType'}

    const sections = [
        ordersSec, orderStatusSec,
        carsSec, categoriesSec,
        citiesSec, pointsSec,
        rateSec, rateTypeSec
    ];

    const [menuSections, setMenuSections] = useState(sections);

    const changeMenuSection = (section) => {
        const arr = menuSections.map(item => {
            item.active = item === section;
            return item;
        });
        setMenuSections(arr);
    }

    const logout = () => {
        logoutRequest(logoutUrlPages,`Bearer ${auth.access_token}`)
            .then(res => {
                setAuth(null);
                history.push('/admin')
            });
    }

    return (
        <Container>
            <Style/>
            <MenuContainer>
                <AdminMenu
                    menuSections={menuSections}
                    changeMenuSection={changeMenuSection}
                />
            </MenuContainer>
            <HeaderContainer>
                <AdminHeader
                    logout={logout}
                    notice={notice}
                    setNotice={setNotice}
                    count={noticeConfig ? noticeConfig.count : null}
                    sections={menuSections}
                    changeMenuSection={changeMenuSection}
                    history={history}
                />
            </HeaderContainer>
            <SwitchContainer>
                <AdminSwitch
                    auth={auth}
                    history={history}
                    cities={cities}
                    points={points}
                    cars={cars}
                    categories={categories}
                    rate={rate}
                    orderStatus={orderStatus}
                    rateType={rateType}
                />
            </SwitchContainer>
            <FooterContainer>
                <AdminFooter/>
            </FooterContainer>
            {notice &&
                <NotificationContainer>
                    <Notification
                        auth={auth}
                        history={history}
                        orderStatus={orderStatus}
                        notice={notice}
                        setNotice={setNotice}
                        config={noticeConfig}
                        setConfig={setNoticeConfig}
                        loading={noticeLoading}
                        error={noticeError}
                        getNotice={getNotifications}
                    />
                </NotificationContainer>}
        </Container>
    )
}