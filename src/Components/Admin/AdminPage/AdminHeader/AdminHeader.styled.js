import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
  
  	display: flex;
`;

export const FindContainer = styled.div`
	width: 75%;
  	display: flex;
  
  	align-self: center;
  	align-items: center;
`;

export const Input = styled.input`
	width: 100%;
  	margin-right: 27px;
	border: none;
  	font-weight: normal;
  	font-size: 13px;
  	color: #767F9D;
`;

export const NotificationContainer = styled.div`
	cursor: pointer;
	width: 6%;
  	height: 100%;
  	border-left: 1px solid #F5F6F8;
  	border-right: 1px solid #F5F6F8;

  	align-items: center;
  	display: flex;
  	justify-content: center;
  	position: relative;
`;

export const AccountContainer = styled.div`
  	width: 19%;
  	align-self: center;
  	padding: 0 25px 0 25px;
`;

export const CountContainer = styled.div`
	position: absolute;
  	border-radius: 50%;
  	background: red;
  	height: 16px;
  	width: 16px;
  	right: 15px;
  	bottom: 18px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
`;

export const customStyles = {
	control: (styles) => (
		{
			...styles,
			cursor: `pointer`,
			backgroundColor: "white",
			border: `none`,
			width: 225,
			fontWeight: 300,
			fontSize: 14,
			boxShadow: `none !important`,
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
			display: `none`
		}
	),
	indicatorSeparator: (styles) => (
		{
			display: `none`
		}
	),
	clearIndicator: (styles) => (
		{
			display: 'none'
		}
	)
}