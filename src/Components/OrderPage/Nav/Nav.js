import React from "react";
import {Link} from "react-router-dom";
import {NavItem} from "./NavItem";
import {Style} from "./NavItem.styled";

export const Nav = ({navs, setActiveStep}) =>

    <React.Fragment>
        <Style/>
        {navs.map((item, index) => (
        !item.lock ?
        <Link to={item.to}
              key={index}
              onClick={() => setActiveStep(index)}
        >
            <NavItem
                {...item}
            />
        </Link> :
        <NavItem
            key={index}
            {...item}
        />
        ))}
    </React.Fragment>

