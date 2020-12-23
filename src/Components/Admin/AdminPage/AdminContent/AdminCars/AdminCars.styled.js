import styled, {createGlobalStyle} from "styled-components";

//override bootstrap styles
export const BootstrapStyle = createGlobalStyle`
	.form-control {
		height: 30px;
      	font-size: 12px;
      	font-weight: normal;
	}
	.custom-file {
		width: 100%;
	  	height: 30px;
	}
	.custom-file-input {
      	cursor: pointer;
	  	height: 30px;
	}
    .custom-file-label {
		font-size: 12px;
	  	font-weight: normal;
      	text-align: left;
      	color: #495057;
	  	margin: 0;
      	height: 30px;
	}
    .custom-file-label::after {
		height: 28px;
	}
	.custom-btn {
      	height: 30px;
      	font-size: 12px;
      	font-weight: normal;
      	color: #495057;
      	background-color: #e9ecef;
      	border-color: #ced4da;
	}
    .btn:hover, .btn:focus, .btn:active, .btn:checked {
      color: #495057;
      background-color: #e9ecef;
      border-color: #ced4da;
    }
	.form-check-label {
      color: #495057;
	  font-size: 14px;
	}
	.form-check-input {
	  cursor: pointer;
	}
`;

export const Container = styled.div`
	width: 100%;
`;

export const ContentContainer = styled.div`
	background: #FFFFFF;
	box-shadow: 0px 1px 0px rgba(90, 97, 105, 0.11), 
			  0px 2px 4px rgba(90, 97, 105, 0.12), 
			  0px 5px 5px rgba(90, 97, 105, 0.06), 
			  0px 3.5px 35px rgba(90, 97, 105, 0.1);
	border-radius: 9px;
`;