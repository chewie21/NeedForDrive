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
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const redirect = () => {
		orderStatus.refreshResponse()
		history.push('/admin/orderStatus');
	}

	const sendEditStatus = () => sendEditEntity(orderStatusUrlPages, config, setConfig, auth, orderStatus.refreshResponse);

	const deleteStatus = () => deleteEntity(orderStatusUrlPages, auth, config, setConfig, redirect);

	useEffect(() => {
		getRequest(`${orderStatusUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({ data: res.data });
				setLoading(false);
			})
			.catch(error => {
				setError(true);
				setLoading(false);
			});
	}, []);

	return (
		<React.Fragment>
			{loading &&
				<AdminLoading/>
			}
			{!loading && error &&
				<AdminError history={history}/>
			}
			{config && !error && !loading &&
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