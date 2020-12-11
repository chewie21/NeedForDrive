import {Text} from "../../../../../../../Common/Text/Text";
import DatePicker from "react-datepicker";
import React from "react";

export const DateInfo = ({config, setConfig}) => {

	const editOrder = (date) => {
		let obj = {...config.order};
		obj.dateTo = date.getTime();
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
				Время аренды
			</Text>
			<DatePicker
				selected={new Date(config.order.dateFrom)}
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={5}
				timeCaption="time"
				dateFormat="dd/MM/yyyy HH:mm"
				className='date-pick-active'
				minDate={new Date()}
				maxDate={new Date(config.order.dateTo)}
				onChange={editOrder}
			/>
			<DatePicker
				className='date-pick-active'
				selected={new Date(config.order.dateTo)}
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={5}
				timeCaption="time"
				dateFormat="dd/MM/yyyy HH:mm"
				minDate={new Date(config.order.dateFrom)}
				onChange={editOrder}
			/>
		</React.Fragment>
	)
}