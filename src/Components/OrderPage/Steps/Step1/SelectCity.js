import React, {useEffect, useState} from "react";
import {Text} from "../../../../Common/Text/Text";
import {CityRow, customStyles} from "./Step1.styled";
import Select from "react-select";

export const SelectCity = ({
       setChangeCity,
       userLocation,
       setOrder, order,
       response, loading, error,
       removeUnlockSteps
    }) => {

    const [options, setOptions] = useState(null);
    const [defaultCity, setDefaultCity] = useState(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (response && !options) {
            let arr = [];
            response.data.forEach(item => {
                let obj = {
                    label: item.name,
                    value: item.id,
                    city: item.name
                }
                if(userLocation) {
                    if(item.name === userLocation.name) {
                        setDefaultCity(obj);
                        setChangeCity(obj);
                    }
                }
                arr.push(obj);
            });
            setOptions(arr);
        }
        if (order && !value) {
            let obj = {
                label: order.point.city,
                value: order.point.city,
                city: order.point.city
            }
            setValue(obj);
            setChangeCity(obj);
        }
    });

    return (
        <CityRow>
            <Text
                weight='300'
                size='14px'
                color='#121212'
                margin='0 16px 0 0'
                width='84px'
                textAlign='end'
            >
                Город
            </Text>
            <Select
                styles={customStyles}
                options={options}
                placeholder='Выбрать...'
                isClearable={true}
                isLoading={loading}
                isDisabled={error || loading}
                value={value ? value : defaultCity ? defaultCity : null}
                onChange={
                    (e) => {
                        setValue(e);
                        setChangeCity(e ? e : defaultCity ? defaultCity : null);
                        setOrder(null);
                        removeUnlockSteps(0);
                    }
                }
            />
        </CityRow>
    )
}

