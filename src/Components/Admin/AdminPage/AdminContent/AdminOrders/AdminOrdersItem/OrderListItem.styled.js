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
`;