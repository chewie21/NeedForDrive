import {Container, LogoContainer, MenuSection} from "./AdminMenu.styled";
import {IconImage} from "../../../../Common/IconImage/IconImage";

import LoginLogo from "../../../../img/adminMenuIcon.svg";
import {Text} from "../../../../Common/Text/Text";

export const AdminMenu = () => {
    return (
        <Container>
            <LogoContainer>
                <IconImage
                    height='21.5px'
                    width='21.5px'
                    margin='0 8px 0 0'
                    img={LoginLogo}
                />
                <Text
                    weight='normal'
                    size='16px'
                    margin='0'
                    color='#3D5170'
                >
                    Need for car
                </Text>
            </LogoContainer>
            <MenuSection>

            </MenuSection>
            <MenuSection>

            </MenuSection>
        </Container>
    )
}