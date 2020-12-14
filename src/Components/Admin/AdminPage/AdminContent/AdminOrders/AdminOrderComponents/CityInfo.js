import {Text} from "../../../../../../Common/Text/Text";
import Select from "react-select";
import {customStyles} from "../AdminOrderInfo/AdminOrderInfo.styled";
import React from "react";

export const CityInfo = ({config, setConfig}) => {

	const editOrder = (e) => {
		if(e.label !== config.data.cityId.name) {
			let data = {...config.data};
			data.cityId = e.item;
			data.pointId = null;
			setConfig({...config, data: data})
		}
	}

	return (
		<React.Fragment>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Город
			</Text>
			<Select
				styles={customStyles}
				defaultValue={{label: config.data.cityId.name, value: config.data.cityId.id}}
				options={config.cities}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}