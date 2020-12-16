import React, {useEffect} from "react";

import {CustomCheckLabel} from "../../../../../../Common/Button/CheckBoxLabel";
import {formatDateToOrderMain, formatImgPath} from "../../../../../../Functions/Format";
import {CustomCheck} from "../../../../../../Common/Button/CheckBox";
import {deleteRequest, getRequest, putRequest} from "../../../../../../Functions/RequestsToApiFactory";

import SuccessImg from '../../../../../../img/adminOrdersSuccess.svg';
import DangerousImg from '../../../../../../img/adminOrdersDangerous.svg';
import SecondaryImg from '../../../../../../img/adminOrdersSecondary.svg';
import PrimaryImg from '../../../../../../img/adminOrderPrimary.svg';
import DefaultCar from '../../../../../../img/defaulImg.png';

import {IconImage} from "../../../../../../Common/IconImage/IconImage";
import {Text} from "../../../../../../Common/Text/Text";
import {
	ButtonsContainer,
	CustomButton,
	OrderItemContainer,
	OrderItemImg,
	OrderItemSection
} from "./AdminOrderItem.styled";

import {mainUrlPages, orderUrlPages} from "../../../../../../Environments/ApiFactoryUrls";

export const AdminOrderItem = ({order, auth, orderStatus, config, setConfig, history}) => {

	const setStatus = (status) => {
		putRequest(orderUrlPages, `${order.id}`, {...order, orderStatusId : status}, `Bearer ${auth.access_token}`)
			.then(res => {
				config.data.splice(config.data.indexOf(order), 1, res.data);
				setConfig({...config});
			});
	}

	const deleteOrder = (order) => {
		deleteRequest(orderUrlPages, `${order.id}`, `Bearer ${auth.access_token}`)
			.then(res => {
				getRequest(`${config.url}page=${config.page-1}&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
					.then(res => setConfig({...config, data: res.data}));
			});
	}

	return (
		<OrderItemContainer>
			<OrderItemSection width='20%'>
				{order.carId ?
					<OrderItemImg
						src={formatImgPath(order.carId, mainUrlPages)}
					/> :
					<OrderItemImg
						src={DefaultCar}
					/>
				}
			</OrderItemSection>
			<OrderItemSection width='30%'>
				<Text
					size='13px'
					weight='normal'
					margin='0 0 6px 0'
					color='#868E96'
				>
					<b>{order.carId && order.carId.name}</b> в <b>{order.cityId && order.cityId.name}</b>, {order.pointId && order.pointId.address}
				</Text>
				<Text
					size='13px'
					weight='normal'
					margin='0 0 6px 0'
					color='#868E96'
				>
					{formatDateToOrderMain(order.dateFrom)} - {formatDateToOrderMain(order.dateTo)}
				</Text>
				<Text
					size='13px'
					weight='normal'
					margin='0 0 6px 0'
					color='#868E96'
				>
					Цвет: <b>{order.color}</b>
				</Text>
			</OrderItemSection>
			<OrderItemSection width='15%'>
				<CustomCheckLabel
					cursor='default'
					size={12}
					checked={order.isFullTank}
					control={<CustomCheck cursor='default' border='2px solid #0EC261'/>}
					label='Полный бак'
				/>
				<CustomCheckLabel
					cursor='default'
					size={12}
					checked={order.isNeedChildChair}
					control={<CustomCheck cursor='default' border='2px solid #0EC261'/>}
					label='Детское кресло'
				/>
				<CustomCheckLabel
					cursor='default'
					size={12}
					checked={order.isRightWheel}
					control={<CustomCheck cursor='default' border='2px solid #0EC261'/>}
					label='Правый руль'
				/>
			</OrderItemSection>
			<OrderItemSection width='15%' className='d-flex justify-content-center align-items-center'>
				<Text
					size='20px'
					weight='normal'
					margin='0'
					color='#121212'
				>
					{order.price} ₽
				</Text>
			</OrderItemSection>
			<OrderItemSection width='252px' className=''>
				<ButtonsContainer>
					{orderStatus.response && (
						order.orderStatusId.name === 'new' ?
							<CustomButton
								onClick={() => setStatus(orderStatus.response.data[3])}
								radius='4px 0px 0px 4px;'
								border='0.5px solid #BECAD6'
							>
								<IconImage
									height='12px'
									width='12px'
									margin='0'
									img={SuccessImg}
								/>
								<Text
									color='#5A6169'
									weight='normal'
									size='11px'
									margin='-1px 0 0 0'
								>
								Готово
								</Text>
							</CustomButton> :
							<CustomButton
								radius='4px 0px 0px 4px;'
								border='0.5px solid #BECAD6'
								onClick={() => setStatus(orderStatus.response.data[0])}
							>
								<IconImage
									height='12px'
									width='12px'
									margin='0'
									img={PrimaryImg}
								/>
								<Text
									color='#5A6169'
									weight='normal'
									size='11px'
									margin='-1px 0 0 0'
								>
									Открыть
								</Text>
							</CustomButton>)
					}
					<CustomButton
						radius='0'
						border='none'
						borderTop='0.5px solid #BECAD6'
						borderBottom='0.5px solid #BECAD6'
						onClick={() => deleteOrder(order)}
					>
						<IconImage
							height='12px'
							width='12px'
							margin='0 2px 0 0'
							img={DangerousImg}
						/>
						<Text
							color='#5A6169'
							weight='normal'
							size='11px'
							margin='-1px 0 0 0'
						>
							Удалить
						</Text>
					</CustomButton>
					<CustomButton
						radius='0 4px 4px 0px;'
						border='0.5px solid #BECAD6'
						onClick={() => history.push(`/admin/orders/${order.id}`)}
					>
						<IconImage
							height='12px'
							width='12px'
							margin='0'
							img={SecondaryImg}
						/>
						<Text
							color='#5A6169'
							weight='normal'
							size='11px'
							margin='-1px 0 0 0'
						>
							Изменить
						</Text>
					</CustomButton>
				</ButtonsContainer>
			</OrderItemSection>
		</OrderItemContainer>
	)
}

