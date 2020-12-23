
import {Text} from "../Text/Text";
import {AdminButton} from "../Button/AdminButton";
import {Container, ContentContainer} from "./AdminError.styled";

export const AdminError = ({history}) =>
	<Container>
		<ContentContainer>
			<Text
				weight='500'
				size='75px'
				margin='0 0 20px 0'
				color='#CACEDB'
			>
				500
			</Text>
			<Text
				weight='normal'
				size='50px'
				margin='0 0 15px 0'
				color='#3D5170'
			>
				Что-то пошло не так
			</Text>
			<Text
				weight='normal'
				size='2 0px'
				margin='0 0 35px 0'
				color='#818EA3'
			>
				Попробуйте перезагрузить страницу
			</Text>
			<AdminButton
				onClick={() => history.goBack()}
				size='15px'
				padding='8px'
				color='#007BFF'
				width='20%'
			>
				Назад
			</AdminButton>
		</ContentContainer>
	</Container>