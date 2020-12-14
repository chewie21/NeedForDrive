import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import React from "react";

export const CityButtons = ({config, history, sendFunction, deleteFunction}) =>
	<React.Fragment>
		<div className='w-25'>
			<AdminButton
				size='11.5px'
				padding='8px'
				color='#E9ECEF'
				width='45%'
				textColor='#3D5170'
				onClick={() => history.goBack()}
			>
				Назад
			</AdminButton>
		</div>
		<div className='d-flex w-25 justify-content-between'>
			<AdminButton
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
		</div>
	</React.Fragment>
