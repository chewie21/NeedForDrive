import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    
    @media(max-width: 540px) {
        display: none;
    }
`;

export const ContainerMobile = styled.div`
    height: 100vh;
    display: none;
    
    @media(max-width: 540px) {
        display: flex;
    }
`;

export const MainMenuContainer = styled.section`
    width: 4%;
    height: 100%;
    background: #151B1F;;
     
    @media(max-width: 720px) {
        width: 6%; 
    }
`;

export const MainTitleContainer = styled.section`
    width: 48%;
    height: 100%;
    
    @media(max-width: 1084px) {
        width: 58%; 
    }
    @media(max-width: 720px) {
        width: 94%; 
    }
`;

export const MainSliderContainer = styled.section`
    width: 48%;
    height: 100%;
    
    @media(max-width: 1084px) {
        text-align: center;
        width: 38%; 
    }
    @media(max-width: 720px) {
        display: none;
    }
`;