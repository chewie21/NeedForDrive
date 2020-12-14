import {Text} from "../../../../../../Common/Text/Text";
import Select from "react-select";
import {customStyles} from "../AdminOrderInfo/AdminOrderInfo.styled";
import React from "react";

export const StatusInfo = ({config, setConfig}) => {

	const editOrder = (e) => {
		let data = {...config.data};
		data.orderStatusId = e.item;
		setConfig({...config, data: data});
	}

	return (
		<React.Fragment>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Статус
			</Text>
			<Select
				styles={customStyles}
				defaultValue={{label: config.data.orderStatusId.name, value: config.data.orderStatusId.id}}
				options={config.orderStatus}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}