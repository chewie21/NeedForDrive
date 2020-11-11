import React from "react";
import {createGlobalStyle} from "styled-components";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";
import Checkbox from "@material-ui/core/Checkbox";

export const GreenCheckbox = withStyles({
    root: {
        color: '#0EC261',
        '&$checked': {
            color: '#0EC261',
        },
    },
    checked: {},
})((props) =>
    <Checkbox color="default" {...props} />);
