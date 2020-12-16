import Select from "react-select";
import React, {useEffect, useState} from "react";

import {
	AccountContainer,
	Container,
	FindContainer,
	NotificationContainer,
	CountContainer, customStyles,
} from "./AdminHeader.styled";
import {AdminButton} from "../../../../Common/Button/AdminButton";
import {IconImage} from "../../../../Common/IconImage/IconImage";
import {IconImageHover} from "../../../../Common/IconImage/IconImageHover";
import {Text} from "../../../../Common/Text/Text";

import Find from '../../../../img/adminFind.svg';
import Notification from '../../../../img/adminNotifications.svg'
import NotificationHover from '../../../../img/adminNotificationsHover.svg'


export const AdminHeader = ({logout, setNotice, notice, count, sections, changeMenuSection, history}) => {

	const [options, setOption] = useState(null);

	useEffect(() => {
		let arr = [];
		sections.forEach(item => {
			let obj = {
				label: item.name,
				value: item.link,
				item: item
			}
			arr.push(obj);
		});
		setOption(arr);
	}, [])

	return (
		<Container>
			<FindContainer>
				<IconImage
					height='14px'
					width='14px'
					margin='0 9px 0 27px'
					img={Find}
				/>
				<Select
					styles={customStyles}
					placeholder='Выбрать...'
					options={options}
					onChange={(e) => {
						changeMenuSection(e.item);
						history.push(e.value);
					}}
				/>
			</FindContainer>
			<NotificationContainer onClick={() => setNotice(!notice)}>
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