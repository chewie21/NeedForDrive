import {Text} from "../../../../../../../Common/Text/Text";
import {CustomCheckLabel} from "../../../../../../../Common/Button/CheckBoxLabel";
import {CustomCheck} from "../../../../../../../Common/Button/CheckBox";
import React from "react";

export const ServiceInfo = ({config, setConfig}) => {

	const data = [
		{name: `isFullTank`, value: `500`, label: `Полный бак`},
		{name: `isNeedChildChair`, value: `200`, label: `Детское кресло`},
		{name: `isRightWheel`, value: `1600`, label: `Правый руль`},
	];

	const editOrder = (e, item) => {
		let obj = {...config.order};
		obj[item.name] = e.target.checked;
		if(e.target.checked) {
			obj.price = +obj.price + +e.target.value
		} else {
			obj.price = +obj.price - +e.target.value
		}
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
				Дополнительные услуги
			</Text>
			{data.map((item, index) => (
				<CustomCheckLabel
					key={index}
					onChange={(e) => editOrder(e, item)}
					checked={config.order[item.name]}
					name={item.name}
					value={item.value}
					control={<CustomCheck key={index}/> }
					label={`${item.label}, ${item.value}р`}
				/>
			))}
		</React.Fragment>
	)
}