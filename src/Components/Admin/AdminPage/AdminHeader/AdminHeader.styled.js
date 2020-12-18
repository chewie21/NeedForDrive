import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
  
  	display: flex;
`;

export const MenuContainer = styled.div`
	display: none;
  	align-self: center;
  	border-right: 1px solid #F5F6F8;
  	height: 100%;
  	align-items: center;
  	justify-content: center;

	@media(max-width: 720px) {
		display: flex;
	  	width: 20%;
	}
`;

export const FindContainer = styled.div`
	width: 75%;
  	display: flex;
  	padding-left: 27px;
  
  	align-self: center;
  	align-items: center;

	@media(max-width: 720px) {
      	width: 60%;
  		padding-left: 5%;
	}

	@media(max-width: 720px) {
		width: 60%;
		padding-left: 3%;
	}
  
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

	@media(max-width: 720px) {
		width: 20%;
	}
  
`;

export const AccountContainer = styled.div`
  	width: 19%;
  	align-self: center;
  	padding: 0 25px 0 25px;

	@media(max-width: 720px) {
		display: none;
	}
`;

export const CountContainer = styled.div`
	position: absolute;
  	border-radius: 50%;
  	background: red;
  	height: 16px;
  	width: 16px;
  	right: 40%;
  	top: 50%;
  	bottom: 18px;
  	display: flex;
  	justify-content: center;
  	align-items: center;
`;

export const customStyles = {
	container: (styles) => (
		{
			...styles,
			width: `100%`,
		}
	),
	control: (styles) => (
		{
			...styles,
			cursor: `pointer`,
			backgroundColor: "white",
			border: `none`,
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