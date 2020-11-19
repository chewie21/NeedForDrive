import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {Checkbox} from "@material-ui/core";

const useButtonStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        boxShadow: 'none',
        border: '1px solid #999999',
        width: 12,
        height: 12,
    },
    checkedIcon: {
        border: '3px solid #0EC261',
    },
});

export const CustomCheck = (props) => {
    const classes = useButtonStyles();
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

const useLabelStyles = makeStyles({
    root: {
        display: `block`,
        width: 200,
        marginBottom: 0
    },
    label: {
        fontWeight: 300,
        fontSize: 14,
        color: '#999999'
    },
    checkLabel: {
        fontWeight: 300,
        fontSize: 14,
        color: '#121212'
    }
});

export const CustomLabelChek = (props) => {
    const classes = useLabelStyles();
    return (
        <FormControlLabel
            classes={{
                root: classes.root,
                label: props.checked ? classes.checkLabel : classes.label,
            }}
            {...props}
            disabled={props.disabled}
        />
    )
};
