import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    z-index: 9999;
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
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
    padding: 24px;
    
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

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;