import React from "react";
import clsx from "clsx";

import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import {useButtonStyles, useLabelStyles} from "./Button.styles";

export const CustomRadio = (props) => {
    const styleProps = {borderRadius: `50%`}
    const classes = useButtonStyles(styleProps);
    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    )
};

export const CustomRadioLabel = (props) => {
    const styleProps = {color: `#121212`}
    const classes = useLabelStyles();
    return (
        <FormControlLabel
            classes={{
                root: classes.root,
                label: classes.label
            }}
            {...props}
        />
    )
};