import React, {useEffect, useState} from "react";

import {BootstrapStyle, Container, ContentContainer} from "../AdminCars/AdminCars.styled";
import {Text} from "../../../../../Common/Text/Text";
import {IconImageHover} from "../../../../../Common/IconImage/IconImageHover";

import {getRequest} from "../../../../../Functions/RequestsToApiFactory";
import {CustomTable} from "../../../../../Common/CustomTable/CustomTable";
import {CustomPagination} from "../../../../../Common/Pagination/Pagination";
import {AdminStatusModal} from "./AdminStatusModal/AdminStatusModal";
import {AdminLoading} from "../../../../../Common/AdminLoading/AdminLoading";
import {AdminError} from "../../../../../Common/AdminError/AdminError";
import {formatToTableBody} from "../../../../../Functions/Format";

import AddCarButton from "../../../../../img/adminAddEntity.svg";
import AddCarButtonHover from "../../../../../img/adminAddEntityHover.svg";

import {orderStatusUrlPages} from "../../../../../Environments/ApiFactoryUrls";
import {orderStatusTableHeaders} from "../EntitiesConstant";

export const AdminOrderStatus = ({auth, history, orderStatus}) => {

	const [modalShow, setModalShow] = useState(false);

	const [config, setConfig] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getStatus = () => {
		getRequest(`${orderStatusUrlPages}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({
					url: `${orderStatusUrlPages}?`,
					data: res.data,
					count: Math.ceil(res.count / 10),
					page: 1,
					tableHeaders: orderStatusTableHeaders,
				});
				setLoading(false);
			}).catch(error => {
				setError(true);
				setLoading(false);
		});
	}

	useEffect(() => {
		getStatus();
	}, []);

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
					<AdminStatusModal
						show={modalShow}
						onHide={() => setModalShow(false)}
						auth={auth}
						getStatus={getStatus}
						orderStatus={orderStatus}
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
							body={formatToTableBody(config.data, `name`)}
							url={`/admin/orderStatus/`}
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