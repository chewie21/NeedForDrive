import {Pagination} from "@material-ui/lab";
import {Container, Style} from "./Pagination.styled";
import {getRequest} from "../../Functions/RequestsToApiFactory";

export const CustomPagination = ({config, setConfig, auth}) => {

	const setNewPage = (event, value) => {
		let obj = {...config};
		setConfig(null);
		getRequest(`${config.url}&page=${value-1}&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
			.then(res => setConfig({...obj, page: value, data: res.data}));
	}

	return (
		<Container>
			<Style/>
			<Pagination
				count={config.count}
				page={config.page}
				siblingCount={1}
				boundaryCount={1}
				onChange={setNewPage}
			/>
		</Container>
	)
}

