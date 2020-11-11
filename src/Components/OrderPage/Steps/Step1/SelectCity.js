import React, {useEffect, useState} from "react";
import {Text} from "../../../../Common/Text/Text";
import {useGetRequest} from "../../../../Hooks/useGetRequest";
import {CityRow, customStyles} from "./Step1.styled";
import Select from "react-select";

export const SelectCity = ({setChangeCity, userLocation, setOrder}) => {

    const cities = useGetRequest(`http://api-factory.simbirsoft1.com/api/db/city`);

    const [options, setOptions] = useState(null);
    const [defaultCity, setDefaultCity] = useState(null);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (cities.response && !options) {
            let arr = [];
            cities.response.data.forEach((item, index) => {
                if(userLocation) {
                    if(item.name === userLocation.name) {
                        setDefaultCity(index);
                        setChangeCity(userLocation);
                    }
                }
                let obj = {
                    label: item.name,
                    value: item.id,
                    name: item.name
                }
                arr.push(obj);
            });
            setOptions(arr);
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
                isLoading={cities.loading}
                isDisabled={cities.error || cities.loading}
                value={value ? value : defaultCity ? options[defaultCity] : null}
                onChange={
                    (e) => {
                        setValue(e);
                        setChangeCity(e ? e : defaultCity ? options[defaultCity] : null);
                        if (!e) setOrder(null);
                    }
                }
            />
        </CityRow>
    )
}

