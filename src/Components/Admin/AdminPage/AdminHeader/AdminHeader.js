import {AccountContainer, Container, FindContainer, NotificationContainer, Input} from "./AdminHeader.styled";
import {AdminButton} from "../../../../Common/Button/AdminButton";
import {IconImage} from "../../../../Common/IconImage/IconImage";
import {IconImageHover} from "../../../../Common/IconImage/IconImageHover";

import Find from '../../../../img/adminFind.svg';
import Notification from '../../../../img/adminNotifications.svg'
import NotificationHover from '../../../../img/adminNotificationsHover.svg'

export const AdminHeader = ({logout}) => {

	return (
		<Container>
			<FindContainer>
				<IconImage
					height='14px'
					width='14px'
					margin='0 9px 0 27px'
					img={Find}
				/>
				<Input placeholder='Поиск...'/>
			</FindContainer>
			<NotificationContainer>
				<IconImageHover
					height='21px'
					width='17px'
					margin='0'
					img={Notification}
					imgHover={NotificationHover}
				/>
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