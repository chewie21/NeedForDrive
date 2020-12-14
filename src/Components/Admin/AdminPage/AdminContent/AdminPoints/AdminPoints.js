import React, {useEffect, useState} from "react";
import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";
import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";
import {Container, ContentContainer, BootstrapStyle} from "./AdminPoints.styled";
import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {pointsUrl, pointsUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminPointsModal} from "./AdminPointsModal/AdminPointsModal";
import {Filters} from "../../../../../Common/Filters/Filters";
import {formatToFilter} from "../../../../../Functions/Format";

export const AdminPoints = ({auth, cities, history}) => {

	const [config, setConfig] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	const [filtersConfig, setFiltersConfig] = useState(null);

	const tableHeaders = [
		'Адрес', 'Город', 'Описание'
	];

	const formatToTableBody = (data) => {
		let tableBody = [];
		data.forEach(item => {
			let arr = [
				item.address,
				item.cityId.name,
				item.name
			];
			tableBody.push(arr);
		});
		return tableBody;
	};

	const getPoint = () => {
		getRequest(`${pointsUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${pointsUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: tableHeaders,
				});
			});
	};

	useEffect(() => {
		if(!config) getPoint();
		if(!filtersConfig && cities) {
			setFiltersConfig([
				{
					placeholder: 'Город',
					options: formatToFilter(cities.response.data, `cityId`)
				}
			]);
		}
	});

	return (
		config &&
		<Container>
			<BootstrapStyle/>
			<AdminPointsModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				auth={auth}
				getPoints={getPoint}
				cities={cities}
			/>
			<div className='d-flex'>
				<Text
					weight='normal'
					size='29px'
					margin='0 0 27px 0'
					color='#3D5170'
				>
					Пункты выдачи
				</Text>
				<IconImageHover
					width='30px'
					height='30px'
					margin='0 0 0 10px'
					img={AddCarButton}
					imgHover={AddCarButtonHover}
					onClick={() => setModalShow(true)}
				/>
			</div>
			<ContentContainer>
				{filtersConfig &&
				<Filters
					config={config}
					setConfig={setConfig}
					filtersConfig={filtersConfig}
					auth={auth}
					url={pointsUrlPages}
				/>
				}
				<CustomTable
					config={config}
					head={config.tableHeaders}
					body={formatToTableBody(config.data)}
					url={`/admin/points/`}
					history={history}
				/>
				<CustomPagination
					config={config}
					setConfig={setConfig}
					auth={auth}
				/>
			</ContentContainer>
		</Container>
	)
}