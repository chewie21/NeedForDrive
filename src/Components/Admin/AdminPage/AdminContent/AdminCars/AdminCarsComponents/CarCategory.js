import {Text} from "../../../../../../Common/Text/Text";
import React, {useState} from "react";
import {FormControl} from "react-bootstrap";

export const CarCategory = ({config, setConfig}) => {

	const [value, setValue] = useState(
		Object.keys(config.data.categoryId).length === 0 ?
			null :
			config.data.categoryId
	)

	const editCar = (e) => {
		let data = {...config.data};
		let value = e.target.value
		config.categories.forEach(item => {
			if(item.value === value) {
				data.categoryId = {
					id: item.value,
					name: item.label
				};
			}
		});
		setValue(data.categoryId);
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
				Категория
			</Text>
			<FormControl
				as="select"
				isInvalid={!value}
				onChange={editCar}
			>
				{!value &&
				<option
					selected={'selected'}
					value={null}
				>
					Выбирите значение
				</option>}
				{config.categories.map((item, index) => (
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