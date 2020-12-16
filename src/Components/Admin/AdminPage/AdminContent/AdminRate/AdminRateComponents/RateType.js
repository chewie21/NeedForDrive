import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {FormControl} from "react-bootstrap";

export const RateType = ({config, setConfig}) => {

	const [value, setValue] = useState(
		Object.keys(config.data.rateTypeId).length === 0 ?
			'' :
			config.data.rateTypeId
	);

	const editRateType = (e) => {
		let data = {...config.data};
		let value = e.target.value;
		config.rateTypeId.forEach(item => {
			if(item.value === value) {
				data.rateTypeId = {
					id: item.value,
					name: item.label
				};
			}
		});
		setValue(data.rateTypeId);
		setConfig({...config, data: data});
	};

	return (
		<React.Fragment>
			<Text
				weight='500'
				size='15px'
				color='#3D5170'
				margin='0 0 6px 0'
			>
				Вид тарифа
			</Text>
			<FormControl
				as="select"
				isInvalid={!value}
				onChange={editRateType}
			>
				{!value &&
				<option
					selected={'selected'}
					value={''}
				>
					Выбирите значение
				</option>}
				{config.rateTypeId.map((item, index) => (
					<option
						selected={value ? item.value === value.id ? 'selected' : '' : ''}
						key={index}
						name={item.label}
						value={item.value}
					>{item.label}
					</option>
				))}
			</FormControl>
		</React.Fragment>
	)
}