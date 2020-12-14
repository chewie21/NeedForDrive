import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import React from "react";
import {orderUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {sendEditEntity} from "../../../../../../Functions/SendFunctions";

export const OrderButtons = ({config, setConfig, history, auth}) =>
	<React.Fragment>
		<AdminButton
			size='11.5px'
			padding='8px'
			color='#007BFF'
			width='14%'
			margin='0 20px 0 0'
			disabled={!config.data.pointId}
			onClick={() =>
				sendEditEntity(orderUrlPages, config, setConfig, auth,
					`Успех! Изменения сохраннены!`,
					`Упс... Что-то пошло не так...`)}
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
