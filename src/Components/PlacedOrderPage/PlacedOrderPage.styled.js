import styled from "styled-components";

export const PlacedOrderContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

export const MobileContainer = styled.div``;

export const PlacedOrderMenu = styled.section`
    position: fixed;
    background: #151B1F;
    width: 4%;
    height: 100%;
    
    @media(max-width: 720px) {
        width: 6%;
    }
`;

export const PlacedOrderContent = styled.div`
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

export const PlacedOrderContentContainer = styled.section`
    width: 96%;
    height: 100%;
    display: flex;
    flex-direction column;
`;

export const HeaderContainer = styled.div`
    padding: 32px;
`;

export const InfoContainer = styled.div`
    border-top: 1px solid #EEEEEE;
    border-bottom: 1px solid #EEEEEE;
    padding: 0;
`;

export const MainContainer = styled.div`
    display: flex;
    padding: 0;
    flex-grow 1;
`;

export const OrderInfoMainContainer = styled.div`
    width: 70%;
    height: 100%;
    padding: 32px;
`;

export const OrderInfoListContainer = styled.div`
    width: 30%;
    height: 100%;
    padding: 32px;
    border-left: 1px solid #EEEEEE;
`;

export const Info = styled.div`
    display: flex;
    padding: 8px 32px 8px 32px;
`;