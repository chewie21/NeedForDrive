import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
	width: 100%;
`;

export const ContentContainer = styled.div`
	background: #FFFFFF;
	box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11), 
			  0px 2px 4px rgba(90, 97, 105, 0.12), 
			  0px 5px 5px rgba(90, 97, 105, 0.06), 
			  0px 3.5px 35px rgba(90, 97, 105, 0.1);
	border-radius: 9px;
`;

export const FilterContainer = styled.div`
	display: flex;
	width: 100%;
  	padding: 15px 20px;
`;

export const PaginationContainer = styled.div`
	display: flex;
  	justify-content: center;
	width: 100%;
	padding: 15px 20px;
`;

export const OrdersContainer = styled.div`
  	width: 100%;
`;

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