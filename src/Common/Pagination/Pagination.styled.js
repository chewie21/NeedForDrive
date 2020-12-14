import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
	display: flex;
  	justify-content: center;
	width: 100%;
	padding: 15px 20px;
	border-top: 1px solid #F5F6F8;
`;

//override @material-ui styles
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
`;