import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {CategoryName} from "../AdminCategoriesComponents/CategoryName";
import {CategoryDescription} from "../AdminCategoriesComponents/CategoryDescription";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";

import {Text} from "../../../../../../Common/Text/Text";

import {categoriesUrl, citiesUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {BootstrapStyle, Container, ContentContainer, InfoContainer, InfoSection} from "../AdminCategories.styled";

export const AdminCategoriesInfo = ({auth, history, match}) => {

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(!config)
			getRequest(`${categoriesUrl}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({ data: res.data }));
	});

	const deleteCategory = () => deleteEntity(categoriesUrl, auth, config, setConfig, () => history.push('/admin/categories'));

	const sendEditCategory = () => sendEditEntity(categoriesUrl, config, setConfig, auth);

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
				Карточка категории
			</Text>
			<ContentContainer>
				<AdminInfoButtons
					padding='15px 20px'
					config={config}
					history={history}
					deleteFunction={deleteCategory}
					sendFunction={sendEditCategory}
				/>
				<InfoContainer>
					<InfoSection margin='0 0 15px 0'>
						<CategoryName
							config={config}
							setConfig={setConfig}
						/>
					</InfoSection>
					<InfoSection>
						<CategoryDescription
							config={config}
							setConfig={setConfig}
						/>
					</InfoSection>
				</InfoContainer>
			</ContentContainer>
		</Container>
	)
}