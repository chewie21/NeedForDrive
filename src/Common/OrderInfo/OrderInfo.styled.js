import styled from "styled-components";

export const ListRowsContainer = styled.div`
    margin-bottom: 32px;
`;
export const PriceContainer = styled.div`
    display: flex;
    margin-bottom: 32px;
`;

export const ListRow = styled.div`
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
    height: 100%;
    align-self: flex-end;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const SuccessContainer = styled.div`
    margin: 0 0 32px 0;
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media(max-width: 960px) {
        display: block;
    }
`;

export const ContentImg = styled.img.attrs(props => ({
    crossOrigin: 'anonymous',
    referrerPolicy: 'origin'
}))`
    width: 40%;
    
    @media(max-width: 1100px) {
        width: 50%;
    }
    @media(max-width: 960px) {
        width: 100%;
    }
`;
export const CarNumber = styled.p`
    width: fit-content;
    border: 1px solid #999999;
    border-radius: 4px;
    padding: 4px 8px 4px 8px;
    font-weight: normal;
    font-size: 14px;
    color: #121212;
    margin: 0 0 8px 0;
`;
export const MainRow = styled.div`
    display: flex;
    margin: 0 0 8px 0;
`;

export const ButtonContainer = styled.div`
    display: none;
    width: 100%;
    
    @media(max-width: 720px) {
        display: block;
    }
`;