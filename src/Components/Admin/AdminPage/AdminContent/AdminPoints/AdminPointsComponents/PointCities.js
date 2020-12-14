import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {FormControl} from "react-bootstrap";

export const PointCities = ({config, setConfig}) => {

	const [value, setValue] = useState(
		Object.keys(config.data.cityId).length === 0 ?
			'' :
			config.data.cityId
	);

	const editPoint = (e) => {
		let data = {...config.data};
		let value = e.target.value;
		config.cities.forEach(item => {
			if(item.value === value) {
				data.cityId = {
					id: item.value,
					name: item.label
				};
			}
		});
		setValue(data.cityId);
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
				Город
			</Text>
			<FormControl
				as="select"
				isInvalid={!value}
				onChange={editPoint}
			>
				{!value &&
				<option
					selected={'selected'}
					value={''}
				>
					Выбирите значение
				</option>}
				{config.cities.map((item, index) => (
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