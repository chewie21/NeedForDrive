import {Container} from "./Notification.styled";
import React from "react";
import {AdminLoading} from "../../../../Common/AdminLoading/AdminLoading";
import {Text} from "../../../../Common/Text/Text";
import {NotificationItem} from "./NotificationItem/NotificationItem";

export const Notification = ({auth, orderStatus, history, config, loading, error, getNotice, toggle}) =>
	<Container>
		{loading &&
			<AdminLoading/>
		}
		{error &&
			<React.Fragment>
				<Text
					size='20px'
					weight='normal'
					margin='0 0 15px 0'
					color='#3D5170'
				>
					Что-то пошло не так...
				</Text>
				<Text
					size='15px'
					weight='normal'
					margin='0'
					color='#818EA3'
				>
					Попробуйте перезагрузить страницу...
				</Text>
			</React.Fragment>
		}
		{config &&
			config.data.map((item, index) => (
				<NotificationItem
					order={item}
					key={index}
					auth={auth}
					orderStatus={orderStatus}
					history={history}
					getNotice={getNotice}
					toggle={toggle}
				/>
			))
		}
	</Container>