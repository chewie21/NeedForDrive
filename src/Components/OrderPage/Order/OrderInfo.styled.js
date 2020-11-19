import styled from "styled-components";

export const Container = styled.div`
    padding: 32px;
`;

export const RowContainer = styled.div`
    margin-bottom: 32px;
`;

export const PriceContainer = styled.div`
    display: flex;
    margin-bottom: 32px;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: flex-end;
    position: relative;
`;

export const LeftSection = styled.div`
    height: 100%;
    text-align: left;
    max-width: 50%;
    background: white;
`;

export const MiddleSection = styled.div`
    position: absolute;
    border-bottom-style: dotted;
    border-bottom-width: 1px;
    border-bottom-color: #999999;
    width: 100%;
    z-index: -1;
`;

export const RightSection = styled.div`
    background: white;
    text-align: right;
    align-self: end;
    max-width: 40%;
`;