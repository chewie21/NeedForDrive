import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";
import {RateType} from "../AdminRateComponents/RateType";
import {RatePrice} from "../AdminRateComponents/RatePrice";
import {AdminLoading} from "../../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../../Common/AdminError/AdminError";

import {BootstrapStyle, Container, ContentContainer, InfoContainer, InfoSection} from "../AdminRate.styled";
import {Text} from "../../../../../../Common/Text/Text";

import {rateUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminRateInfo = ({auth, history, match, rateType, rate}) => {

	const [config, setConfig] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if(!config && rateType.response) {
			getRequest(`${rateUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({ data: res.data, rateTypeId: formatToOrderInfo(rateType.response.data) }))
				.catch(error => setError(true));
		}
	});

	const deleteRate = () => deleteEntity(rateUrlPages, auth, config, setConfig,
		() => {
			rate.refreshResponse();
			history.push('/admin/rate');
		});

	const sendEditRate = () => sendEditEntity(rateUrlPages, config, setConfig, auth, () => rate.refreshResponse());

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
							deleteFunction={deleteRate}
							sendFunction={sendEditRate}
						/>
						<InfoContainer>
							<InfoSection margin='0 0 15px 0'>
								<RatePrice config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection margin='0'>
								<RateType config={config} setConfig={setConfig}/>
							</InfoSection>
						</InfoContainer>
					</ContentContainer>
				</Container>
			}
		</React.Fragment>
	)
}