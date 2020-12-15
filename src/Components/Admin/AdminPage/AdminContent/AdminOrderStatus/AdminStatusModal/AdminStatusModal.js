import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";

import {sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {StatusName} from "../AdminStatusComponents/StatusName";

import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";

import {orderStatusUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminStatusModal = ({onHide, show, auth, getStatus}) => {

	const status = { name : '' };

	const [config, setConfig] = useState(null);

	const refreshConfig = () => setConfig({ data: status });

	useEffect(() => {
		if(!config) refreshConfig();
	});

	const sendNewStatus = () =>
		sendNewEntity(orderStatusUrlPages, config, setConfig, auth,
			() => {
				onHide();
				refreshConfig();
				getStatus();
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
					<ModalMessage config={config} setConfig={setConfig} margin='-50px 0 0 0'/>
				}
				<Modal.Header closeButton className='d-flex justify-content-around'>
					<Text
						weight='normal'
						size='25px'
						margin='0'
						color='#3D5170'
					>
						Добавить статус
					</Text>
				</Modal.Header>
				<Modal.Body>
					<StatusName config={config} setConfig={setConfig}/>
				</Modal.Body>
				<Modal.Footer>
					<AdminButton
						disabled={config.modalText}
						size='14px'
						padding='8px'
						color='#007BFF'
						width='100%'
						onClick={sendNewStatus}
					>
						Сохранить
					</AdminButton>
				</Modal.Footer>
			</Modal>
	)
}