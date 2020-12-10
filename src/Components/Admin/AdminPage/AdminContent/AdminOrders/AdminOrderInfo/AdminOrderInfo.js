import React, {useEffect, useState} from "react";
import {mainUrlPages, orderUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {
	ButtonsContainer,
	CarInfoContainer,
	Container,
	ContentContainer,
	customStyles,
	InfoSection,
	ModalContainer,
	OrderContainer,
	OrderInfoContainer,
	OrderInfoImg,
	Style
} from "./AdminOrderInfo.styled";
import {AdminButton} from "../../../../../../Common/Button/AdminButton";
import {getRequest, putRequest} from "../../../../../../Functions/RequestsToApiFactory";
import {formatImgPath, formatToOrderInfo} from "../../../../../../Functions/Format";
import Select from "react-select";
import {Text} from "../../../../../../Common/Text/Text";
import DatePicker from "react-datepicker";
import RadioGroup from "@material-ui/core/RadioGroup";
import {CustomRadioLabel} from "../../../../../../Common/Button/RadioButtonLabel";
import {CustomRadio} from "../../../../../../Common/Button/RadioButton";
import {CustomCheckLabel} from "../../../../../../Common/Button/CheckBoxLabel";
import {CustomCheck} from "../../../../../../Common/Button/CheckBox";
import {IconImageHover} from "../../../../../../Common/IconImage/IconImageHover";

import CloseModal from '../../../../../../img/closeModal.svg'

export const AdminOrderInfo = ({
		auth, history, match,
		cities, cars, rate, orderStatus, points
	}) => {

	const [config, setConfig] = useState(null);

	const data = [
		{name: `isFullTank`, value: `500`, label: `Полный бак`},
		{name: `isNeedChildChair`, value: `200`, label: `Детское кресло`},
		{name: `isRightWheel`, value: `1600`, label: `Правый руль`},
	];

	const setOrder = (order) => {
		putRequest(orderUrlPages, `${order.id}`, {...order}, `Bearer ${auth.access_token}`)
			.then(res => {
				console.log(res);
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
				let obj = config.order;
				obj.price = price;
				setConfig({...config, order: obj});
			}
		}
	});

	return (
		config &&
			<Container>
				{config.modal &&
					<ModalContainer
						color={config.modal ? '#0EC261' : '#CB3656'}
					>
						<Text
							weight='normal'
							size='13px'
							margin='0'
							color='white'
						>
							{config.modal ? `Успех! Изменения сохраннены!` : `Упс... Что-то пошло не так...`}
						</Text>
						<IconImageHover
							height='10px'
							width='10px'
							margin='0'
							img={CloseModal}
							imgHover={CloseModal}
							onClick={() => {
								delete config[`modal`];
								setConfig({...config});
							}}
						/>
					</ModalContainer>
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
						<AdminButton
							size='11.5px'
							padding='8px'
							color='#007BFF'
							width='14%'
							margin='0 20px 0 0'
							disabled={!config.order.pointId}
							onClick={() => setOrder(config.order)}
						>
							Сохранить
						</AdminButton>
						<AdminButton
							size='11.5px'
							padding='8px'
							color='#E9ECEF'
							width='14%'
							textColor='#3D5170'
							onClick={() => history.goBack()}
						>
							Назад
						</AdminButton>
					</ButtonsContainer>
					<ContentContainer>
						<CarInfoContainer>
							<div className='w-75'>
								<InfoSection>
									<OrderInfoImg src={formatImgPath(config.order.carId, mainUrlPages)}/>
									<Text
										weight='500'
										size='15px'
										color='#3D5170'
										margin='0 0 6px 0'
									>
										Автомобиль
									</Text>
									<Select
										styles={customStyles}
										defaultValue={{label: config.order.carId.name, value: config.order.carId.id}}
										options={config.cars}
										onChange={(e) => {
											let obj = config.order;
											obj.carId = e.item;
											setConfig({
												...config,
												order: obj
											})}
										}
									/>
								</InfoSection>
								<InfoSection>
									<Text
										weight='500'
										size='15px'
										color='#3D5170'
										margin='0 0 6px 0'
									>
										Статус
									</Text>
									<Select
										styles={customStyles}
										defaultValue={{label: config.order.orderStatusId.name, value: config.order.orderStatusId.id}}
										options={config.orderStatus}
										onChange={(e) => {
											let obj = config.order;
											obj.orderStatusId = e.item;
											setConfig({
												...config,
												order: obj
											})}
										}
									/>
								</InfoSection>
								<InfoSection>
									<Text
										weight='500'
										size='15px'
										color='#3D5170'
										margin='0 0 6px 0'
									>
										Город
									</Text>
									<Select
										styles={customStyles}
										defaultValue={{label: config.order.cityId.name, value: config.order.cityId.id}}
										options={config.cities}
										onChange={(e) => {
											if(e.label !== config.order.cityId.name) {
												let obj = config.order;
												obj.cityId = e.item;
												obj.pointId = null;
												setConfig({
													...config,
													order: obj
												})}
										}
										}
									/>
								</InfoSection>
								<InfoSection>
									<Text
										weight='500'
										size='15px'
										color='#3D5170'
										margin='0 0 6px 0'
									>
										Пунк выдачи
									</Text>
									<Select
										className={config.order.pointId ? '' : 'selectError'}
										styles={customStyles}
										value={config.order.pointId ?
											{ label: config.order.pointId.address, value: config.order.pointId.id }
											:
											{ label: 'Выбрать', value: null }
										}
										options={config.points.filter(point => point.item.cityId.name === config.order.cityId.name)}
										onChange={(e) => {
											let obj = config.order;
											obj.pointId = e.item;
											setConfig({
												...config,
												order: obj
											})}
										}
									/>
								</InfoSection>
							</div>
						</CarInfoContainer>
						<OrderInfoContainer>
							<InfoSection>
								<Text
									weight='500'
									size='15px'
									color='#3D5170'
									margin='0 0 6px 0'
								>
									Время аренды
								</Text>
								<DatePicker
									selected={new Date(config.order.dateFrom)}
									showTimeSelect
									timeFormat="HH:mm"
									timeIntervals={5}
									timeCaption="time"
									dateFormat="dd/MM/yyyy HH:mm"
									className='date-pick-active'
									minDate={new Date()}
									maxDate={new Date(config.order.dateTo)}
									onChange={date => {
											let obj = config.order;
											obj.dateFrom = date.getTime();
											setConfig({
												...config,
												order: obj
											});
										}
									}
								/>
								<DatePicker
									className='date-pick-active'
									selected={new Date(config.order.dateTo)}
									showTimeSelect
									timeFormat="HH:mm"
									timeIntervals={5}
									timeCaption="time"
									dateFormat="dd/MM/yyyy HH:mm"
									minDate={new Date(config.order.dateFrom)}
									onChange={date => {
											let obj = config.order;
											obj.dateTo = date.getTime();
											setConfig({
												...config,
												order: obj
											});
										}
									}
								/>
							</InfoSection>
							<InfoSection>
								<Text
									weight='500'
									size='15px'
									color='#3D5170'
									margin='0 0 6px 0'
								>
									Тариф
								</Text>
								<RadioGroup value={config.order.rateId.price}>
									{config.rate.map((item, index) =>
										<CustomRadioLabel
											onChange={() => {
												let obj = config.order;
												obj.rateId = item;
												setConfig({
													...config,
													order: obj
												});
											}}
											key={index}
											value={item.price}
											control={<CustomRadio/>}
											label={`${item.rateTypeId.name}, ${item.price} ₽/${item.rateTypeId.unit}`}
										/>
									)}
								</RadioGroup>
							</InfoSection>
							<InfoSection>
								<Text
									weight='500'
									size='15px'
									color='#3D5170'
									margin='0 0 6px 0'
								>
									Дополнительные услуги
								</Text>
								{data.map((item, index) => (
									<CustomCheckLabel
										key={index}
										onChange={(e) => {
											let obj = config.order;
											obj[item.name] = e.target.checked;
											if(e.target.checked) {
												obj.price = +obj.price + +e.target.value
											} else {
												obj.price = +obj.price - +e.target.value
											}
											setConfig({
												...config,
												order: obj
											});
										}}
										checked={config.order[item.name]}
										name={item.name}
										value={item.value}
										control={<CustomCheck key={index}/> }
										label={`${item.label}, ${item.value}р`}
									/>
								))}
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