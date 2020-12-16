import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {AdminOrderItem} from "./AdminOrdersItem/AdminOrderItem";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {Filters} from "../../../../../Common/Filters/Filters";
import {formatToFilter} from "../../../../../Functions/Format";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../Common/AdminError/AdminError";

import {Container, ContentContainer, OrdersContainer} from "./AdminOrders.styled";
import {Text} from "../../../../../Common/Text/Text";

import {orderUrlPages} from "../../../../../Environments/ApiFactoryUrls";

export const AdminOrders = ({auth, history, cars, cities, orderStatus}) => {

	const [config, setConfig] = useState(null);
	const [filtersConfig, setFiltersConfig] = useState(null);
	const [error, setError] = useState(false);

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
	];

	useEffect(() => {
		getRequest(`${orderUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${orderUrlPages}?`,
					data: res.data,
					count: Math.floor(res.count / 10),
					page: 1,
				});
			}).catch(error => setError(true));
	}, [])

	useEffect(() => {
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
		<React.Fragment>
			{!config && !error &&
				<AdminLoading/>
			}
			{!config && error &&
				<AdminError history={history}/>
			}
			{config && !error &&
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
							setError={setError}
						/>
						}
						<OrdersContainer>
							{config.data.map((item, index) => (
								<AdminOrderItem
									order={item}
									key={index}
									auth={auth}
									orderStatus={orderStatus}
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
			}
		</React.Fragment>
	)
}