import {Table} from "react-bootstrap";
import {Style} from "./CustomTable.styled";

export const CustomTable = ({head, body, config, url, history}) =>
	<Table responsive hover borderless>
		<Style/>
		<thead className='text-center'>
		<tr>
			{head.map((item, index) => (
				<th key={index}>{item}</th>
			))}
		</tr>
		</thead>
		<tbody className='text-center'>
		{
			body.map((item, index) => (
				<tr key={index} onClick={() => history.push(`${url}${config.data[index].id}`)}>
					{item.map((item, index) => (
						<td key={index}>{item}</td>
					))}
				</tr>
			))
		}
		</tbody>
	</Table>


