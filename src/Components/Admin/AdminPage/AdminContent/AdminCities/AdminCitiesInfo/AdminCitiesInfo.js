import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {CityName} from "../AdminCitiesComponents/CityName";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";

import {BootstrapStyle, Container, ContentContainer, InfoContainer} from "../AdminCities.styled";
import {Text} from "../../../../../../Common/Text/Text";

import {citiesUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminCitiesInfo = ({auth, history, match}) => {

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(!config)
			getRequest(`${citiesUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({ data: res.data }));

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
				<AdminInfoButtons
					padding='15px 20px'
					config={config}
					history={history}
					deleteFunction={deleteCity}
					sendFunction={sendEditCity}
				/>
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