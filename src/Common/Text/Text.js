import styled from "styled-components";

export const Text = styled.p`
    line-height: 1;
    font-weight: ${props => props.weight};
    margin: ${props => props.margin};
    font-size: ${props => props.size};
    color: ${props => props.color};
`;
