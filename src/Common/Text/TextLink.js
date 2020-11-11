import styled from "styled-components";
import React from "react";

export const TextLink = (props) => {
    const Text = styled.a`
        cursor: pointer;
        text-decoration: none !important;
        line-height: 1;
        font-weight: ${props.weight};
        margin: ${props.margin};
        font-size: ${props.size};
        color: ${props.color};
        
        transition: color .5s ease;
        &:hover {
            color: ${props.colorHover};
            text-decoration: none
        }
    `;
    return <Text>{props.text}</Text>
};
