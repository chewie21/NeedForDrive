import React, {useEffect, useState} from "react";

import {
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
import {CarInfo} from "../AdminOrderComponents/CarInfo";
import {StatusInfo} from "../AdminOrderComponents/StatusInfo";
import {CityInfo} from "../AdminOrderComponents/CityInfo";
import {PointInfo} from "../AdminOrderComponents/PointInfo";
import {DateInfo} from "../AdminOrderComponents/DateInfo";
import {RateInfo} from "../AdminOrderComponents/RateInfo";
import {ServiceInfo} from "../AdminOrderComponents/ServiceInfo";
import {ModalMessage} from "../../../../../../Common/AdminModalMessage/ModalMessage";
import {deleteEntity, sendEditEntity} from "../../../../../../Functions/SendFunctions";
import {AdminInfoButtons} from "../../../../../../Common/Button/AdminInfoButtons";
import {AdminLoading} from "../../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../../Common/AdminError/AdminError";

import {orderUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminOrderInfo = ({
		auth, history, match,
		cities, cars, rate, orderStatus, points
	}) => {

	const [config, setConfig] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		if(!config && cities.response && cars.response && rate.response && orderStatus.response && points.response) {
			getRequest(`${orderUrlPages}/${match.params.id}`, `Bearer ${auth.access_token}`)
				.then(res => setConfig({
					data: res.data,
					cars: formatToOrderInfo(cars.response.data),
					cities: formatToOrderInfo(cities.response.data),
					rate: rate.response.data,
					orderStatus: formatToOrderInfo(orderStatus.response.data),
					points: formatToOrderInfo(points.response.data),
				})).catch(error => setError(true));
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

	const sendEditOrder = () => sendEditEntity(orderUrlPages, config, setConfig, auth);

	const deleteOrder = () => deleteEntity(orderUrlPages, auth, config, setConfig, () => history.push('/admin/orders'));

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
						<AdminInfoButtons
							padding='15px 20px'
							config={config}
							history={history}
							sendFunction={sendEditOrder}
							deleteFunction={deleteOrder}
						/>
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
			}
		</React.Fragment>
	)
}