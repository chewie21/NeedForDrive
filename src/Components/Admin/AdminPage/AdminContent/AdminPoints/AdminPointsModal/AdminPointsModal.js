import {Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import {InfoSection} from "../AdminPoints.styled";

import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {PointAddress} from "../AdminPointsComponents/PointAddress";
import {PointDescription} from "../AdminPointsComponents/PointDescription";
import {PointCities} from "../AdminPointsComponents/PointCities";

import {pointsUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {emptyPoints} from "../../EntitiesConstant";

export const AdminPointsModal = ({onHide, cities, show, auth, getPoints, points}) => {

	const [config, setConfig] = useState(null);

	const refreshConfig = () =>
		setConfig({
			data: emptyPoints,
			cityId: formatToOrderInfo(cities.response.data)
		});

	const redirect = () => {
		onHide();
		refreshConfig();
		points.refreshResponse();
		getPoints();
	}

	const sendNewPoint = () => sendNewEntity(pointsUrlPages, config, setConfig, auth, redirect);

	useEffect(() => {
		if(cities.response) refreshConfig();
	}, [cities.response]);

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
					Добавить пункт выдачи
				</Text>
			</Modal.Header>
			<Modal.Body>
				<InfoSection margin='0 0 15px 0'>
					<PointAddress config={config} setConfig={setConfig}/>
				</InfoSection>
				<InfoSection margin='0 0 15px 0'>
					<PointDescription config={config} setConfig={setConfig}/>
				</InfoSection>
				<InfoSection margin='0'>
					<PointCities config={config} setConfig={setConfig}/>
				</InfoSection>
			</Modal.Body>
			<Modal.Footer>
				<AdminButton
					disable={config.modalText}
					size='14px'
					padding='8px'
					color='#007BFF'
					width='100%'
					onClick={sendNewPoint}
				>
					Сохранить
				</AdminButton>
			</Modal.Footer>
		</Modal>
	)
}