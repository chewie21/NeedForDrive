import {Table} from "react-bootstrap";

import {Text} from "../Text/Text";
import {Container, Style, TableContainer, TableFilterContainer} from "./CustomTable.styled";

import {AdminFilters} from "../AdminFilters/AdminFilters";
import {formatDateToOrderMain, formatOrderStatus} from "../../Functions/Format";

export const CustomTable = ({config, paginationFunc, history}) =>
	<Container>
		<Text
			weight='normal'
			size='29px'
			margin='0 0 27px 0'
			color='#3D5170'
		>
			{config.title}
		</Text>
		<TableContainer>
			<Style/>
			<TableFilterContainer>
				<AdminFilters/>
			</TableFilterContainer>
			<Table responsive hover borderless>
				<thead className='text-center'>
				<tr>
					{config.head.map((item, index) => (
						<th key={index}>{item}</th>
					))}
				</tr>
				</thead>
				<tbody className='text-center'>
					{
						config.body.map((item, index) => (
							<tr key={index} onClick={() => history.push(`/admin/orders/${item.id}`)}>
								<td>{item.id}</td>
								<td>{item.orderStatusId ? formatOrderStatus(item.orderStatusId.name) : '...'}</td>
								<td>{formatDateToOrderMain(item.createdAt)}</td>
								<td>{item.cityId.name}, {item.pointId.address}</td>
								<td>{item.carId ? item.carId.name : '...'}</td>
								<td>C {formatDateToOrderMain(item.dateFrom)} по {formatDateToOrderMain(item.dateTo)}</td>
							</tr>
						))
					}
				</tbody>
			</Table>

		</TableContainer>
	</Container>

