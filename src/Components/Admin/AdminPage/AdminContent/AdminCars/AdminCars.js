import React, {useEffect, useState} from "react";

import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";
import {Text} from "../../../../../Common/Text/Text";
import {Container, ContentContainer, BootstrapStyle} from "./AdminCars.styled";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {formatToFilter, formatToTableBody} from "../../../../../Functions/Format";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {Filters} from "../../../../../Common/Filters/Filters";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {AdminCarsModal} from "./AdminCarsModal/AdminCarsModal";
import {AdminError} from "../../../../../Common/AdminError/AdminError";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";

import AddCarButton from '../../../../../img/adminAddEntity.svg';
import AddCarButtonHover from '../../../../../img/adminAddEntityHover.svg';

import {carsUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {carsTableHeaders} from "../EntitiesConstant";

export const AdminCars = ({auth, categories, history, cars}) => {

	const [modalShow, setModalShow] = useState(false);

	const [filtersConfig, setFiltersConfig] = useState(null);

	const [config, setConfig] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getCars = () => {
		getRequest(`${carsUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${carsUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: carsTableHeaders,
				});
				setLoading(false);
			}).catch(error => {
				setError(true);
				setLoading(false);
		});
	};

	useEffect(() => {
		getCars();
	}, []);

	useEffect(() => {
		if(categories.response)
			setFiltersConfig([{
				placeholder: 'Категория',
				options: formatToFilter(categories.response.data, 'categoryId')
			}]);
	}, [categories.response]);

	return (
		<React.Fragment>
			{loading &&
				<AdminLoading/>
			}
			{error && !loading &&
				<AdminError history={history}/>
			}
			{config && !error && !loading &&
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
							body={formatToTableBody(config.data, `cars`)}
							url={`/admin/cars/`}
							history={history}
						/>
						<CustomPagination
							config={config}
							setConfig={setConfig}
							setError={setError}
							setLoading={setLoading}
							auth={auth}
						/>
					</ContentContainer>
				</Container>
			}
		</React.Fragment>
	)
}