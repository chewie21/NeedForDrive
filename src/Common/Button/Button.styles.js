import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";

export const useButtonStyles = makeStyles({
	root: props => ({
		cursor: props.cursor,
		'&:hover': {
			backgroundColor: 'transparent',
		},
	}),
	icon: props => ({
		boxShadow: 'none',
		borderRadius: props.borderRadius,
		border: '1px solid #999999',
		width: 12,
		height: 12,
	}),
	checkedIcon: props => ({
		borderRadius: props.borderRadius,
		border: props.border,
	}),
});

export const useLabelStyles = makeStyles({
	root: props => ({
		cursor: props.cursor,
		display: props.display,
		width: props.width,
		margin: 0,
		lineHeight: 1,
		fontWeight: 300,
		fontSize: props.size,
	}),
	label: props =>  ({
		cursor: props.cursor,
		fontWeight: 300,
		fontSize: props.size,
		color: props.color
	}),
	checkLabel: props => ({
		fontWeight: 300,
		fontSize: props.size,
		color: '#121212'
	})
});

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: ${props => props.padding};
`;

//15px 20px