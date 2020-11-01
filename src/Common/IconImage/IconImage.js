import styled from "styled-components";
import React from "react";

export const IconImage = (props) => {
    const Img = styled.div`
        cursor: pointer;
        height: ${props.height};
        width: ${props.width};
        margin: ${props.margin};
        background: url(${props.img}) no-repeat center;
        transition: background-image .5s ease;
        &:hover {
            background: url(${props.imgHover}) no-repeat center;
        }
    `;
    return <Img/>;
}
