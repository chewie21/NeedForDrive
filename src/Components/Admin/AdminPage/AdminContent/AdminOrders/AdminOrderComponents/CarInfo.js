import {customStyles, OrderInfoImg} from "../AdminOrderInfo/AdminOrderInfo.styled";
import {formatImgPath} from "../../../../../../Functions/Format";
import {mainUrlPages} from "../../../../../../Environments/ApiFactoryUrls";
import {Text} from "../../../../../../Common/Text/Text";
import Select from "react-select";
import React from "react";

export const CarInfo = ({config, setConfig}) => {

	const editOrder = (e) => {
		let data = {...config.data};
		data.carId = e.item;
		setConfig({...config, data: data});
	}

	return (
		<React.Fragment>
			<OrderInfoImg src={formatImgPath(config.data.carId, mainUrlPages)}/>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Автомобиль
			</Text>
			<Select
				styles={customStyles}
				defaultValue={{label: config.data.carId.name, value: config.data.carId.id}}
				options={config.cars}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}