import React from "react";
import clsx from "clsx";

import {Checkbox} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {useButtonStyles, useLabelStyles} from "./Button.styles";

export const CustomCheck = (props) => {
    const styleProps = {borderRadius: `0%`}
    const classes = useButtonStyles(styleProps);
    return (
        <Checkbox
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    )
};

export const CustomLabelChek = (props) => {
    const styleProps = {display: `block`, width: `200`, color: `#999999`}
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
