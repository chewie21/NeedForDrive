import styled from "styled-components";

export const OrderContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    
    @media(max-width: 540px) {
        display: none;
    }
`;

export const MobileContainer = styled.div`
    display: none;
    height: 100%;
    width: 100%;
    
    @media(max-width: 540px) {
        display: block;
    }
`;

export const OrderMenu = styled.section`
    position: fixed;
    background: #151B1F;
    width: 4%;
    height: 100%;
    
    @media(max-width: 720px) {
        width: 6%;
    }
`;

export const OrderContent = styled.section`
    width: 96%;
    margin-left: 4%;
    height: 100%;
    display: flex;
    flex-direction column;
    
    @media(max-width: 720px) {
        width: 94%;
        margin-left: 6%;
    }
`;

export const FixedHeader = styled.div`
    position: fixed;
    width: 96%;
    z-index: 100;
    
    @media(max-width: 720px) {
        width: 94%;
    }
`;

export const HeaderContainer = styled.div`
    padding: 32px;
    background: white;
`;

export const NavContainer = styled.div`
    background: white;
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    padding: 0;
`;

export const MainContainer = styled.div`
    display: flex;
    margin-top: 126px;
    padding: 0;
    flex-grow 1;
`;

export const StepContainer = styled.div`
    width: 70%;
    height: 100%;
    padding: 32px;
    z-index: 2;
    
    @media(max-width: 1100px) {
        width: 60%;
    }
    
    @media(max-width: 720px) {
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    width: 30%;
    height: 100%;
    border-left: 1px solid #EEEEEE;
    padding: 32px;
    
    @media(max-width: 1100px) {
        width: 40%;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    padding: 8px 32px 8px 32px;
`;

export const FixedOrder = styled.div`
    position: fixed;
    margin-top: 126px;
    width: 96%;
    height: 100%;
    z-index: 1;
    
    @media(max-width: 720px) {
        display: none;
    }
`;

export const OrderButton = styled.div`
    display: none;
    position: fixed;
    right: 32px;
    bottom: 32px;
    background: white;
    z-index: 100;
    
    @media(max-width: 720px) {
        display: block;
    }
`;