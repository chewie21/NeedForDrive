import {Text} from "../../../../../../Common/Text/Text";
import Select from "react-select";
import {customStyles} from "../AdminOrderInfo/AdminOrderInfo.styled";
import React from "react";

export const PointInfo = ({config, setConfig}) => {

	const editOrder = (e) => {
		let data = {...config.data};
		data.pointId = e.item;
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
				Пунк выдачи
			</Text>
			<Select
				className={config.data.pointId ? '' : 'selectError'}
				styles={customStyles}
				value={config.data.pointId ?
					{ label: config.data.pointId.address, value: config.data.pointId.id }
					:
					{ label: 'Выбрать', value: null }
				}
				options={config.points.filter(point => point.item.cityId.name === config.data.cityId.name)}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}