import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";
import {RateTypeName} from "../AdminRateTypeComponents/RateTypeName";
import {RateTypeUnit} from "../AdminRateTypeComponents/RateTypeUnit";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {AdminLoading} from "../../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../../Common/AdminError/AdminError";

import {Text} from "../../../../../../Common/Text/Text";
import {BootstrapStyle, Container, ContentContainer, InfoContainer, InfoSection} from "../AdminRateType.styled";

import {rateTypeUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminRateTypeInfo = ({auth, history, match, rateType}) => {

	const [config, setConfig] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if(!config)
			getRequest(`${rateTypeUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({data: res.data}))
				.catch(error => setError(true));
	});

	const sendEditRateType = () => sendEditEntity(rateTypeUrlPages, config, setConfig, auth, () => rateType.refreshResponse());

	const deleteRateType = () => deleteEntity(rateTypeUrlPages, auth, config, setConfig,
		() => {
			rateType.refreshResponse();
			history.push('/admin/rateType');
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
						Карточка тарифа
					</Text>
					<ContentContainer>
						<AdminInfoButtons
							padding='15px 20px'
							config={config}
							history={history}
							deleteFunction={deleteRateType}
							sendFunction={sendEditRateType}
						/>
						<InfoContainer>
							<InfoSection margin='0 0 15px 0'>
								<RateTypeName config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection margin='0'>
								<RateTypeUnit config={config} setConfig={setConfig}/>
							</InfoSection>
						</InfoContainer>
					</ContentContainer>
				</Container>
			}
		</React.Fragment>
	)
}