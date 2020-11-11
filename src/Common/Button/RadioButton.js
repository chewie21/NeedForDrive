import React from "react";
import Radio from "@material-ui/core/Radio";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export const GreenRadio = withStyles({
        root: {
            color: '#0EC261',
            '&$checked': {
                color: '#0EC261',
            },
        },
        checked: {},
    })((props) =>
        <Radio color="default" {...props} /> );