import {Modal} from "react-bootstrap";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import React, {useEffect, useState} from "react";
import {sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {pointsUrl} from "../../../../../../Environments/ApiFactoryUrls";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {PointAddress} from "../AdminPointsComponents/PointAddress";
import {PointDescription} from "../AdminPointsComponents/PointDescription";
import {PointCities} from "../AdminPointsComponents/PointCities";
import {ModalBodySection} from "./AdminPointsModal.styled";

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

	const sendNewPoints = () => sendNewEntity(pointsUrl, config, setConfig, auth,
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
				<ModalBodySection>
					<PointAddress config={config} setConfig={setConfig}/>
				</ModalBodySection>
				<ModalBodySection>
					<PointDescription config={config} setConfig={setConfig}/>
				</ModalBodySection>
				<PointCities config={config} setConfig={setConfig}/>
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