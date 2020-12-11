import {Container, SelectContainer, ButtonContainer} from "./AdminFilters.styled";
import {AdminButton} from "../Button/AdminButton";

export const AdminFilters = ({find, reset}) =>
	<Container>
		<SelectContainer>

		</SelectContainer>
		<ButtonContainer>
			<AdminButton
				size='11.5px'
				padding='8px'
				color='#007BFF'
				width='45%'
				onClick={find}
			>
				Найти
			</AdminButton>
			<AdminButton
				size='11.5px'
				padding='8px'
				color='#CB3656'
				width='45%'
				onClick={reset}
			>
				Сброс
			</AdminButton>
		</ButtonContainer>
	</Container>