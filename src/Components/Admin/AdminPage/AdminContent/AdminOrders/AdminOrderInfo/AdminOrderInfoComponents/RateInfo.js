import {Text} from "../../../../../../../Common/Text/Text";
import RadioGroup from "@material-ui/core/RadioGroup";
import {CustomRadioLabel} from "../../../../../../../Common/Button/RadioButtonLabel";
import {CustomRadio} from "../../../../../../../Common/Button/RadioButton";
import React from "react";

export const RateInfo = ({config, setConfig}) => {

	const editOrder = (item) => {
		let obj = {...config.order};
		obj.rateId = item;
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
				Тариф
			</Text>
			<RadioGroup value={config.order.rateId.price}>
				{config.rate.map((item, index) =>
					<CustomRadioLabel
						onChange={() => editOrder(item)}
						key={index}
						value={item.price}
						control={<CustomRadio/>}
						label={`${item.rateTypeId.name}, ${item.price} ₽/${item.rateTypeId.unit}`}
					/>
				)}
			</RadioGroup>
		</React.Fragment>
	)
}