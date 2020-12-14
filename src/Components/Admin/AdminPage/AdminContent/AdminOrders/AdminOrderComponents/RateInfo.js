import {Text} from "../../../../../../Common/Text/Text";
import RadioGroup from "@material-ui/core/RadioGroup";
import {CustomRadioLabel} from "../../../../../../Common/Button/RadioButtonLabel";
import {CustomRadio} from "../../../../../../Common/Button/RadioButton";
import React from "react";

export const RateInfo = ({config, setConfig}) => {

	const editOrder = (item) => {
		let data = {...config.data};
		data.rateId = item;
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
				Тариф
			</Text>
			<RadioGroup value={config.data.rateId.price}>
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