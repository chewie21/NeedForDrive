import React from "react";
import clsx from "clsx";

import {Checkbox} from "@material-ui/core";

import {useButtonStyles} from "./Button.styles";

export const CustomCheck = (props) => {

    const styleProps = {
        borderRadius: `0%`,
        border: props.border ? props.border : '3px solid #0EC261',
        cursor: props.cursor ? props.cursor : 'pointer'}

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