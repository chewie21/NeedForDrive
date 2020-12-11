import {logoutRequest} from "../../../Functions/RequestsToApiFactory";
import {
    carsUrlPages,
    categoriesUrlPages,
    citiesUrlPages,
    logoutUrlPages,
    orderStatusUrlPages,
    pointsUrlPages,
    rateUrlPages
} from "../../../Environments/ApiFactoryUrls";
import {Container, HeaderContainer, MenuContainer, Style, SwitchContainer} from "./AdminPage.styled";
import {AdminMenu} from "./AdminMenu/AdminMenu";
import {AdminHeader} from "./AdminHeader/AdminHeader";
import React from "react";
import {AdminSwitch} from "./AdminContent/AdminSwitch";
import {useGetRequest} from "../../../Hooks/useGetRequest";

export const AdminPage = ({auth, setAuth, history}) => {

    const cities = useGetRequest(citiesUrlPages);
    const points = useGetRequest(pointsUrlPages);
    const cars = useGetRequest(carsUrlPages);
    const categories = useGetRequest(categoriesUrlPages);
    const rate = useGetRequest(rateUrlPages);
    const orderStatus = useGetRequest(orderStatusUrlPages);

    const logout = () => {
        logoutRequest(logoutUrlPages,`Bearer ${auth.access_token}`)
            .then(res => {
                console.log(res);
                setAuth(null);
                history.push('/admin')
            });
    }

    return (
        <Container>
            <Style/>
            <MenuContainer>
                <AdminMenu
                    cities={cities}
                    points={points}
                    cars={cars}
                    categories={categories}
                    rate={rate}
                    orderStatus={orderStatus}
                />
            </MenuContainer>
            <HeaderContainer>
                <AdminHeader logout={logout}/>
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
                />
            </SwitchContainer>
        </Container>
    )
}