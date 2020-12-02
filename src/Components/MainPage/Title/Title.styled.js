import styled from "styled-components";

export const MainTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100%;
    padding: 32px 64px 32px 64px;
    
    @media(max-width: 1084px) {
        padding: 32px; 
    }
    @media(max-width: 720px) {
        padding: 32px 64px 32px 64px; 
    }
    
    box-sizing: border-box;
`;

export const MainTitleMobileContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const MainContainer = styled.div`
    margin-bottom: 60px;
`;

export const MainTitleHeader = styled.header`
    padding: 16px;
`;

export const MainTitleMain = styled.main`
    padding: 0 16px 0 16px;
`;

export const MainTitleFooter = styled.footer`
    background: #151B1F;
    text-align: right;
    padding: 16px;
`;
