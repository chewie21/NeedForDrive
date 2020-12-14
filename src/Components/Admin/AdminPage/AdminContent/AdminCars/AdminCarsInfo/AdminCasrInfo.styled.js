import styled, {createGlobalStyle} from "styled-components";

//override bootstrap styles
export const BootstrapStyle = createGlobalStyle`
	.form-control {
		height: 30px;
      	font-size: 12px;
      	font-weight: normal;
	}
	.custom-file {
		width: 100%;
	  	height: 30px;
	}
	.custom-file-input {
      	cursor: pointer;
	  	height: 30px;
	}
    .custom-file-label {
		font-size: 12px;
	  	font-weight: normal;
      	text-align: left;
      	color: #495057;
	  	margin: 0;
      	height: 30px;
	}
    .custom-file-label::after {
		height: 28px;
	}
	.custom-btn {
      	height: 30px;
      	font-size: 12px;
      	font-weight: normal;
      	color: #495057;
      	background-color: #e9ecef;
      	border-color: #ced4da;
	}
    .btn:hover, .btn:focus, .btn:active, .btn:checked {
      color: #495057;
      background-color: #e9ecef;
      border-color: #ced4da;
    }
	.form-check-label {
      color: #495057;
	  font-size: 14px;
	}
	.form-check-input {
	  cursor: pointer;
	}
	.error {
	  	border: 1px solid #CB3656;
	}
`;

export const Container = styled.div`
	width: 100%;
  	position: relative;
`;

export const InfoContainer = styled.div`
	display: flex;
  	justify-content: space-between;
`;

export const LeftSection = styled.div`
	background: #FFFFFF;
	border-radius: 9px;
	width: 30%;
  	text-align: center;
  	padding: 30px 0;
  	height: fit-content;
	
	box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11),
	0px 2px 4px rgba(90, 97, 105, 0.12),
	0px 5px 5px rgba(90, 97, 105, 0.06),
	0px 3.5px 35px rgba(90, 97, 105, 0.1);
`;

export const RightSection = styled.div`
	background: #FFFFFF;
	border-radius: 9px;
	width: 65%;
  	padding: 30px 15px;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
	
	box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11),
	0px 2px 4px rgba(90, 97, 105, 0.12),
	0px 5px 5px rgba(90, 97, 105, 0.06),
	0px 3.5px 35px rgba(90, 97, 105, 0.1);
`;

export const CarImgContainer = styled.div`
  	width: 70%;
  	margin: auto;
`;

export const CarTitleImg = styled.img.attrs(props => ({
	crossOrigin: 'anonymous',
	referrerPolicy: 'origin'
}))`
    width: 100%;
`;

export const InfoSection = styled.div`
	width: 100%;
	margin: ${props => props.margin ? props.margin : '0 0 20px 0'}
`;

export const TankInfo = styled.div`
	padding: 15px 20px;
  	box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.12);
  	margin: 0 0 20px 0;
`;

export const TankContainer = styled.div`
	width: 100%;
  	height: 5px;
  	background: #FFFFFF;
  	box-shadow: inset 0px 0.5px 4px rgba(0, 0, 0, 0.25);
  	border-radius: 4px;
  	margin-top: 10px;
`;

export const TankValue = styled.div`
	width: ${props => props.width};
  	height: 5px;
  	background: #007BFF;
  	border-radius: 4px;
`;

export const CarColorContainer = styled.div`
	width: 70%;
  	margin: auto;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;