import {Text} from "../../../../../../Common/Text/Text";
import React, {useState} from "react";
import {FormControl} from "react-bootstrap";
import {setSelectValueToConfig} from "../../../../../../Functions/SetConfigFunctions";

export const CarCategory = ({config, setConfig}) => {

	const [value, setValue] = useState(
		Object.keys(config.data.categoryId).length === 0 ?
			'' :
			config.data.categoryId.id
	);

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
				onChange={event => setSelectValueToConfig(event, config, setConfig, setValue, `categoryId`)}
				value={value}
			>
				{!value &&
					<option
						value={''}
					>
						Выбирите значение
					</option>
				}
				{config.categoryId.map((item, index) => (
					<option
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