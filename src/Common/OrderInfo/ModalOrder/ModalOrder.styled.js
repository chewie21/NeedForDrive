import styled from "styled-components";

export const ModalOrderContainer = styled.div`
    display: none;
    z-index: 9999;
    position: fixed;
    height: 100%;
    width: 100%;
    background: #111518;
    overflow: scroll;
    
    @media(max-width: 720px) {
        display: block; 
    }
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
    padding: 28px;
    height: 100%;
    width: 100%;
    
    @media(max-width: 540px) {
        display: block; 
    }
`;

export const Left = styled.div`
    width: 4%;
    height: 100%;
    display: flex;
    justify-content: center;
    
    @media(max-width: 720px) {
        width: 6%; 
    }
`;

export const Middle = styled.div`
    width: 94%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 64px;
    
     @media(max-width: 720px) {
        width: 96%; 
     }
`;

export const ModalOrderContent = styled.div`
    
`;

export const MobileOrderItemContainer = styled.div`
    margin: 0 0 16px 0
`;