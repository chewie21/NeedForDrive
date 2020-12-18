import {ActiveButtonsContainer, ButtonsContainer, BackButtonContainer} from "./Button.styles";
import {AdminButton} from "./AdminButton";
import React from "react";

export const AdminInfoButtons = ({config, history, sendFunction, deleteFunction, padding}) =>
	<ButtonsContainer padding={padding}>
		<BackButtonContainer>
			<AdminButton
				size='11.5px'
				padding='8px'
				color='#E9ECEF'
				width='100%'
				textColor='#3D5170'
				onClick={() => history.goBack()}
			>
				Назад
			</AdminButton>
		</BackButtonContainer>
		<ActiveButtonsContainer>
			<AdminButton
				disabled={config.modalText}
				size='11.5px'
				padding='8px'
				color='#CB3656'
				width='45%'
				onClick={() => deleteFunction()}
			>
				Удалить
			</AdminButton>
			<AdminButton
				disabled={config.modalText}
				size='11.5px'
				padding='8px'
				color='#007BFF'
				width='45%'
				onClick={() => sendFunction()}
			>
				Сохранить
			</AdminButton>
		</ActiveButtonsContainer>
	</ButtonsContainer>

