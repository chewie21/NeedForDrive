import {Modal} from "react-bootstrap";
import {CarName} from "../AdminCarsComponents/CarName";
import {CarDescription} from "../AdminCarsComponents/CarDescriprion";
import {CarNumber} from "../AdminCarsComponents/CarNumber";
import {CarImg} from "../AdminCarsComponents/CarImg";
import {CarPrice} from "../AdminCarsComponents/CarPrice";
import {CarCategory} from "../AdminCarsComponents/CarCategory";
import {CarColors} from "../AdminCarsComponents/CarColors";
import React, {useEffect, useState} from "react";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {ModalBodyLeft, ModalBodyRight, ModalBodySection} from "./AdminCarsModal.styled";
import {sendCar, sendNewEntity} from "../../../../../../Functions/SendFunctions";
import {carsUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminCarsModal = ({onHide, categories, show, auth, history}) => {

	const car = {
		categoryId: {},
		colors: [],
		name: null,
		description: null,
		number: null,
		priceMax: null,
		priceMin: null,
		thumbnail: {}
	}

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(categories.response && !config) {
			let obj = {};
			obj.data = car;
			obj.categories = formatToOrderInfo(categories.response.data);
			setConfig(obj);
		}
	})

	const sendNewCar = () => {
		sendCar(config, setConfig, auth,
			() => sendNewEntity(
				carsUrlPages, config, setConfig, auth, () => history.push(`admin/cars`),
				`Успех! Запись добавленна!`,
				`Что-то пошло не так...`)
		)
	}

	return (
		config &&
		<Modal
			show={show}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
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
					Добавить автомобиль
				</Text>
			</Modal.Header>
			<Modal.Body className='d-flex'>
				<ModalBodyLeft>
					<ModalBodySection>
						<CarImg config={config} setConfig={setConfig}/>
					</ModalBodySection>
					<ModalBodySection>
						<CarColors config={config} setConfig={setConfig}/>
					</ModalBodySection>
				</ModalBodyLeft>
				<ModalBodyRight>
					<div className='w-75'>
						<ModalBodySection>
							<CarName config={config} setConfig={setConfig}/>
						</ModalBodySection>
						<ModalBodySection>
							<CarDescription config={config} setConfig={setConfig}/>
						</ModalBodySection>
						<ModalBodySection>
							<CarNumber config={config} setConfig={setConfig}/>
						</ModalBodySection>
						<ModalBodySection>
							<CarPrice config={config} setConfig={setConfig}/>
						</ModalBodySection>
						<ModalBodySection>
							<CarCategory config={config} setConfig={setConfig}/>
						</ModalBodySection>
					</div>
				</ModalBodyRight>
			</Modal.Body>
			<Modal.Footer>
				<AdminButton
					size='14px'
					padding='8px'
					color='#007BFF'
					width='100%'
					onClick={sendNewCar}
				>
					Сохранить
				</AdminButton>
			</Modal.Footer>
		</Modal>
	)
}