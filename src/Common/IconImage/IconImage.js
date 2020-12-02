import styled from "styled-components";

export const IconImage = styled.div`
    cursor: pointer;

    height: ${props => props.height};
    width: ${props => props.width};
    margin: ${props => props.margin};
    background: url(${props => props.img}) no-repeat center;
    float: ${props => props.float};
`;