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
import {getRequest, putRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {formatToOrderInfo} from "../../../../../../Functions/Format";
import {Modal} from "./AdminOrderInfoComponents/Modal";
import {Buttons} from "./AdminOrderInfoComponents/Buttons";
import {CarInfo} from "./AdminOrderInfoComponents/CarInfo";
import {StatusInfo} from "./AdminOrderInfoComponents/StatusInfo";
import {CityInfo} from "./AdminOrderInfoComponents/CityInfo";
import {PointInfo} from "./AdminOrderInfoComponents/PointInfo";
import {DateInfo} from "./AdminOrderInfoComponents/DateInfo";
import {RateInfo} from "./AdminOrderInfoComponents/RateInfo";
import {ServiceInfo} from "./AdminOrderInfoComponents/ServiceInfo";

export const AdminOrderInfo = ({
		auth, history, match,
		cities, cars, rate, orderStatus, points
	}) => {

	const [config, setConfig] = useState(null);

	const setOrder = (order) => {
		putRequest(orderUrlPages, `${order.id}`, {...order}, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({...config, order: res.data, modal: true});
				setTimeout(() => {
					delete config[`modal`];
					setConfig({...config});
				}, 5000)
			}, error => {
				setConfig({...config, modal: false});
				setTimeout(() => {
					delete config[`modal`];
					setConfig({...config});
				}, 5000)
			});
	}

	useEffect(() => {
		console.log(config);
		if(!config && cities && cars && rate && orderStatus && points) {
			getRequest(`${orderUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({
					order: res.data,
					cars: formatToOrderInfo(cars.response.data),
					cities: formatToOrderInfo(cities.response.data),
					rate: rate.response.data,
					orderStatus: formatToOrderInfo(orderStatus.response.data),
					points: formatToOrderInfo(points.response.data),
				}) );
		}
		if(config) {
			let price;
			if(config.order.rateId.rateTypeId.name === `Поминутно`) {
				price =
					Math.round((config.order.dateTo - config.order.dateFrom) / 60 / 1000)
					* config.order.rateId.price;
			} else if (config.order.rateId.rateTypeId.name === `На сутки`) {
				price =
					(Math.floor((config.order.dateTo - config.order.dateFrom) / 60 / 1000 / 60 / 24) + 1)
					* config.order.rateId.price;
			}
			if(config.order.isFullTank) price = price + 500;
			if(config.order.isNeedChildChair) price = price + 200;
			if(config.order.isRightWheel) price = price + 1600;
			if(price !== config.order.price) {
				let obj = {...config.order};
				obj.price = price;
				setConfig({...config, order: obj});
			}
		}
	});

	return (
		config &&
			<Container>
				{config.modal &&
					<Modal config={config} setConfig={setConfig}/>
				}
				<Style/>
				<Text
					weight='normal'
					size='29px'
					margin='0 0 27px 0'
					color='#3D5170'
				>
					Заказ № {config.order.id}
				</Text>
				<OrderContainer>
					<ButtonsContainer>
						<Buttons config={config} setOrder={setOrder} history={history}/>
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
									{config.order.price} ₽
								</Text>
							</div>
						</OrderInfoContainer>
					</ContentContainer>
				</OrderContainer>
			</Container>
	)
}