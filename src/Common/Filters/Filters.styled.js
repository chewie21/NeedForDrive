import styled from "styled-components";

export const Container = styled.div`
	display: flex;
  	justify-content: space-between;
	width: 100%;
	padding: 15px 20px;
  	border-bottom: 1px solid #F5F6F8;

	@media(max-width: 960px) {
		display: block;
	}

	@media(max-width: 540px) {
	display: none;
	}
`;

export const MobileContainer = styled.div`
	display: none;
  	width: 100%;
  	padding: 15px 20px;
  	border-bottom: 1px solid #F5F6F8;

  	@media(max-width: 540px) {
    	display: block;
  	}
`;

export const FiltersContainer = styled.div`
	display: flex;
  	width: 80%;

	@media(max-width: 960px) {
      	width: 100%;
	  	justify-content: space-between;
	}
`;

export const FiltersMobileContainer = styled.div`
	width: 100%;
`;

export const ButtonsContainer = styled.div`
  	display: flex;
  	width: 20%;
  	justify-content: space-between;

	@media(max-width: 960px) {
		width: 100%;
      	margin-top: 15px;
	}
`;

export const ButtonsMobileContainer = styled.div`
	padding-top: 15px;
	width: 100%;
  	display: flex;
  	justify-content: space-between;
`;

export const AccordionContainer = styled.div``;

export const LoadingMobileContainer = styled.div`
	margin-top: 15px;
`;

export const customStyles = {
	container: (styles) => (
		{
			...styles,
			width: `20%`,
			marginRight: `5%`,
			'@media(max-width: 960px)': {
				width: `20%`,
				marginRight: `0`,
			},
			'@media(max-width: 540px)': {
				marginTop: 15,
				width: `100%`,
				marginRight: `0`,
			}
		}
	),
	control: (styles) => (
		{
			...styles,
			cursor: `pointer`,
			backgroundColor: "white",
			height: 30,
			minHeight: 30,
			fontWeight: 300,
			fontSize: 14,
			boxShadow: `none !important`,
			':hover': {
				borderColor: `#007BFF`
			},
			':focus': {
				borderColor: `#007BFF`
			},
		}
	),
	input: (styles) => (
		{
			...styles,
			fontWeight: 300,
			fontSize: 14,
			padding: 0,
			margin: 0,
		}
	),
	dropdownIndicator: (styles) => (
		{
			...styles,
			padding: 4
		}
	),
	indicatorSeparator: (styles) => (
		{
			display: `none`
		}
	),
}