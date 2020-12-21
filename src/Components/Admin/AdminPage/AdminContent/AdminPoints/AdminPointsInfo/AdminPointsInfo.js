import React, {useEffect, useState} from "react";

import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {PointAddress} from "../AdminPointsComponents/PointAddress";
import {PointDescription} from "../AdminPointsComponents/PointDescription";
import {PointCities} from "../AdminPointsComponents/PointCities";
import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";
import {AdminLoading} from "../../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../../Common/AdminError/AdminError";

import {Text} from "../../../../../../Common/Text/Text";
import {BootstrapStyle, Container, ContentContainer, InfoContainer, InfoSection} from "../AdminPoints.styled";

import {pointsUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminPointsInfo = ({auth, history, match, cities, points}) => {

	const [config, setConfig] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const redirect = () => {
		points.refreshResponse()
		history.push('/admin/points');
	}

	const deletePoint = () => deleteEntity(pointsUrlPages, auth, config, setConfig, redirect);

	const sendEditPoint = () => sendEditEntity(pointsUrlPages, config, setConfig, auth, points.refreshResponse);

	useEffect(() => {
		if(cities.response)
			getRequest(`${pointsUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => {
					setConfig({ data: res.data, cityId: formatToOrderInfo(cities.response.data) });
					setLoading(false);
				})
				.catch(error => {
					setError(true);
					setLoading(false);
				});
	}, [cities.response]);

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
						Карточка пункта выдачи
					</Text>
					<ContentContainer>
						<AdminInfoButtons
							padding='15px 20px'
							config={config}
							history={history}
							deleteFunction={deletePoint}
							sendFunction={sendEditPoint}
						/>
						<InfoContainer>
							<InfoSection margin='0 0 15px 0'>
								<PointAddress config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection margin='0 0 15px 0'>
								<PointDescription config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection margin='0'>
								<PointCities config={config} setConfig={setConfig}/>
							</InfoSection>
						</InfoContainer>
					</ContentContainer>
				</Container>
			}
		</React.Fragment>
	)
}