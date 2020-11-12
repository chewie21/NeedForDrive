import React from "react";

import {Container, Content} from "./UserLocation.styled";
import {Text} from "../Text/Text";
import {Button} from "../Button/Button";

export const UserLocation = ({userLocation, setConfirm, setUserLocation}) => {

    return (
        <Container>
            <Content>
                <Text
                    weight='500'
                    margin='0 0 16px 0'
                    size='25px'
                    color='#FFFFFF'
                >Ваш город:</Text>
                <Text
                    weight='500'
                    margin='0 0 32px 0'
                    size='30px'
                    color='#FFFFFF'
                >{userLocation.name}?</Text>
                <Button
                    size='16px'
                    width='100%'
                    color='linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)'
                    hoverColor='linear-gradient(90deg, #0E352E 0%, #085612 100%)'
                    clickColor='linear-gradient(90deg, #071B17 0%, #074710 100%)'
                    margin='0 0 16px 0'
                    onClick={() => setConfirm(true)}
                >Да</Button>
                <Button
                    size='16px'
                    width='100%'
                    color='linear-gradient(90deg, #493013 0%, #7B0C3B 100%)'
                    hoverColor='linear-gradient(90deg, #2D1D0B 0%, #5F082C 100%)'
                    clickColor='linear-gradient(90deg, #181006 0%, #460722 100%)'
                    onClick={() => {
                        setConfirm(true);
                        setUserLocation(null);
                    }}
                >Нет</Button>
            </Content>
        </Container>
    )
}