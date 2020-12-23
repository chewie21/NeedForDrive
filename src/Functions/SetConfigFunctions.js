export const setValueToConfig = (event, config, setConfig, setValue, param) => {
	let data = {...config.data};
	const value = event.target.value;
	if(value) {
		data[param] = value;
		setConfig({...config, data});
	} else {
		setValue(data[param]);
	}
}

export const setSelectValueToConfig = (event, config, setConfig, setValue, param) => {
	let data = {...config.data};
	let value = event.target.value;
	config[param].forEach(item => {
		if(item.value === value) {
			data[param] = {
				id: item.value,
				name: item.label
			};
		}
	});
	setValue(data[param].id);
	setConfig({...config, data});
}