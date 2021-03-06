import React, {useEffect, useState} from "react";

import {BootstrapStyle, Container, ContentContainer} from "./AdminCategories.styled";
import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminCategoriesModal} from "./AdminCategoriesModal/AdminCategoriesModal";

import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";

import {categoriesUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../Common/AdminError/AdminError";

export const AdminCategories = ({auth, history, categories}) => {

	const [config, setConfig] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	const [error, setError] = useState(false);

	const tableHeaders = [
		'Категория'
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

	const getCategories = () => {
		getRequest(`${categoriesUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${categoriesUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: tableHeaders,
				});
			}).catch(error => setError(true));
	}

	useEffect(() => {
		getCategories();
	}, []);

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
					<AdminCategoriesModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						auth={auth}
						getCategories={getCategories}
						categories={categories}
					/>
					<div className='d-flex'>
						<Text
							weight='normal'
							size='29px'
							margin='0 0 27px 0'
							color='#3D5170'
						>
							Категории автомобилей
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
							url={`/admin/categories/`}
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