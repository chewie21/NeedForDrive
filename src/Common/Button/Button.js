import styled from "styled-components";

export const Button = styled.button`
    color: #FFFFFF;
    line-height: 1;
    font-weight: 500;
    font-size: ${props => props.size};
    
    padding: ${props => props.padding};
    
    border: none;
    border-radius: 8px;
    transition: all 100ms;
    
    background: ${props => props.color};
    
    &:hover {
       background: ${props => props.hoverColor}; 
    }
    
    &:active {
        background: ${props => props.clickColor};
    }

    width: ${props => props.width};
    margin: ${props => props.margin};
`;
