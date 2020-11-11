import styled from "styled-components";
import React from "react";

export const IconImage = (props) => {
    const Img = styled.div`
        height: ${props.height};
        width: ${props.width};
        margin: ${props.margin};
        background: url(${props.img}) no-repeat center;
    `;
    return <Img/>;
}