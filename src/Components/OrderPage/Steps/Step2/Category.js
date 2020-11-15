import React from "react";
import {GreenLabel, GreenRadio} from "../../../../Common/Button/RadioButton";
import RadioGroup from "@material-ui/core/RadioGroup";

export const Category = ({setFilter, response}) => {

    const chooseCategory = (event) => {
        setFilter(event.target.value);
    }

    return (
        response && <RadioGroup row defaultValue='Все модели' onChange={chooseCategory}>
            <GreenLabel
                value='Все модели'
                control={<GreenRadio/>}
                label='Все модели'
            />
            {response.data.map((item, index) =>
                <GreenLabel
                    key={index}
                    value={item.name}
                    control={<GreenRadio/>}
                    label={item.name}
                />
            )}
        </RadioGroup>
    )
}