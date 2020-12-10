import styled, {createGlobalStyle} from "styled-components";

export const Style = createGlobalStyle`
	.MuiPaginationItem-root {
		color : #007BFF !important;
      	font-weight: normal !important;
      	font-size: 15px !important;
	  	height: auto !important;
	  	min-width: auto !important;
	}
    .MuiPaginationItem-page.Mui-selected {
	  	color: white !important;
	  	background-color: #007BFF !important;
	}
	tbody > tr {
	  cursor: pointer;
	}
`;

export const Container = styled.div`
	width: 100%;
`;

export const TableContainer = styled.div`
	background: #FFFFFF;
	box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11), 
			  0px 2px 4px rgba(90, 97, 105, 0.12), 
			  0px 5px 5px rgba(90, 97, 105, 0.06), 
			  0px 3.5px 35px rgba(90, 97, 105, 0.1);
	border-radius: 9px;
`;

export const TableFilterContainer = styled.div`
	display: flex;
	width: 100%;
  	padding: 15px 20px;
`;

