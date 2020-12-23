import Select from "react-select";
import React, {useEffect, useState} from "react";

import {
	AccountContainer,
	Container,
	FindContainer,
	NotificationContainer,
	CountContainer, customStyles, MenuContainer,
} from "./AdminHeader.styled";
import {AdminButton} from "../../../../Common/Button/AdminButton";
import {IconImage} from "../../../../Common/IconImage/IconImage";
import {IconImageHover} from "../../../../Common/IconImage/IconImageHover";
import {Text} from "../../../../Common/Text/Text";

import Find from '../../../../img/adminFind.svg';
import Notification from '../../../../img/adminNotifications.svg'
import NotificationHover from '../../../../img/adminNotificationsHover.svg'
import BurgerImg from "../../../../img/admin_menu_btn_mobile.svg";
import BurgerImgHover from "../../../../img/admin_menu_btn_hover.svg";


export const AdminHeader = ({logout, count, sections, changeMenuSection, history, toggle}) => {

	const [options, setOption] = useState(null);

	useEffect(() => {
		setOption(
			sections.map(item => (
				{
					label: item.name,
					value: item.link,
					item: item
				}
			))
		)
	}, []);

	return (
		<Container>
			<MenuContainer>
				<IconImageHover
					onClick={() => toggle(`menu`)}
					height='32px'
					width='32px'
					margin='auto'
					img={BurgerImg}
					imgHover={BurgerImgHover}
				/>
			</MenuContainer>
			<FindContainer>
				<IconImage
					height='14px'
					width='14px'
					margin='0 9px 0 0'
					img={Find}
				/>
				<Select
					styles={customStyles}
					placeholder='Выбрать...'
					options={options}
					onChange={(e) => {
						changeMenuSection(e.item);
						toggle();
						history.push(e.value);
					}}
				/>
			</FindContainer>
			<NotificationContainer onClick={() => toggle(`notice`)}>
				<IconImageHover
					height='21px'
					width='17px'
					margin='0'
					img={Notification}
					imgHover={NotificationHover}
				/>
				{count &&
				<CountContainer>
					<Text
						weight='600'
						size='9px'
						color='#FFFFFF'
						margin='0'
					>
						{count}
					</Text>
				</CountContainer>}
			</NotificationContainer>
			<AccountContainer>
				<AdminButton
					size='11.5px'
					padding='8px'
					color='#CB3656'
					width='100%'
					onClick={logout}
				>
					Выйти
				</AdminButton>
			</AccountContainer>
		</Container>
	)
}