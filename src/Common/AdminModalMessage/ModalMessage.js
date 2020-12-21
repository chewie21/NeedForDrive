import {Text} from "../Text/Text";
import {IconImageHover} from "../IconImage/IconImageHover";
import CloseModal from "../../img/closeModal.svg";
import React from "react";
import {Container} from "./ModalMessage.styled";
import {closeModal} from "../../Functions/SendFunctions";

export const ModalMessage = ({config, setConfig, margin}) =>
	<Container
		color={config.modalColor}
		margin={margin ? margin : '0'}
	>
		<Text
			weight='normal'
			size='13px'
			margin='0'
			color='white'
		>
			{config.modalText}
		</Text>
		<IconImageHover
			height='10px'
			width='10px'
			margin='0'
			img={CloseModal}
			imgHover={CloseModal}
			onClick={() => closeModal(config, setConfig)}
		/>
	</Container>