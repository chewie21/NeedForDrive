import {AdminButton} from "../../../../../../../Common/Button/AdminButton";
import React from "react";

export const Buttons = ({config, setOrder, history}) =>
	<React.Fragment>
		<AdminButton
			size='11.5px'
			padding='8px'
			color='#007BFF'
			width='14%'
			margin='0 20px 0 0'
			disabled={!config.order.pointId}
			onClick={() => setOrder(config.order)}
		>
			Сохранить
		</AdminButton>
		<AdminButton
			size='11.5px'
			padding='8px'
			color='#E9ECEF'
			width='14%'
			textColor='#3D5170'
			onClick={() => history.goBack()}
		>
			Назад
		</AdminButton>
	</React.Fragment>
