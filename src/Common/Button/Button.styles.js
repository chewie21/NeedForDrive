import {makeStyles} from "@material-ui/core/styles";

export const useButtonStyles = makeStyles({
	root: {
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	icon: props => ({
		boxShadow: 'none',
		borderRadius: props.borderRadius,
		border: '1px solid #999999',
		width: 12,
		height: 12,
	}),
	checkedIcon: props => ({
		borderRadius: props.borderRadius,
		border: '3px solid #0EC261',
	}),
});

export const useLabelStyles = makeStyles({
	root: props => ({
		display: props.display,
		width: props.width,
		marginBottom: 0
	}),
	label: props =>  ({
		fontWeight: 300,
		fontSize: 14,
		color: props.color
	}),
	checkLabel: {
		fontWeight: 300,
		fontSize: 14,
		color: '#121212'
	}
});