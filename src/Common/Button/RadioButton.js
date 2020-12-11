import React from "react";
import clsx from "clsx";

import Radio from "@material-ui/core/Radio";

import {useButtonStyles} from "./Button.styles";

export const CustomRadio = (props) => {
    const styleProps = {
        borderRadius: `50%`,
        border: props.border ? props.border : '3px solid #0EC261',
        cursor: props.cursor ? props.cursor : 'pointer'
    }
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