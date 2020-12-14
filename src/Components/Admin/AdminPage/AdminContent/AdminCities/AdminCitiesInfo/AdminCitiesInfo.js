import React, {useEffect, useState} from "react";
import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {citiesUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {Text} from "../../../../../../Common/Text/Text";
import {CityButtons} from "../AdminCitiesComponents/CityButtons";
import {BootstrapStyle, ButtonsContainer, Container, InfoContainer} from "./AdminCitiesInfo.styled";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {CityName} from "../AdminCitiesComponents/CityName";
import {ContentContainer} from "../../AdminCars/AdminCars.styled";

export const AdminCitiesInfo = ({auth, history, match}) => {

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(!config) {
			getRequest(`${citiesUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({ data: res.data }));
		}
	});

	const deleteCity = () => deleteEntity(citiesUrlPages, auth, config, setConfig, () => history.push('/admin/cities'));

	const sendEditCity = () => sendEditEntity(citiesUrlPages, config, setConfig, auth);

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
				Карточка города
			</Text>
			<ContentContainer>
				<ButtonsContainer>
					<CityButtons
						config={config}
						history={history}
						deleteFunction={deleteCity}
						sendFunction={sendEditCity}
					/>
				</ButtonsContainer>
				<InfoContainer>
					<CityName
						config={config}
						setConfig={setConfig}
					/>
				</InfoContainer>
			</ContentContainer>
		</Container>
	)
}