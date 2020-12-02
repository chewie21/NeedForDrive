import {AccountContainer, Container, FindContainer, NotificationContainer} from "./AdminHeader.styled";
import {AdminButton} from "../../../../Common/Button/AdminButton";

export const AdminHeader = ({logout}) => {

	return (
		<Container>
			<FindContainer>

			</FindContainer>
			<NotificationContainer>

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