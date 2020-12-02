import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    z-index: 9999;
    position: fixed;
    height: 100%;
    width: 100%;
    background: #111518;
`;

export const Content = styled.div`
    text-align: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 30%;
    height: fit-content;
    
    @media(max-width: 960px) {
        width: 50%;
    }
    
    @media(max-width: 720px) {
        width: 60%;
    }
    
    @media(max-width: 540px) {
        width: 90%;
    }
`;