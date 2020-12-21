import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";

import {sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {CategoryName} from "../AdminCategoriesComponents/CategoryName";
import {CategoryDescription} from "../AdminCategoriesComponents/CategoryDescription";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";

import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import {InfoSection} from "../AdminCategories.styled";

import {categoriesUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {emptyCategory} from "../../EntitiesConstant";

export const AdminCategoriesModal = ({onHide, show, auth, getCategories, categories}) => {

	const [config, setConfig] = useState(null);

	const refreshConfig = () => setConfig({ data: emptyCategory });

	const redirect = () => {
		onHide();
		categories.refreshResponse();
		refreshConfig();
		getCategories();
	}

	const sendNewCategory = () => sendNewEntity(categoriesUrlPages, config, setConfig, auth, redirect);

	useEffect(() => {
		refreshConfig();
	}, []);

	return (
		config &&
		<Modal
			show={show}
			centered
			onHide={onHide}
		>
			{config.modalText &&
			<ModalMessage config={config} setConfig={setConfig} margin='-50px 0 0 0'/>}
			<Modal.Header closeButton className='d-flex justify-content-around'>
				<Text
					weight='normal'
					size='25px'
					margin='0'
					color='#3D5170'
				>
					Добавить категорию
				</Text>
			</Modal.Header>
			<Modal.Body>
				<InfoSection margin='0 0 15px 0'>
					<CategoryName config={config} setConfig={setConfig}/>
				</InfoSection>
				<InfoSection>
					<CategoryDescription config={config} setConfig={setConfig}/>
				</InfoSection>
			</Modal.Body>
			<Modal.Footer>
				<AdminButton
					disabled={config.modalText}
					size='14px'
					padding='8px'
					color='#007BFF'
					width='100%'
					onClick={sendNewCategory}
				>
					Сохранить
				</AdminButton>
			</Modal.Footer>
		</Modal>
	)
}