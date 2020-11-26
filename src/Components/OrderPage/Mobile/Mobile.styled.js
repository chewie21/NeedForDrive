import styled from "styled-components";

export const Left = styled.div`
     position: absolute;
     left: 0;
     margin-left: 16px;
`;

export const Center = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

export const Right = styled.div`
    position: absolute;
    right: 0;
    margin-right: 16px;
`;

export const FixedHeaderMobile = styled.header`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    padding: 16px;
    width: 100%;
    background: white;
`;

export const FixedFooterMobile = styled.footer`
    z-index: 100;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    padding: 16px;
    width: 100%;
    background: #111518;
`;

export const MainMobile = styled.main`
    padding: 64px 16px 64px 16px;
`;