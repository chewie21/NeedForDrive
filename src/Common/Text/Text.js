import styled from "styled-components";
import React from "react";

export const Text = (props) => {
    const Text = styled.p`
        line-height: 1;
        font-weight: ${props.weight};
        margin: ${props.margin};
        font-size: ${props.size};
        color: ${props.color};
    `;
    return <Text>{props.text}</Text>
};
