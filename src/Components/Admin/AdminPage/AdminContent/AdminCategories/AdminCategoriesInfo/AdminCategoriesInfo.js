import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {CategoryName} from "../AdminCategoriesComponents/CategoryName";
import {CategoryDescription} from "../AdminCategoriesComponents/CategoryDescription";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";

import {Text} from "../../../../../../Common/Text/Text";
import {BootstrapStyle, Container, ContentContainer, InfoContainer, InfoSection} from "../AdminCategories.styled";

import {categoriesUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {AdminLoading} from "../../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../../Common/AdminError/AdminError";

export const AdminCategoriesInfo = ({auth, history, match, categories}) => {

	const [config, setConfig] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if(!config)
			getRequest(`${categoriesUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({ data: res.data }))
				.catch(error => setError(true));
	});

	const deleteCategory = () => deleteEntity(categoriesUrlPages, auth, config, setConfig,
		() => {
			categories.refreshResponse();
			history.push('/admin/categories');
		});

	const sendEditCategory = () => sendEditEntity(categoriesUrlPages, config, setConfig, auth, () => categories.refreshResponse());

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
			}
		</React.Fragment>
	)
}