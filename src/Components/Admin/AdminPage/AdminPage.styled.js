import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
  	display: flex;
    background: #F5F6F8;
`;

export const MenuContainer = styled.div`
	z-index: 100;
    position: fixed;
    height: 100%;
    width: 20%;
    background: #FFFFFF;
  	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const HeaderContainer = styled.div`
	z-index: 99;
    position: fixed;
    width: 80%;
    margin-left: 20%;
    height: 68px;
    background: #FFFFFF;
  	box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export const SwitchContainer = styled.div`
	margin-left: 20%;
  	margin-top: 68px;
  	width: 80%;
  	flex-grow 1;
  	padding: 27px;
  	height: fit-content;
  	background: #F5F6F8;
`;

export const Style = createGlobalStyle`
    a {
        text-decoration: none !important;
    }
`;