import React, {useEffect, useState} from "react";

import {Container, ContentContainer, BootstrapStyle} from "./AdminCities.styled";
import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {AdminCitiesModal} from "./AdminCitiesModal/AdminCitiesModal";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";

import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";

import {citiesUrlPages} from "../../../../../Environments/ApiFactoryUrls";

export const AdminCities = ({auth, history}) => {

	const [config, setConfig] = useState(null);
	const [modalShow, setModalShow] = useState(false);

	const tableHeaders = [
		'Город'
	];

	const formatToTableBody = (data) => {
		let tableBody = [];
		data.forEach(item => {
			let arr = [
				item.name
			]
			tableBody.push(arr);
		});
		return tableBody;
	}

	const getCities = () => {
		getRequest(`${citiesUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${citiesUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: tableHeaders,
				});
			})
	}

	useEffect(() => {
		getCities();
	},[])

	return (
		config &&
		<Container>
			<BootstrapStyle/>
			<AdminCitiesModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				auth={auth}
				getCities={getCities}
			/>
			<div className='d-flex'>
				<Text
					weight='normal'
					size='29px'
					margin='0 0 27px 0'
					color='#3D5170'
				>
					Города
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
				<CustomTable
					config={config}
					head={config.tableHeaders}
					body={formatToTableBody(config.data)}
					url={`/admin/cities/`}
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