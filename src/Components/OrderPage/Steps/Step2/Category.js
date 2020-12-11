import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";

import {CustomRadio} from "../../../../Common/Button/RadioButton";
import {CustomRadioLabel} from "../../../../Common/Button/RadioButtonLabel";

export const Category = ({setFilter, response}) => {

    const chooseCategory = (event) => {
        setFilter(event.target.value);
    }

    return (
        response && <RadioGroup row defaultValue='Все модели' onChange={chooseCategory}>
            <CustomRadioLabel
                value='Все модели'
                control={<CustomRadio/>}
                label='Все модели'
            />
            {response.data.map((item, index) =>
                <CustomRadioLabel
                    key={index}
                    value={item.name}
                    control={<CustomRadio/>}
                    label={item.name}
                />
            )}
        </RadioGroup>
    )
}