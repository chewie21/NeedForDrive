import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";
import {StatusName} from "../AdminStatusComponents/StatusName";

import {Text} from "../../../../../../Common/Text/Text";
import {BootstrapStyle, Container, ContentContainer, InfoContainer} from "../AdminOrderStatus.styled";

import {orderStatusUrl} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminStatusInfo = ({auth, history, match}) => {

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(!config) {
			getRequest(`${orderStatusUrl}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({data: res.data }));
		}
	});

	const sendEditStatus = () => sendEditEntity(orderStatusUrl, config, setConfig, auth);

	const deleteStatus = () => deleteEntity(orderStatusUrl, auth, config, setConfig,() => history.push('/admin/orderStatus'));

	return (
		config &&
		<Container>
			<BootstrapStyle/>
			{config.modalText &&
				<ModalMessage config={config} setConfig={setConfig}/>
			}
			<Text
				weight='normal'
				size='29px'
				margin='0 0 27px 0'
				color='#3D5170'
			>
				Карточка статуса заказа
			</Text>
			<ContentContainer>
				<AdminInfoButtons
					padding='15px 20px'
					config={config}
					history={history}
					deleteFunction={deleteStatus}
					sendFunction={sendEditStatus}
				/>
				<InfoContainer>
					<StatusName config={config} setConfig={setConfig}/>
				</InfoContainer>
			</ContentContainer>

		</Container>
	)
}