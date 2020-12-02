import styled from "styled-components";

export const AdminButton = styled.button`
    color: #FFFFFF;
    line-height: 1;
    font-weight: normal;
    font-size: ${props => props.size};
    
    padding: ${props => props.padding};
    
    border: none;
    border-radius: 4px;
    transition: all 100ms;
    
    background: ${props => props.color};

    width: ${props => props.width};
    margin: ${props => props.margin};
`;