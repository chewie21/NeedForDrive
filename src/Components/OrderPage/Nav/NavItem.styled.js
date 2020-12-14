import styled, {createGlobalStyle} from "styled-components";

export const Style = createGlobalStyle`
    a, a:hover {
        text-decoration: none;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 0 30px 0 0;
    cursor: ${props => props.cursor}
`;