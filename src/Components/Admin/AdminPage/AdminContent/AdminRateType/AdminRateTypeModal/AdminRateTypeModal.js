import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";

import {sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {RateTypeName} from "../AdminRateTypeComponents/RateTypeName";
import {RateTypeUnit} from "../AdminRateTypeComponents/RateTypeUnit";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";

import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import {InfoSection} from "../AdminRateType.styled";

import {rateTypeUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {emptyRateType} from "../../EntitiesConstant";

export const AdminRateTypeModal = ({onHide, show, auth, getRateType, rateType}) => {

	const [config, setConfig] = useState(null);

	const refreshConfig = () => setConfig({ data: emptyRateType });

	const redirect = () => {
		onHide();
		rateType.refreshResponse();
		refreshConfig();
		getRateType();
	};

	const sendNewRateType = () => sendNewEntity(rateTypeUrlPages, config, setConfig, auth, redirect);

	useEffect(() => {
		refreshConfig();
	}, []);

	return (
		config &&
		<Modal
			show={show}
			size="lg"
			centered
			onHide={onHide}
		>
			{config.modalText &&
				<ModalMessage config={config} setConfig={setConfig} margin='-50px 0 0 0'/>
			}
			<Modal.Header closeButton className='d-flex justify-content-around'>
				<Text
					weight='normal'
					size='25px'
					margin='0'
					color='#3D5170'
				>
					Добавить тариф
				</Text>
			</Modal.Header>
			<Modal.Body>
				<InfoSection margin='0 0 15px 0'>
					<RateTypeName config={config} setConfig={setConfig}/>
				</InfoSection>
				<InfoSection>
					<RateTypeUnit config={config} setConfig={setConfig}/>
				</InfoSection>
			</Modal.Body>
			<Modal.Footer>
				<AdminButton
					disabled={config.modalText}
					size='14px'
					padding='8px'
					color='#007BFF'
					width='100%'
					onClick={sendNewRateType}
				>
					Сохранить
				</AdminButton>
			</Modal.Footer>
		</Modal>
	)
}