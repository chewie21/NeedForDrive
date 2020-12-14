import styled from "styled-components";

export const Container = styled.div`
	display: flex;
  	justify-content: space-between;
	width: 100%;
	padding: 15px 20px;
  	border-bottom: 1px solid #F5F6F8;
`;

export const FiltersContainer = styled.div`
	display: flex;
  	width: 80%;
`;

export const ButtonsContainer = styled.div`
  	display: flex;
  	width: 20%;
  	justify-content: space-between;
`;

export const customStyles = {
	control: (styles) => (
		{
			...styles,
			cursor: `pointer`,
			backgroundColor: "white",
			width: 110,
			height: 30,
			minHeight: 30,
			fontWeight: 300,
			fontSize: 14,
			boxShadow: `none !important`,
			marginRight: 15,
			':hover': {
				borderColor: `#007BFF`
			},
			':focus': {
				borderColor: `#007BFF`
			}
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