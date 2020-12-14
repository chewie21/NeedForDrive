import styled from "styled-components";

export const Container = styled.div`
	z-index: 200;
	position: absolute;
  	top: 0;
  	width: 100%;
  	height: 42px;
  	background: ${props => props.color};
  	display: flex;
  	justify-content: space-between;
  	padding: 0 25px;
  	border-radius: 9px;
  	align-items: center;
  	
  	margin: ${props => props.margin};
`;