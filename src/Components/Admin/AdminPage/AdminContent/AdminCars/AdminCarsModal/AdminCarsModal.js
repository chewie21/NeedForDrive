import {Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";

import {CarName} from "../AdminCarsComponents/CarName";
import {CarDescription} from "../AdminCarsComponents/CarDescriprion";
import {CarNumber} from "../AdminCarsComponents/CarNumber";
import {CarImg} from "../AdminCarsComponents/CarImg";
import {CarPrice} from "../AdminCarsComponents/CarPrice";
import {CarCategory} from "../AdminCarsComponents/CarCategory";
import {CarColors} from "../AdminCarsComponents/CarColors";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {sendNewEntity} from "../../../../../../Functions/SendFunctions";

import {Text} from "../../../../../../Common/Text/Text";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import {ModalBodyContainer, ModalBodyLeft, ModalBodyRight, ModalBodySection} from "./AdminCarsModal.styled";

import {carsUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {emptyCar} from "../../EntitiesConstant";

export const AdminCarsModal = ({onHide, categories, show, auth, getCars, cars}) => {

	const [config, setConfig] = useState(null);

	const refreshConfig = () =>
		setConfig({
			data: emptyCar,
			categoryId: formatToOrderInfo(categories.response.data)
		});

	const redirect = () => {
		onHide();
		cars.refreshResponse();
		refreshConfig();
		getCars();
	};

	const sendNewCar = () => sendNewEntity(carsUrlPages, config, setConfig, auth, redirect);

	useEffect(() => {
		if(categories.response) refreshConfig();
	}, [categories.response]);

	return (
		config &&
		<Modal
			show={show}
			size="lg"
			centered
			onHide={onHide}
		>
			{config.modalText &&
				<ModalMessage config={config} setConfig={setConfig} margin='-50px 0 0 0'/>
			}
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
			<Modal.Body>
				<ModalBodyContainer>
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
				</ModalBodyContainer>
			</Modal.Body>
			<Modal.Footer>
				<AdminButton
					disabled={config.modalText}
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