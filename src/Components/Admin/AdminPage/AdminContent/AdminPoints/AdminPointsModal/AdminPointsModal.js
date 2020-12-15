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

import {pointsUrl, pointsUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminPointsModal = ({onHide, cities, show, auth, getPoints}) => {

	const points = {
		address: '',
		name: '',
		cityId: {}
	}

	const [config, setConfig] = useState(null);

	const refreshConfig = () =>
		setConfig({
			data: points,
			cities: formatToOrderInfo(cities.response.data)
		});

	useEffect(() => {
		if(!config && cities) refreshConfig();
	});

	const sendNewPoints = () => sendNewEntity(pointsUrlPages, config, setConfig, auth,
		() => {
			onHide();
			refreshConfig();
			getPoints();
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
					size='14px'
					padding='8px'
					color='#007BFF'
					width='100%'
					onClick={sendNewPoints}
				>
					Сохранить
				</AdminButton>
			</Modal.Footer>
		</Modal>
	)
}