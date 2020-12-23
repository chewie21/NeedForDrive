import styled, {createGlobalStyle} from "styled-components";

//override bootstrap styles
export const BootstrapStyle = createGlobalStyle`
	.form-control {
		height: 30px;
      	font-size: 12px;
      	font-weight: normal;
	}
`;

export const Container = styled.div`
	width: 100%;
  	position: relative;
`;

export const ContentContainer = styled.div`
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11), 
			  0px 2px 4px rgba(90, 97, 105, 0.12), 
			  0px 5px 5px rgba(90, 97, 105, 0.06), 
			  0px 3.5px 35px rgba(90, 97, 105, 0.1);
	border-radius: 9px;
`;

export const InfoContainer = styled.div`
  	width: 100%;
  	padding: 15px 20px;
`;

export const InfoSection = styled.div`
	margin: ${props => props.margin};
`;
