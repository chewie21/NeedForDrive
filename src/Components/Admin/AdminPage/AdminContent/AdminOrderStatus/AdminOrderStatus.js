import React, {useEffect, useState} from "react";
import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {carsUrlPages, orderStatusUrl} from "../../../../../Environments/ApiFactoryUrls";
import {BootstrapStyle, Container, ContentContainer} from "../AdminCars/AdminCars.styled";
import {AdminCarsModal} from "../AdminCars/AdminCarsModal/AdminCarsModal";
import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";
import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";
import {Filters} from "../../../../../Common/Filters/Filters";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminStatusModal} from "./AdminStatusModal/AdminStatusModal";

export const AdminOrderStatus = ({auth, history}) => {

	const [config, setConfig] = useState(null);
	const [modalShow, setModalShow] = useState(false);

	const tableHeaders = [
		'Статус'
	];

	const formatToTableBody = (data) => {
		let tableBody = [];
		data.forEach(item => {
			let arr = [
				item.name
			];
			tableBody.push(arr);
		});
		return tableBody;
	}

	const getStatus = () => {
		getRequest(`${orderStatusUrl}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				console.log(res);
				setConfig({
					url: `${orderStatusUrl}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: tableHeaders,
				});
			});
	}

	useEffect(() => {
		getStatus();
	}, []);

	return (
		config &&
		<Container>
			<BootstrapStyle/>
			<AdminStatusModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				auth={auth}
				getStatus={getStatus}
			/>
			<div className='d-flex'>
				<Text
					weight='normal'
					size='29px'
					margin='0 0 27px 0'
					color='#3D5170'
				>
					Статусы заказов
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
					url={`/admin/orderStatus/`}
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