import React, {useEffect, useState} from "react";
import {orderUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {
	ButtonsContainer,
	CarInfoContainer,
	Container,
	ContentContainer,
	InfoSection,
	OrderContainer,
	OrderInfoContainer,
	Style
} from "./AdminOrderInfo.styled";
import {Text} from "../../../../../../Common/Text/Text";
import {getRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {OrderButtons} from "../AdminOrderComponents/Buttons";
import {CarInfo} from "../AdminOrderComponents/CarInfo";
import {StatusInfo} from "../AdminOrderComponents/StatusInfo";
import {CityInfo} from "../AdminOrderComponents/CityInfo";
import {PointInfo} from "../AdminOrderComponents/PointInfo";
import {DateInfo} from "../AdminOrderComponents/DateInfo";
import {RateInfo} from "../AdminOrderComponents/RateInfo";
import {ServiceInfo} from "../AdminOrderComponents/ServiceInfo";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";

export const AdminOrderInfo = ({
		auth, history, match,
		cities, cars, rate, orderStatus, points
	}) => {

	const [config, setConfig] = useState(null);

	useEffect(() => {
		if(!config && cities && cars && rate && orderStatus && points) {
			getRequest(`${orderUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({
					data: res.data,
					cars: formatToOrderInfo(cars.response.data),
					cities: formatToOrderInfo(cities.response.data),
					rate: rate.response.data,
					orderStatus: formatToOrderInfo(orderStatus.response.data),
					points: formatToOrderInfo(points.response.data),
				}) );
		}
		if(config) {
			let price;
			if(config.data.rateId.rateTypeId.name === `Поминутно`) {
				price =
					Math.round((config.data.dateTo - config.data.dateFrom) / 60 / 1000)
					* config.data.rateId.price;
			} else if (config.data.rateId.rateTypeId.name === `На сутки`) {
				price =
					(Math.floor((config.data.dateTo - config.data.dateFrom) / 60 / 1000 / 60 / 24) + 1)
					* config.data.rateId.price;
			}
			if(config.data.isFullTank) price = price + 500;
			if(config.data.isNeedChildChair) price = price + 200;
			if(config.data.isRightWheel) price = price + 1600;
			if(price !== config.data.price) {
				let data = {...config.data};
				data.price = price;
				setConfig({...config, data: data});
			}
		}
	});

	return (
		config &&
			<Container>
				{config.modalText &&
					<ModalMessage config={config} setConfig={setConfig}/>
				}
				<Style/>
				<Text
					weight='normal'
					size='29px'
					margin='0 0 27px 0'
					color='#3D5170'
				>
					Заказ № {config.data.id}
				</Text>
				<OrderContainer>
					<ButtonsContainer>
						<OrderButtons
							config={config}
							setConfig={setConfig}
							history={history}
							auth={auth}
						/>
					</ButtonsContainer>
					<ContentContainer>
						<CarInfoContainer>
							<div className='w-75'>
								<InfoSection>
									<CarInfo config={config} setConfig={setConfig}/>
								</InfoSection>
								<InfoSection>
									<StatusInfo config={config} setConfig={setConfig}/>
								</InfoSection>
								<InfoSection>
									<CityInfo config={config} setConfig={setConfig}/>
								</InfoSection>
								<InfoSection>
									<PointInfo config={config} setConfig={setConfig}/>
								</InfoSection>
							</div>
						</CarInfoContainer>
						<OrderInfoContainer>
							<InfoSection>
								<DateInfo config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection>
								<RateInfo config={config} setConfig={setConfig}/>
							</InfoSection>
							<InfoSection>
								<ServiceInfo config={config} setConfig={setConfig}/>
							</InfoSection>
							<div>
								<Text
									weight='500'
									size='15px'
									color='#3D5170'
									margin='0 0 6px 0'
								>
									Итог
								</Text>
								<Text
									weight='normal'
									size='29px'
									margin='0'
									color='#3D5170'
								>
									{config.data.price} ₽
								</Text>
							</div>
						</OrderInfoContainer>
					</ContentContainer>
				</OrderContainer>
			</Container>
	)
}