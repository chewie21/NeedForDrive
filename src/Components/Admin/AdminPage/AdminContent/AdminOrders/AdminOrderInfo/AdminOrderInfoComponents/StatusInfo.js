import {Text} from "../../../../../../../Common/Text/Text";
import Select from "react-select";
import {customStyles} from "../AdminOrderInfo.styled";
import React from "react";

export const StatusInfo = ({config, setConfig}) => {

	const editOrder = (e) => {
		let obj = {...config.order};
		obj.orderStatusId = e.item;
		setConfig({...config, order: obj});
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
				defaultValue={{label: config.order.orderStatusId.name, value: config.order.orderStatusId.id}}
				options={config.orderStatus}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}