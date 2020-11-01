import styled from "styled-components";
import ImgHover from "../../../img/map_point_hover.svg";

export const MainTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    height: 100%;
    padding: 32px 64px 32px 64px;
    
    box-sizing: border-box;
`;

export const MainContainer = styled.div`
    margin-bottom: 60px;
`;

export const MainTitleHeader = styled.header`
    margin: 16px 16px 0 16px;
`;

export const MainTitleMain = styled.main`
    padding: 0 16px 0 16px;
`;

export const MainTitleFooter = styled.footer`
    background: #151B1F;
    text-align: right;
    padding: 16px;
`;

export const FirstHeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;
export const SecondHeaderRow = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    &:hover p {
        transition: color .5s ease;
        color: #0EC261;
    }
    &:hover div {
        background: url(${ImgHover}) no-repeat center;
    }
`;