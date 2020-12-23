import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
	width: 100%;
  	box-shadow: inset 0px -1px 0px #E1E5EB;
  	padding: 10px 0;
`;

export const NotificationSection = styled.div`
	width: 100%;
  	margin: 0 0 5px 0;
`;

export const ButtonsContainer = styled.div`
  	display: flex;
  	width: 100%;

	@media(max-width: 960px) {
		display: block;
	}
`;

export const CustomButton = styled.button`
  	display: flex;
  	align-items: center;
  	justify-content: center;
    
    padding: 8px 6px;

  	border: ${props => props.border};
  	border-top: ${props => props.borderTop};
  	border-bottom: ${props => props.borderBottom};
    border-radius: ${props => props.radius};
    
    background: #FFFFFF;

    width: 83px;
  	height: 100%;
    margin: 0;

	@media(max-width: 960px) {
		width: 100%;
	  	height: fit-content;

      	border: ${props => props.borderL};
      	border-top: ${props => props.borderTopL};
      	border-radius: ${props => props.radiusL};
	}
`;
