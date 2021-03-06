import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";
import {StatusName} from "../AdminStatusComponents/StatusName";
import {AdminLoading} from "../../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../../Common/AdminError/AdminError";

import {Text} from "../../../../../../Common/Text/Text";
import {BootstrapStyle, Container, ContentContainer, InfoContainer} from "../AdminOrderStatus.styled";

import {orderStatusUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminStatusInfo = ({auth, history, match, orderStatus}) => {

	const [config, setConfig] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if(!config) {
			getRequest(`${orderStatusUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({ data: res.data }))
				.catch(error => setError(true));
		}
	});

	const sendEditStatus = () => sendEditEntity(orderStatusUrlPages, config, setConfig, auth, () => orderStatus.refreshResponse());

	const deleteStatus = () => deleteEntity(orderStatusUrlPages, auth, config, setConfig,
		() => {
			orderStatus.refreshResponse()
			history.push('/admin/orderStatus');
		});

	return (
		<React.Fragment>
			{!config && !error &&
				<AdminLoading/>
			}
			{!config && error &&
				<AdminError history={history}/>
			}
			{config && !error &&
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
			}
		</React.Fragment>
	)
}