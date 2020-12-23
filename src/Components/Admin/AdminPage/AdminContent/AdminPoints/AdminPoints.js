import React, {useEffect, useState} from "react";

import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";
import {Container, ContentContainer, BootstrapStyle} from "./AdminPoints.styled";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminPointsModal} from "./AdminPointsModal/AdminPointsModal";
import {Filters} from "../../../../../Common/Filters/Filters";
import {formatToFilter, formatToTableBody} from "../../../../../Functions/Format";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../Common/AdminError/AdminError";

import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";

import {pointsUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {pointTableHeaders} from "../EntitiesConstant";

export const AdminPoints = ({auth, cities, history, points}) => {

	const [modalShow, setModalShow] = useState(false);

	const [filtersConfig, setFiltersConfig] = useState(null);

	const [config, setConfig] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getPoint = () => {
		getRequest(`${pointsUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${pointsUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: pointTableHeaders,
				});
				setLoading(false);
			}).catch(error => {
				setError(true);
				setLoading(false);
		});
	};

	useEffect(() => {
		getPoint();
	}, []);

	useEffect(() => {
		if(cities.response) {
			setFiltersConfig([
				{
					placeholder: 'Город',
					options: formatToFilter(cities.response.data, `cityId`)
				}
			]);
		}
	}, [cities.response]);

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
					<AdminPointsModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						auth={auth}
						getPoints={getPoint}
						cities={cities}
						points={points}
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
						{cities.response &&
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
							url={pointsUrlPages}
							setError={setError}
						/>
						}
						<CustomTable
							config={config}
							head={config.tableHeaders}
							body={formatToTableBody(config.data, `point`)}
							url={`/admin/points/`}
							history={history}
						/>
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