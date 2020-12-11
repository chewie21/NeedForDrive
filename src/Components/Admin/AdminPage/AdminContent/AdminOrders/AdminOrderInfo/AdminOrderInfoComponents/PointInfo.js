import {Text} from "../../../../../../../Common/Text/Text";
import Select from "react-select";
import {customStyles} from "../AdminOrderInfo.styled";
import React from "react";

export const PointInfo = ({config, setConfig}) => {

	const editOrder = (e) => {
		let obj = {...config.order};
		obj.pointId = e.item;
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
				Пунк выдачи
			</Text>
			<Select
				className={config.order.pointId ? '' : 'selectError'}
				styles={customStyles}
				value={config.order.pointId ?
					{ label: config.order.pointId.address, value: config.order.pointId.id }
					:
					{ label: 'Выбрать', value: null }
				}
				options={config.points.filter(point => point.item.cityId.name === config.order.cityId.name)}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}