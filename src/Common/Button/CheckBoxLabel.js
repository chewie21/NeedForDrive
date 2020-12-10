import {useLabelStyles} from "./Button.styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";

export const CustomCheckLabel = (props) => {

	const styleProps = {
		display: `block !important`,
		width: 'fit-content',
		color: `#999999`,
		cursor: props.cursor ? props.cursor : 'pointer',
		size: props.size ? props.size : 14
	}

	const classes = useLabelStyles(styleProps);

	return (
		<FormControlLabel
			classes={{
				root: classes.root,
				label: props.checked ? classes.checkLabel : classes.label,
			}}
			{...props}
		/>
	)
};