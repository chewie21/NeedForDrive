import React, {useState} from "react";
import {Text} from "../../../../../../Common/Text/Text";
import {FormControl} from "react-bootstrap";
import {setSelectValueToConfig} from "../../../../../../Functions/SetConfigFunctions";

export const RateType = ({config, setConfig}) => {

	const [value, setValue] = useState(
		Object.keys(config.data.rateTypeId).length === 0 ?
			'' :
			config.data.rateTypeId.id
	);

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
				onChange={event => setSelectValueToConfig(event, config, setConfig, setValue, `rateTypeId`)}
				value={value}
			>
				{!value &&
				<option
					value={''}
				>
					Выбирите значение
				</option>}
				{config.rateTypeId.map((item, index) => (
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