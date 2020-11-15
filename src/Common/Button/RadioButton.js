import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import clsx from "clsx";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useButtonStyles = makeStyles({
    root: {
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    icon: {
        boxShadow: 'none',
        borderRadius: '50%',
        border: '1px solid #999999',
        width: 12,
        height: 12,
    },
    checkedIcon: {
        borderRadius: '50%',
        border: '3px solid #0EC261',
    },
});

const useLabelStyles = makeStyles({
    root: {
        fontWeight: 300,
        fontSize: 14,
        marginBottom: 0
    },
    label: {
        fontWeight: 300,
        fontSize: 14
    },
});

export const GreenRadio = (props) => {
    const classes = useButtonStyles();
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

export const GreenLabel = (props) => {
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