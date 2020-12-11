import {Container, LogoContainer, MenuSection} from "./AdminMenu.styled";
import {IconImage} from "../../../../Common/IconImage/IconImage";
import {Text} from "../../../../Common/Text/Text";
import {Link} from "react-router-dom";

import LoginLogo from "../../../../img/adminMenuIcon.svg";
import CarsActive from '../../../../img/adminCarsActive.svg';
import OrdersActive from '../../../../img/adminOrdersActive.png';
import {useState} from "react";

export const AdminMenu = () => {

    const sections = [
        {name: 'Заказы', active: true, img: OrdersActive, link: '/admin/orders'},
        {name: 'Список авто', active: false, img: CarsActive, link: '/admin/cars'}
    ];

    const [menuSections, setMenuSections] = useState(sections);

    const changeMenuSection = (section) => {
        const arr = menuSections.map(item => {
            item.active = item === section;
            return item;
        });
        setMenuSections(arr);
    }

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
            {menuSections.map((item, index) => (
                <Link to={item.link} key={index} onClick={() => changeMenuSection(item)}>
                    {item.active ?
                        <MenuSection index={index} border='4px solid #007BFF' padding='22px'>
                            <IconImage
                                height='14.5px'
                                width='14.5px'
                                margin='0 12px 0 0'
                                img={item.img}
                            />
                            <Text
                                weight='normal'
                                size='15px'
                                margin='0'
                                color='#007BFF'
                            >
                                {item.name}
                            </Text>
                        </MenuSection>
                        :
                        <MenuSection index={index} padding='26px'>
                            <IconImage
                                height='14.5px'
                                width='14.5px'
                                margin='0 12px 0 0'
                                img={item.img}
                            />
                            <Text
                                weight='normal'
                                size='15px'
                                margin='0'
                                color='#3D5170'
                            >
                                {item.name}
                            </Text>
                        </MenuSection>}
                </Link>
            ))}
        </Container>
    )
}