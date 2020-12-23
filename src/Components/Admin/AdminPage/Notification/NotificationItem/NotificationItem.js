import React from "react";

import {formatDateToOrderMain} from "../../../../../Functions/Format";
import {putRequest} from "../../../../../Functions/RequestsToApiFactory";

import {ButtonsContainer, Container, NotificationSection, CustomButton} from "./NotificationItem.styled";
import {orderUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {Text} from "../../../../../Common/Text/Text";
import {IconImage} from "../../../../../Common/IconImage/IconImage";

import PrimaryImg from "../../../../../img/adminOrderPrimary.svg";
import SecondaryImg from "../../../../../img/adminOrdersSecondary.svg";

export const NotificationItem = ({order, auth, orderStatus, history, getNotice, toggle}) => {

	const setStatus = (status) => {
		putRequest(orderUrlPages, `${order.id}`, {...order, orderStatusId : status}, `Bearer ${auth.access_token}`)
			.then(res => getNotice());
	}

	return (
		<Container>
			<NotificationSection>
				<Text
					size='13px'
					weight='normal'
					margin='0 0 6px 0'
					color='#868E96'
				>
					<b>{order.carId && order.carId.name}</b> в <b>{order.cityId && order.cityId.name}</b>, {order.pointId && order.pointId.address}
				</Text>
			</NotificationSection>
			<NotificationSection>
				<Text
					size='13px'
					weight='normal'
					margin='0 0 6px 0'
					color='#868E96'
				>
					{formatDateToOrderMain(order.dateFrom)} - {formatDateToOrderMain(order.dateTo)}
				</Text>
			</NotificationSection>
			<NotificationSection>
				<Text
					size='20px'
					weight='normal'
					margin='0'
					color='#121212'
				>
					{order.price} ₽
				</Text>
			</NotificationSection>
			<NotificationSection>
				<ButtonsContainer>
					{orderStatus.response &&
					<CustomButton
						radius='4px 0px 0px 4px;'
						border='0.5px solid #BECAD6'
						onClick={() => setStatus(orderStatus.response.data[0])}
						radiusL='4px 4px 0 0'
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
					</CustomButton>}
					<CustomButton
						radius='0 4px 4px 0px;'
						border='0.5px solid #BECAD6'
						onClick={() => {
							toggle();
							history.push(`/admin/orders/${order.id}`)
						}}
						radiusL='0px 0px 4px 4px'
						borderTopL='none'
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
			</NotificationSection>
		</Container>
	)
}
