import styled from "styled-components";

export const CategoryContainer = styled.div`
    margin: 0 0 32px 0; 
`;

export const CarListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 753px;
    height: 672px;
    overflow-Y: scroll;
`;

export const Card = styled.div`
    padding: 16px;
    cursor: pointer;
    width: 368px;
    height: 224px;
    border: ${props => props.border};
    
    &:hover {
       border: ${props => props.borderHover};  
    }
`;

export const CardImg = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
    float: ${props => props.float};
`;