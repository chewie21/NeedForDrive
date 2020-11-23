import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    z-index: 9999;
    position: absolute;
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
    width: 400px;
    height: 150px;
    padding: 24px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;