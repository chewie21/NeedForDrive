import React, {useEffect, useState} from "react";

import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";
import {Text} from "../../../../../Common/Text/Text";
import {Container, ContentContainer, BootstrapStyle} from "./AdminCars.styled";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {formatToFilter} from "../../../../../Functions/Format";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {Filters} from "../../../../../Common/Filters/Filters";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {AdminCarsModal} from "./AdminCarsModal/AdminCarsModal";
import {AdminError} from "../../../../../Common/AdminError/AdminError";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";

import AddCarButton from '../../../../../img/adminAddEntity.svg';
import AddCarButtonHover from '../../../../../img/adminAddEntityHover.svg';

import {carsUrlPages} from "../../../../../Environments/ApiFactoryUrls";

export const AdminCars = ({auth, categories, history, cars}) => {

	const [modalShow, setModalShow] = useState(false);

	const [config, setConfig] = useState(null);
	const [filtersConfig, setFiltersConfig] = useState(null);
	const [error, setError] = useState(false);

	const tableHeaders = [
		'Модель', 'Категория', 'Номер', 'Бензин'
	];

	const formatToTableBody = (data) => {
		let tableBody = [];
		data.forEach(item => {
			let arr = [
				item.name,
				item.categoryId.name,
				item.number ? item.number : `Отсутствует`,
				item.tank ? `${item.tank}%` : 'Неизвестно'
			]
			tableBody.push(arr);
		});
		return tableBody;
	};

	const getCars = () => {
		getRequest(`${carsUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${carsUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: tableHeaders,
				});
			}).catch(error => setError(true));
	};

	useEffect(() => {
		getCars();
	}, []);

	useEffect(() => {
		if(!filtersConfig && categories.response) {
			const obj = [
				{
					placeholder: 'Категория',
					options: formatToFilter(categories.response.data, 'categoryId')
				}
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
					<BootstrapStyle/>
					<AdminCarsModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						categories={categories}
						auth={auth}
						getCars={getCars}
						cars={cars}
					/>
					<div className='d-flex'>
						<Text
							weight='normal'
							size='29px'
							margin='0 0 27px 0'
							color='#3D5170'
						>
							Автомобили
						</Text>
						{categories.response &&
						<IconImageHover
							width='30px'
							height='30px'
							margin='0 0 0 10px'
							img={AddCarButton}
							imgHover={AddCarButtonHover}
							onClick={() => setModalShow(true)}
						/>}
					</div>
					<ContentContainer>
						{filtersConfig &&
						<Filters
							config={config}
							setConfig={setConfig}
							filtersConfig={filtersConfig}
							auth={auth}
							url={carsUrlPages}
							setError={setError}
						/>
						}
						<CustomTable
							config={config}
							head={config.tableHeaders}
							body={formatToTableBody(config.data)}
							url={`/admin/cars/`}
							history={history}
						/>
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