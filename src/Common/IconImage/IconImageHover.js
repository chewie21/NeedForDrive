import styled from "styled-components";

export const IconImageHover = styled.div`
    cursor: pointer;
    height: ${props => props.height};
    width: ${props => props.width};
    margin: ${props => props.margin};
    background: url(${props => props.img}) no-repeat center;
    transition: background-image .5s ease;
    &:hover {
        background: url(${props => props.imgHover}) no-repeat center;
    }
`;