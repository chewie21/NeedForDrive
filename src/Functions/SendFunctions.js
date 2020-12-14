import {deleteRequest, postRequest, putRequest} from "./RequestsToApiFactory";
import {formatFindEntityErrors} from "./Format";

export const closeModal = (config, setConfig) => {
	let obj = {...config};
	delete obj[`modalText`];
	delete obj[`modalColor`];
	setConfig(obj);
};

export const loadingModal = (config, setConfig) => setConfig({...config, modalColor: `#007BFF`, modalText: `Идет загрузка...`});

export const sendEditEntity = (url, config, setConfig, auth) => {
	if(formatFindEntityErrors(config.data)) {
		loadingModal(config, setConfig);
		putRequest(url, config.data.id, {...config.data}, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({...config, data: res.data, modalColor: `#0EC261`, modalText: `Успех! Изменения сохраннены!`});
				setTimeout(() => closeModal(config, setConfig), 2000);
			}, error => {
				setConfig({...config, modalColor: `#CB3656`, modalText: `Что-то пошло не так...`});
				setTimeout(() => closeModal(config, setConfig), 5000);
			});
	} else {
		setConfig({...config, modalColor: `#CB3656`, modalText: `Обнаруженны неверно заполненные поля!`});
		setTimeout(() => closeModal(config, setConfig), 5000);
	}
};

export const sendNewEntity = (url, config, setConfig, auth, redirect) => {
	if(formatFindEntityErrors(config.data)) {
		loadingModal(config, setConfig);
		postRequest(url, config.data, `Bearer ${auth.access_token}`)
			.then(res => {
				setConfig({...config, modalText: `Успех! Запись добавленна!`, modalColor: `#0EC261`});
				setTimeout(() => redirect(), 2000);
			}, error => {
				setConfig({...config, modalColor: `#CB3656`, modalText: `Упс... Что-то пошло не так...`});
				setTimeout(() => closeModal(config, setConfig), 5000)
			});
	} else {
		setConfig({...config, modalColor: `#CB3656`, modalText: `Обнаруженны неверно заполненные поля!`});
		setTimeout(() => closeModal(config, setConfig), 5000);
	}
};

export const deleteEntity = (url, auth, config, setConfig, redirect) => {
	loadingModal(config, setConfig);
	deleteRequest(url, config.data.id, `Bearer ${auth.access_token}`)
		.then(res => {
			setConfig({...config, modalText: `Успех! Запись удаленна!`, modalColor: `#0EC261`});
			setTimeout(() => redirect(), 2000);
		}, error => {
			setConfig({...config, modalColor: `#CB3656`, modal: `Упс... Что-то пошло не так...`});
			setTimeout(() => closeModal(config, setConfig), 5000);
		});
};