import {Text} from "../../../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../../../Common/IconImage/IconImageHover";
import CloseModal from "../../../../../../../img/closeModal.svg";
import {ModalContainer} from "../AdminOrderInfo.styled";
import React from "react";

export const Modal = ({config, setConfig}) =>
	<ModalContainer
		color={config.modal ? '#0EC261' : '#CB3656'}
	>
		<Text
			weight='normal'
			size='13px'
			margin='0'
			color='white'
		>
			{config.modal ? `Успех! Изменения сохраннены!` : `Упс... Что-то пошло не так...`}
		</Text>
		<IconImageHover
			height='10px'
			width='10px'
			margin='0'
			img={CloseModal}
			imgHover={CloseModal}
			onClick={() => {
				delete config[`modal`];
				setConfig({...config});
			}}
		/>
	</ModalContainer>