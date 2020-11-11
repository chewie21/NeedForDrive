import styled from "styled-components";

export const Container = styled.div`
    padding: 32px;
`;

export const RowContainer = styled.div`
    margin-bottom: 32px;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: flex-end;
`;

export const LeftSection = styled.div`
    height: 100%;
    margin-right: 5px;
    text-align: left;
    min-width: 100px;
`;

export const MiddleSection = styled.div`
    border-bottom-style: dotted;
    border-bottom-width: 1px;
    border-bottom-color: #999999;
    width: 100%;
    z-index: -1;
`;

export const RightSection = styled.div`
    margin-left: 5px;
    text-align: right;
    align-self: end;
    min-width: 100px;
`;