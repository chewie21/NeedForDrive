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
import {timeOptions} from "../EntitiesConstant";

export const AdminOrders = ({auth, history, cars, cities, orderStatus}) => {

	const [filtersConfig, setFiltersConfig] = useState(null);

	const [config, setConfig] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		getRequest(`${orderUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${orderUrlPages}?`,
					data: res.data,
					count: Math.floor(res.count / 10),
					page: 1,
				});
				setLoading(false);
			}).catch(error => {
				setError(true);
				setLoading(false);
		});
	}, [])

	useEffect(() => {
		if(cars.response && cities.response && orderStatus.response) {
			setFiltersConfig([
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
			]);
		}
	}, [cars.response, cities.response, orderStatus.response]);

	return (
		<React.Fragment>
			{loading &&
				<AdminLoading/>
			}
			{!loading && error &&
				<AdminError history={history}/>
			}
			{config && !error && !loading &&
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
							setError={setError}
							setLoading={setLoading}
						/>
					</ContentContainer>
				</Container>
			}
		</React.Fragment>
	)
}