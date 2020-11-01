import {createGlobalStyle} from "styled-components";

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