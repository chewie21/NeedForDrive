import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
    margin: 0 0 32px 0
`;

export const Row = styled.div`
    display: flex;
    margin: 0 0 16px 0;
    align-items: center;
`;

//override react-datepicker styles
export const Style = createGlobalStyle`
    .date-pick-active {
        padding-left: 8px;
        cursor: pointer;
        background-color: white;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #999999;
        width: 225px;
        font-weight: 300;
        font-size: 14px;
        box-shadow: none !important;
        outline: 0 !important;
        
        &:hover {
            border-color: #0EC261;
        }, 
    }
    
    .date-pick-disabled {
        padding-left: 8px;
        background-color: white;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #999999;
        width: 225px;
        font-weight: 300;
        font-size: 14px;
        box-shadow: none !important;
        outline: 0 !important;
    }
    
    .react-datepicker__close-icon::after {
        color: #121212 !important;
        background: white !important;
        font-size: 20px !important;
        padding: 0 !important;
        padding-bottom: 2px !important;
    }
    
    .react-datepicker__day--keyboard-selected, 
    .react-datepicker__month-text--keyboard-selected, 
    .react-datepicker__quarter-text--keyboard-selected, 
    .react-datepicker__year-text--keyboard-selected,
     .react-datepicker__day--selected, 
     .react-datepicker__day--in-selecting-range, 
     .react-datepicker__day--in-range, 
     .react-datepicker__month-text--selected, 
     .react-datepicker__month-text--in-selecting-range, 
     .react-datepicker__month-text--in-range, 
     .react-datepicker__quarter-text--selected, 
     .react-datepicker__quarter-text--in-selecting-range, 
     .react-datepicker__quarter-text--in-range, 
     .react-datepicker__year-text--selected, 
     .react-datepicker__year-text--in-selecting-range, 
     .react-datepicker__year-text--in-range 
     {
        background-color: #0EC261 !important;
    }
    
    .react-datepicker__time-list-item--selected {
        background-color: #0EC261 !important;
       
    }
`;