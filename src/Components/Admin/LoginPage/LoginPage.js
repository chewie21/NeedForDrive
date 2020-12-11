import {BackgroundContainer, Container, Content, Input, LogoRow} from "./LoginPage.styled";
import {IconImage} from "../../../Common/IconImage/IconImage";
import {Text} from "../../../Common/Text/Text";

import {TextLink} from "../../../Common/Text/TextLink";
import {AdminButton} from "../../../Common/Button/AdminButton";
import {oauthUrlPages, secret} from "../../../Environments/ApiFactoryUrls";

import {postRequest} from "../../../Functions/RequestsToApiFactory";
import {formatDateToToken, formatToken} from "../../../Functions/Format";

import LoginLogo from '../../../img/adminLoginIcon.svg'

export const LoginPage = ({setAuth, history}) => {

    const login = (event) => {
        event.preventDefault();
        const token = formatToken(secret);
        postRequest(oauthUrlPages, {"username": event.target.email.value, "password": event.target.password.value}, `Basic ${token}`)
            .then(response => {
                console.log(response);
                let obj = {...response, main_token: token, expires_in: formatDateToToken(response.expires_in)};
                setAuth(obj);
                history.push('/admin');
            }, error => console.log(error));
    }

    return (
        <BackgroundContainer>
            <Container>
                <LogoRow>
                    <IconImage
                        height='44.5px'
                        width='44.5px'
                        margin='0 12px 0 0'
                        img={LoginLogo}
                    />
                    <Text
                        weight='normal'
                        size='24px'
                        color='#3D5170'
                        margin='0'
                    >
                        Need for drive
                    </Text>
                </LogoRow>
                <Content>
                    <Text
                        weight='normal'
                        size='17.5px'
                        textAlign='center'
                        margin='0 0 36px 0'
                        color='#3D5170'
                    >
                        Вход
                    </Text>
                    <form
                        onSubmit={login}
                    >
                        <Text
                            weight='normal'
                            size='10.5px'
                            color='#495057'
                            margin='0 0 8px 0'
                        >
                            Почта
                        </Text>
                        <Input type='email' placeholder='Email' name='email' required/>
                        <Text
                            weight='normal'
                            size='10.5px'
                            color='#495057'
                            margin='0 0 8px 0'
                        >
                            Пароль
                        </Text>
                        <Input type='password' placeholder='Пароль' name='password' required/>
                        <div className='d-flex justify-content-between align-items-center'>
                            <TextLink
                                weight='normal'
                                size='10.5px'
                                matgin='0'
                                color='#007BFF'
                            >
                                Запросить доступ
                            </TextLink>
                            <AdminButton
                                type="submit"
                                size='11.5px'
                                color='#007BFF'
                                width='30%'
                                padding='.375rem .75rem'
                            >
                                Войти
                            </AdminButton>
                        </div>
                    </form>
                </Content>
            </Container>
        </BackgroundContainer>
    )
}