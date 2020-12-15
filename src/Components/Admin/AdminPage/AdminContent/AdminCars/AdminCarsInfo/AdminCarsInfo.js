import React, {useEffect, useState} from "react";

import {carsUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {
	BootstrapStyle,
	Container,
	InfoContainer,
	InfoSection,
	LeftSection,
	RightSection,
	TankContainer,
	TankInfo,
	TankValue
} from "./AdminCasrInfo.styled";
import {Text} from "../../../../../../Common/Text/Text";

import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {CarName} from "../AdminCarsComponents/CarName";
import {CarDescription} from "../AdminCarsComponents/CarDescriprion";
import {CarNumber} from "../AdminCarsComponents/CarNumber";
import {CarPrice} from "../AdminCarsComponents/CarPrice";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {CarCategory} from "../AdminCarsComponents/CarCategory";
import {CarColors} from "../AdminCarsComponents/CarColors";
import {CarImg} from "../AdminCarsComponents/CarImg";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";

export const AdminCarsInfo = ({auth, categories, history, match}) => {

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(!config && categories.response) {
			getRequest(`${carsUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => {
						setConfig({
							data: res.data,
							categories: formatToOrderInfo(categories.response.data),
						});
					}
				);
		}
	});

	const sendEditCar = () => sendEditEntity(carsUrlPages, config, setConfig, auth);

	const deleteCar = () => deleteEntity(carsUrlPages, auth, config, setConfig,() => history.push('/admin/cars'));

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
					Карточка автомобиля
				</Text>
				<InfoContainer>
					<LeftSection>
						<InfoSection>
							<CarImg config={config} setConfig={setConfig}/>
						</InfoSection>
						<InfoSection>
							<Text
								weight='normal'
								size='24px'
								margin='0 0 5px 0'
								color='#3D5170'
							>
								{config.data.name}
							</Text>
							<Text
								weight='normal'
								size='12px'
								margin='0'
								color='#818EA3'
							>
								{config.data.description}
							</Text>
						</InfoSection>
						<TankInfo>
							<div className='d-flex justify-content-between'>
								<Text
									weight='normal'
									size='12px'
									margin='00'
									color='#818EA3'
								>
									Топливо
								</Text>
								<Text
									weight='normal'
									size='12px'
									margin='0 0'
									color='#818EA3'
								>
									{config.data.tank ? `${config.data.tank}%` : 'Нет данных'}
								</Text>
							</div>
							{config.data.tank &&
								<TankContainer>
									<TankValue width={`${config.data.tank}%`}/>
								</TankContainer>}
						</TankInfo>
						<InfoSection margin='0'>
							<CarColors config={config} setConfig={setConfig}/>
						</InfoSection>
					</LeftSection>
					<RightSection>
						<div className='w-75'>
							<InfoSection>
								<CarName config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection>
								<CarDescription config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection>
								<CarNumber config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection>
								<CarPrice config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection>
								<CarCategory config={config} setConfig={setConfig}/>
							</InfoSection>
							<AdminInfoButtons
								sendFunction={sendEditCar}
								deleteFunction={deleteCar}
								config={config}
								history={history}
							/>
						</div>
					</RightSection>
				</InfoContainer>
			</Container>
	)
}