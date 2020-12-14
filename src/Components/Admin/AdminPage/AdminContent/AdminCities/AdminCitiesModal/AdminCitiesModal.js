import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {Modal} from "react-bootstrap";
import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import React, {useEffect, useState} from "react";
import {CityName} from "../AdminCitiesComponents/CityName";
import {sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {citiesUrl} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminCitiesModal = ({onHide, show, auth, getCities}) => {

	const city = { name: '' };

	const [config, setConfig] = useState(null);

	const refreshConfig = () => setConfig({ data: city });

	useEffect(() => {
		if(!config) refreshConfig();
	});

	const sendNewCity = () => sendNewEntity(citiesUrl, config, setConfig, auth,
			() => {
				onHide();
				refreshConfig();
				getCities();
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
					Добавить город
				</Text>
			</Modal.Header>
			<Modal.Body>
				<CityName config={config} setConfig={setConfig}/>
			</Modal.Body>
			<Modal.Footer>
				<AdminButton
					size='14px'
					padding='8px'
					color='#007BFF'
					width='100%'
					onClick={sendNewCity}
				>
					Сохранить
				</AdminButton>
			</Modal.Footer>
		</Modal>
	)
}