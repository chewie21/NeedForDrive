import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";

import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {RateType} from "../AdminRateComponents/RateType";
import {RatePrice} from "../AdminRateComponents/RatePrice";

import {Text} from "../../../../../../Common/Text/Text";
import {InfoSection} from "../../AdminPoints/AdminPoints.styled";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";

import {rateUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminRateModal = ({onHide, rateTypeId, show, auth, getRate, rate}) => {

	const newRate = {
		rateTypeId: {},
		price: ''
	};

	const [config, setConfig] = useState(null);

	const refreshConfig = () =>
		setConfig({
			data: newRate,
			rateTypeId: formatToOrderInfo(rateTypeId.response.data)
		});

	useEffect(() => {
		if(!config && rateTypeId.response) refreshConfig();
	});

	const sendNewRate = () => sendNewEntity(rateUrlPages, config, setConfig, auth,
		() => {
			onHide();
			refreshConfig();
			rate.refreshResponse();
			getRate();
		}
	);

	return (
		config &&
		<Modal
			show={show}
			centered
			onHide={onHide}
		>
			{config.modalText &&
			<ModalMessage config={config} setConfig={setConfig} margin='-50px 0 0 0'/>}
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
					<RatePrice config={config} setConfig={setConfig}/>
				</InfoSection>
				<InfoSection margin='0'>
					<RateType config={config} setConfig={setConfig}/>
				</InfoSection>
			</Modal.Body>
			<Modal.Footer>
				<AdminButton
					disabled={config.modalText}
					size='14px'
					padding='8px'
					color='#007BFF'
					width='100%'
					onClick={sendNewRate}
				>
					Сохранить
				</AdminButton>
			</Modal.Footer>
		</Modal>
	)
}