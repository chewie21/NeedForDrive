import styled from "styled-components";
import React from "react";

export const Button = (props) => {

    const Btn = styled.button`
        color: #FFFFFF;
        line-height: 1;
        font-weight: 500;
        font-size: ${props.size};
        
        padding: 15px 20% 15px 20%;
        
        border: none;
        border-radius: 8px;
        
        background: ${props.color};
        
        &:hover {
           background: ${props.hoverColor}; 
        }
        
        &:active {
            background: ${props.clickColor};
        }
    `;

    return <Btn>{props.text}</Btn>
}
