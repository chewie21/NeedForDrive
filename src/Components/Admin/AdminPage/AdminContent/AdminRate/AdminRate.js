import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminRateModal} from "./AdminRateModal/AdminRateModal";
import {formatToFilter, formatToTableBody} from "../../../../../Functions/Format";
import {Filters} from "../../../../../Common/Filters/Filters";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../Common/AdminError/AdminError";

import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";
import {BootstrapStyle, Container, ContentContainer} from "./AdminRate.styled";

import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";

import {rateUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {rateTableHeaders} from "../EntitiesConstant";

export const AdminRate = ({auth, rateType, history, rate}) => {

	const [modalShow, setModalShow] = useState(false);

	const [filtersConfig, setFiltersConfig] = useState(null);

	const [config, setConfig] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getRate = () => {
		getRequest(`${rateUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${rateUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: rateTableHeaders,
				});
				setLoading(false);
			}).catch(error => {
				setError(true);
				setLoading(false);
		});
	};

	useEffect(() => {
		getRate();
	}, []);

	useEffect(() => {
		if(rateType.response)
			setFiltersConfig([
				{
					placeholder: 'Тариф',
					options: formatToFilter(rateType.response.data, `rateTypeId`)
				}
			]);
	}, [rateType.response]);

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
					<AdminRateModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						auth={auth}
						getRate={getRate}
						rateTypeId={rateType}
						rate={rate}
					/>
					<div className='d-flex'>
						<Text
							weight='normal'
							size='29px'
							margin='0 0 27px 0'
							color='#3D5170'
						>
							Тарифы
						</Text>
						{rateType.response &&
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
							url={rateUrlPages}
							setError={setError}
						/>
						}
						<CustomTable
							config={config}
							head={config.tableHeaders}
							body={formatToTableBody(config.data, `rate`)}
							url={`/admin/rate/`}
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