import styled, {createGlobalStyle} from "styled-components";

export const Container = styled.div`
	width: 100%;
  	position: relative;
`;

export const OrderContainer = styled.div`
	background: #FFFFFF;
  	border-radius: 9px;
  	width: 100%;
  
	box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11),
	0px 2px 4px rgba(90, 97, 105, 0.12),
	0px 5px 5px rgba(90, 97, 105, 0.06),
	0px 3.5px 35px rgba(90, 97, 105, 0.1);
`

export const ButtonsContainer = styled.div`
  	display: flex;
  	justify-content: space-between;
  	width: 100%;
  	padding: 15px 20px;
`;

export const ContentContainer = styled.div`
  	padding: 15px 20px;
	width: 100%;	
  	display: flex;
  	justify-content: space-between;
  
  	@media(max-width: 720px) {
	  	display: block;
	}
`;

export const CarInfoContainer = styled.div`
	width: 70%;
  	display: flex;
  	justify-content: center;

	@media(max-width: 720px) {
		width: 100%;
	}
`;

export const OrderInfoContainer = styled.div`
  	width: 30%;
  	display: flex;
  	flex-direction: column;
  	justify-content: space-around;

	@media(max-width: 720px) {
		width: 75%;
      	margin: auto;
	}
`;

export const InfoSection = styled.div`
	margin: 0 0 12px 0;
`;

export const OrderInfoImg = styled.img.attrs(props => ({
	crossOrigin: 'anonymous',
	referrerPolicy: 'origin'
}))`
    width: 100%;
    margin: 0 0 12px 0;
`;

export const customStyles = {
	control: (styles) => (
		{
			...styles,
			cursor: `pointer`,
			backgroundColor: "white",
			width: '100%',
			height: 30,
			minHeight: 30,
			fontWeight: 300,
			fontSize: 14,
			boxShadow: `none !important`,
			marginRight: 15,
			':hover': {
				borderColor: `#007BFF`
			},
			':focus': {
				borderColor: `#007BFF`
			}
		}
	),
	input: (styles) => (
		{
			...styles,
			fontWeight: 300,
			fontSize: 14,
			padding: 0,
			margin: 0,
		}
	),
	dropdownIndicator: (styles) => (
		{
			...styles,
			padding: 4
		}
	),
	indicatorSeparator: (styles) => (
		{
			display: `none`
		}
	),
}

//override react-datepicker styles
export const Style = createGlobalStyle`
  	.react-datepicker-wrapper {
      	display: block;
	  	margin: 0 0 6px 0;
	}
	
    .date-pick-active {
        cursor: pointer;
	  	padding: 3px;
	  	text-align: center;
        background-color: white;
      	border-color: hsl(0,0%,80%);
      	border-radius: 4px;
      	border-style: solid;
      	border-width: 1px;
        width: 100%;
        font-weight: 300;
        font-size: 14px;
        box-shadow: none !important;
        outline: 0 !important;
        
        &:hover {
            border-color: #007BFF;
        }, 
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
        background-color: #007BFF !important;
    }
    
    .react-datepicker__time-list-item--selected {
        background-color: #007BFF !important;
    }
	
	.selectError div:first-child {
	  border-color: red;
	}
`;