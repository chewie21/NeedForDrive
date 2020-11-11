import styled from "styled-components";

export const TextLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    line-height: 1;
    font-weight: ${props => props.weight};
    margin: ${props => props.margin};
    font-size: ${props => props.size};
    color: ${props => props.color};
    
    transition: color .5s ease;
    &:hover {
        color: ${props => props.colorHover};
        text-decoration: none
    }
`;


