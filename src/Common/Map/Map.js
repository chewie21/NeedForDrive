import {Map, Placemark, YMaps} from "react-yandex-maps";
import React from "react";
import {Text} from "../Text/Text";

export const YandexMap = ({pointsOfCity, center, setCenter, setOrder, setValue}) =>

    <React.Fragment>
        <Text
            weight='300'
            size='14px'
            color='#121212'
            margin='0 0 16px 0'
        >
            Выбрать на карте:
        </Text>
        <YMaps>
            <Map
                modules={['geocode']}
                state={{center: center, zoom: 12}}
                width='100%'
                height='350px'>
                {pointsOfCity.map((item, index) =>
                    <Placemark
                        onClick={
                            () => {
                                setCenter(item.coordinates);
                                setValue({label: item.label, value: item.value});
                                setOrder({'Пункт выдачи': item.city + `, ` + item.label})
                            }
                        }
                        key={index}
                        geometry={item.coordinates}
                        options={{preset: 'islands#circleIcon', iconColor: '#0EC261'}}
                    />
                )}
            </Map>
        </YMaps>
    </React.Fragment>
