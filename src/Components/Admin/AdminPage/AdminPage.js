import {logoutRequest} from "../../../Functions/RequestsToApiFactory";
import {logoutUrl, logoutUrlPages} from "../../../Environments/ApiFactoryUrls";
import {Container, HeaderContainer, MenuContainer} from "./AdminPage.styled";
import {AdminMenu} from "./AdminMenu/AdminMenu";
import {AdminHeader} from "./AdminHeader/AdminHeader";

export const AdminPage = ({auth, setAuth, history}) => {

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
            <MenuContainer>
                <AdminMenu/>
            </MenuContainer>
            <HeaderContainer>
                <AdminHeader logout={logout}/>
            </HeaderContainer>
        </Container>
    )
}