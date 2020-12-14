import {useEffect, useState} from "react";
import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {AdminOrderItem} from "./AdminOrdersItem/AdminOrderItem";

import {orderUrl, orderUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {Container, ContentContainer, OrdersContainer} from "./AdminOrders.styled";
import {Text} from "../../../../../Common/Text/Text";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {Filters} from "../../../../../Common/Filters/Filters";
import {formatToFilter} from "../../../../../Functions/Format";

export const AdminOrders = ({auth, history, cars, cities, orderStatus}) => {

	const [config, setConfig] = useState(null);
	const [filtersConfig, setFiltersConfig] = useState(null);

	const timeOptions = [
		{
			label: 'За сутки',
			value: 86400000,
			name: 'createdAt'
		},
		{
			label: 'За неделю',
			value: 604800000,
			name: 'createdAt'
		},
		{
			label: 'За месяц',
			value: 2628002880,
			name: 'createdAt'
		},
	]

	useEffect(() => {
		if(orderStatus.response && !config) {
			getRequest(`${orderUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
				.then(res => {
					setConfig({
						url: `${orderUrlPages}?`,
						data: res.data,
						orderStatus: orderStatus.response.data,
						count: Math.floor(res.count / 10),
						page: 1,
					});
				})
		}
		if(cars.response && cities.response && orderStatus.response && !filtersConfig) {
			const obj = [
				{
					placeholder: 'Время',
					options: timeOptions
				},
				{
					placeholder: 'Модель',
					options: formatToFilter(cars.response.data, 'carId')
				},
				{
					placeholder: 'Город',
					options: formatToFilter(cities.response.data, 'cityId')
				},
				{
					placeholder: 'Статус',
					options: formatToFilter(orderStatus.response.data, 'orderStatusId')
				},
			]
			setFiltersConfig(obj);
		}
	});

	return (
		config &&
			<Container>
				<Text
					weight='normal'
					size='29px'
					margin='0 0 27px 0'
					color='#3D5170'
				>
					Заказы
				</Text>
				<ContentContainer>
					{filtersConfig &&
						<Filters
							config={config}
							setConfig={setConfig}
							filtersConfig={filtersConfig}
							auth={auth}
							url={orderUrlPages}
						/>
					}
					<OrdersContainer>
						{config.data.map((item, index) => (
							<AdminOrderItem
								order={item}
								key={index}
								auth={auth}
								orderStatus={config.orderStatus}
								config={config}
								setConfig={setConfig}
								history={history}
							/>
						))}
					</OrdersContainer>
					<CustomPagination
						config={config}
						setConfig={setConfig}
						auth={auth}
					/>
				</ContentContainer>
			</Container>
	)
}