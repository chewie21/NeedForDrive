import React, {useEffect, useState} from "react";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminRateModal} from "./AdminRateModal/AdminRateModal";
import {formatToFilter} from "../../../../../Functions/Format";
import {Filters} from "../../../../../Common/Filters/Filters";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../Common/AdminError/AdminError";

import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";
import {BootstrapStyle, Container, ContentContainer} from "./AdminRate.styled";

import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";

import {rateUrlPages} from "../../../../../Environments/ApiFactoryUrls";

export const AdminRate = ({auth, rateType, history, rate}) => {

	const [config, setConfig] = useState(null);
	const [modalShow, setModalShow] = useState(false);
	const [filtersConfig, setFiltersConfig] = useState(null);
	const [error, setError] = useState(false);

	const tableHeaders = [
		'Цена', 'Тариф'
	];

	const formatToTableBody = (data) => {
		let tableBody = [];
		data.forEach(item => {
			let arr = [
				`${item.price} (P/${item.rateTypeId.unit})`,
				item.rateTypeId.name,
			];
			tableBody.push(arr);
		});
		return tableBody;
	};

	const getRate = () => {
		getRequest(`${rateUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${rateUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: tableHeaders,
				});
			}).catch(error => setError(true));
	};

	useEffect(() => {
		getRate();
	}, []);

	useEffect(() => {
		if(!filtersConfig && rateType.response) {
			setFiltersConfig([
				{
					placeholder: 'Тариф',
					options: formatToFilter(rateType.response.data, `rateTypeId`)
				}
			]);
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
							body={formatToTableBody(config.data)}
							url={`/admin/rate/`}
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