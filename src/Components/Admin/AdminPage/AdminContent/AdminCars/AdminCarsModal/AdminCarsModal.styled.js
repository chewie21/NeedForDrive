import styled from "styled-components";

export const ModalBodySection = styled.div`
	margin: 0 0 20px 0;
`;

export const ModalBodyContainer = styled.div`
	display: flex;
  
  	@media(max-width: 720px) {
	  	display: block;
	}
`;

export const ModalBodyLeft = styled.div`
	width: 40%;

	@media(max-width: 720px) {
		width: 100%;
	}
`;

export const ModalBodyRight = styled.div`
	width: 60%;
  	display: flex;
  	justify-content: center;

	@media(max-width: 720px) {
		width: 100%;
	}
`;