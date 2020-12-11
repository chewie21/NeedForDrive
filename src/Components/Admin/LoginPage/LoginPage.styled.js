import styled from "styled-components";

export const BackgroundContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: #F5F6F8;
`;

export const Container = styled.div`
    width: 30%;
    height: fit-content;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
`;

export const Content = styled.div`
    width: 100%;
    height: fit-content;
    padding: 18px;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11), 
                0px 2px 4px rgba(90, 97, 105, 0.12), 
                0px 5px 5px rgba(90, 97, 105, 0.06), 
                0px 3.5px 35px rgba(90, 97, 105, 0.1);
    border-radius: 9px;
`;

export const LogoRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 16px 0;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 30px;
    padding: 8px 12px;
    background: #FFFFFF;
    border: 0.5px solid #BECAD6;
    box-sizing: border-box;
    border-radius: 3px;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: -0.192982px;
    color: #3D5170;
    margin: 0 0 16px 0;
`;