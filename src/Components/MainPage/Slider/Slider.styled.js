import styled, {createGlobalStyle} from "styled-components";

export const Style = createGlobalStyle`
    .carousel-inner {
        height: 100%;
    }
    
    .carousel-indicators {
        margin-bottom: 32px;
    }
    .carousel-indicators li:hover {
        background-color: #0EC261;
    }
    .carousel-indicators .active {
        background-color: #0EC261;
        opacity: .9;
    }
   
    .carousel-control-next, .carousel-control-prev {
        opacity: .5;
        transition: none;
        width: 10%;
    }
    .carousel-control-next:hover, .carousel-control-prev:hover {
        opacity: 0.2;
        background-color: #0EC261;
    } 
`;

export const Slide = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url(${props => props.img}) no-repeat center;
        background-size: cover;
    `;

export const SlideContent = styled.div`
        padding: 20%;
        @media(max-width: 1024px) {
            padding: 10%; 
            p:first-child {
                font-size: 30px !important;
            }
        }    
    `;