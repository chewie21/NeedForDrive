import styled from "styled-components";

export const OrderItemContainer = styled.div`
	display: flex;
  	padding: 15px 20px;
  	width: 100%;
  	height: fit-content;
  	justify-content: space-between;
`;

export const OrderItemSection = styled.div`
	width: ${props => props.width};
  	align-self: center;
  
  	@media(max-width: 1203px) {
	  width: ${props => props.widthXl};
	}

	@media(max-width: 1140px) {
		width: ${props => props.widthL};
	}

	@media(max-width: 960px) {
		display: ${props => props.display};
	  	width: ${props => props.widthM};
	}

	@media(max-width: 540px) {
		display: ${props => props.displayS};
		width: ${props => props.widthS};
	}
`;

export const OrderItemImg = styled.img.attrs(props => ({
	crossOrigin: 'anonymous',
	referrerPolicy: 'origin'
}))`
    width: 80%;
`;

export const ButtonsContainer = styled.div`
  	display: flex;
  	width: 100%;

	@media(max-width: 1140px) {
		flex-direction: column;
      	align-items: center;
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

	@media(max-width: 1140px) {
		width: 100%;
	  	height: fit-content;

      	border: ${props => props.borderL};
      	border-top: ${props => props.borderTopL};
      	border-bottom: ${props => props.borderBottomL};
      	border-radius: ${props => props.radiusL};
	}
`;