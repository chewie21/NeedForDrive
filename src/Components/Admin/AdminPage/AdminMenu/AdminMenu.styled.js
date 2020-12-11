import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const LogoContainer = styled.div`
    height: 69px;
    padding: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
  
  	border-bottom: 1px solid #F5F6F8;
`;

export const MenuSection = styled.div`
    cursor: pointer;
  
  	display: flex;
  	align-items: center;
  
    height: 58px;
    width: 100%;
  	padding-left: ${props => props.padding};

  	border-bottom: 1px solid #F5F6F8;
  	border-left: ${props => props.border};
  
  	&:HOVER {
	  background: #F5F6F8;
	}
`;