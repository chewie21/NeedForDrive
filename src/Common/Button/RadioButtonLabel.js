import {useLabelStyles} from "./Button.styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";

export const CustomRadioLabel = (props) => {

	const styleProps = {
		color: `#121212`,
		cursor: props.cursor ? props.cursor : 'pointer',
		width: 'fit-content',
		size: props.size ? props.size : '14px'
	}

	const classes = useLabelStyles(styleProps);

	return (
		<FormControlLabel
			classes={{
				root: classes.root,
				label: classes.label,
			}}
			{...props}
		/>
	)
};