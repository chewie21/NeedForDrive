import {Text} from "../../../../../../../Common/Text/Text";
import Select from "react-select";
import {customStyles} from "../AdminOrderInfo.styled";
import React from "react";

export const CityInfo = ({config, setConfig}) => {

	const editOrder = (e) => {
		if(e.label !== config.order.cityId.name) {
			let obj = {...config.order};
			obj.cityId = e.item;
			obj.pointId = null;
			setConfig({...config, order: obj})
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
				defaultValue={{label: config.order.cityId.name, value: config.order.cityId.id}}
				options={config.cities}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}