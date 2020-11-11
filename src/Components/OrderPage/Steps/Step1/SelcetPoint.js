import {Text} from "../../../../Common/Text/Text";
import React, {useEffect, useState} from "react";
import {useGetRequest} from "../../../../Hooks/useGetRequest";
import {customStyles, MapContainer, PointRow} from "./Step1.styled";
import {YandexMap} from "../../../../Common/Map/Map";
import {setPoints} from "../../../../Functions/Async";
import Select from "react-select";

export const SelectPoint = ({changeCity, setOrder}) => {

    const points = useGetRequest(`http://api-factory.simbirsoft1.com/api/db/point`);

    const [pointsOfCity, setPointsOfCity] = useState(null);
    const [center, setCenter] = useState(null);
    const [thisChangeCity, setThisChangeCity] = useState(null);

    const [value, setValue] = useState(null);

    useEffect(() => {
        if(points.response && changeCity) {
            if(changeCity !== thisChangeCity)
                setPoints(points.response, changeCity, setPointsOfCity, setCenter)
                    .then(() => {
                        setThisChangeCity(changeCity);
                        setValue(null);
                    });
        }
        if (!changeCity) setPointsOfCity(null);
    });

    return (
        <React.Fragment>
            <PointRow>
                <Text weight='300'
                    size='14px'
                    color='#121212'
                    margin='0 16px 0 0'
                    width='84px'
                    textAlign='end'
                >
                    Пункт выдачи
                </Text>
                <Select
                    value={changeCity !== thisChangeCity ? null : value ? value : null}
                    styles={customStyles}
                    options={pointsOfCity}
                    placeholder='Выбрать...'
                    isClearable={true}
                    isLoading={points.loading || changeCity ? changeCity !== thisChangeCity : false}
                    isDisabled={points.error || points.loading
                                 || !changeCity || changeCity !== thisChangeCity || !pointsOfCity.length}
                    onChange={
                        (e) => {
                            if (e) {
                                setValue(e);
                                setCenter(e.coordinates);
                                setOrder({
                                    'Пункт выдачи': e.city + `, ` + e.value
                                });
                            }
                            else {
                                setValue(e);
                                setOrder(null);
                            }
                        }
                    }
                />
            </PointRow>
            {pointsOfCity && Boolean(pointsOfCity.length) &&
                <MapContainer>
                    <YandexMap
                        pointsOfCity={pointsOfCity}
                        center={center}
                        setCenter={setCenter}
                        setOrder={setOrder}
                        setValue={setValue}
                    />
                </MapContainer>
            }
        </React.Fragment>
    )
}