import {Text} from "../../../../../../Common/Text/Text";
import {Form} from "react-bootstrap";
import React from "react";

export const CarPrice = ({config, setConfig}) => {

	const validation = (e, priceName) => {
		let data = {...config.data};
		const regExp = /[^0-9]/g;
		const value = e.target.value.replace(regExp, ``);
		if(priceName === `priceMin`) {
			data.priceMin = +value;
		} else if (priceName === `priceMax`) {
			data.priceMax = +value;
		}
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
				Цена
			</Text>
			<div className='d-flex justify-content-around align-items-center'>
				<Text
					weight='500'
					size='12px'
					color='#3D5170'
					margin='0 10px 0 0'
				>
					Мин:
				</Text>
				<Form.Control
					type="text"
					isInvalid={!config.data.priceMin || config.data.priceMin >= config.data.priceMax}
					value={config.data.priceMin}
					onInput={(e) => validation(e, `priceMin`)}
				/>
				<Text
					weight='500'
					size='12px'
					color='#3D5170'
					margin='0 10px 0 10px'
				>
					Макс:
				</Text>
				<Form.Control
					type="text"
					isInvalid={!config.data.priceMax || config.data.priceMin >= config.data.priceMax}
					value={config.data.priceMax}
					onInput={(e) => validation(e, `priceMax`)}
				/>
			</div>
		</React.Fragment>
	)
}