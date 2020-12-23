import React, {useEffect, useState} from "react";

import {Container, ContentContainer, BootstrapStyle} from "./AdminCities.styled";
import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {AdminCitiesModal} from "./AdminCitiesModal/AdminCitiesModal";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../Common/AdminError/AdminError";
import {formatToTableBody} from "../../../../../Functions/Format";

import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";

import {citiesUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {citiesTableHeaders} from "../EntitiesConstant";

export const AdminCities = ({auth, history, cities}) => {

	const [modalShow, setModalShow] = useState(false);

	const [config, setConfig] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getCities = () => {
		getRequest(`${citiesUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${citiesUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: citiesTableHeaders,
				});
				setLoading(false);
			}).catch(error => {
				setError(true);
				setLoading(false);
		});
	}

	useEffect(() => {
		getCities();
	},[])

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
					<BootstrapStyle/>
					<AdminCitiesModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						auth={auth}
						getCities={getCities}
						cities={cities}
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
							body={formatToTableBody(config.data, `name`)}
							url={`/admin/cities/`}
							history={history}
						/>
						<CustomPagination
							config={config}
							setConfig={setConfig}
							auth={auth}
							setLoading={setLoading}
							setError={setError}
						/>
					</ContentContainer>
				</Container>
			}
		</React.Fragment>
	)
}