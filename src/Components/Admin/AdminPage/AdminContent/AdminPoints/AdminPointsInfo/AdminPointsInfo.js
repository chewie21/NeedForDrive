import {
	BootstrapStyle,
	ButtonsContainer,
	Container,
	InfoContainer
} from "../../AdminCities/AdminCitiesInfo/AdminCitiesInfo.styled";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {Text} from "../../../../../../Common/Text/Text";
import {ContentContainer} from "../../AdminCars/AdminCars.styled";
import {CityButtons} from "../../AdminCities/AdminCitiesComponents/CityButtons";
import React, {useEffect, useState} from "react";
import {InfoSection} from "./AdminPointsInfo.styled";
import {PointAddress} from "../AdminPointsComponents/PointAddress";
import {PointDescription} from "../AdminPointsComponents/PointDescription";
import {PointCities} from "../AdminPointsComponents/PointCities";
import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {pointsUrl, pointsUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {formatToOrderInfo} from "../../../../../../Functions/Format";

export const AdminPointsInfo = ({auth, history, match, cities}) => {

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(!config) {
			getRequest(`${pointsUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({ data: res.data, cities: formatToOrderInfo(cities.response.data) }));
		}
	});

	const deletePoint = () => deleteEntity(pointsUrlPages, auth, config, setConfig, () => history.push('/admin/points'));

	const sendEditPoint = () => sendEditEntity(pointsUrlPages, config, setConfig, auth);

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
				Карточка пункта выдачи
			</Text>
			<ContentContainer>
				<ButtonsContainer>
					<CityButtons
						config={config}
						history={history}
						deleteFunction={deletePoint}
						sendFunction={sendEditPoint}
					/>
				</ButtonsContainer>
				<InfoContainer>
					<InfoSection>
						<PointAddress config={config} setConfig={setConfig}/>
					</InfoSection>
					<InfoSection>
						<PointDescription config={config} setConfig={setConfig}/>
					</InfoSection>
					<PointCities config={config} setConfig={setConfig}/>
				</InfoContainer>
			</ContentContainer>
		</Container>
	)
}