import {deleteRequest, postRequest, putRequest} from "./RequestsToApiFactory";
import {formatFindErrors} from "./Format";

export const sendEditEntity = (url, config, setConfig, auth, successMessage, errorMessage) => {
	putRequest(url, config.data.id, {...config.data}, `Bearer ${auth.access_token}`)
		.then(res => {
			setConfig({...config, data: res.data, modalType: true, modalText: successMessage});
			setTimeout(() => {
				let obj = {...config};
				delete obj[`modalText`];
				delete obj[`modalType`];
				setConfig({...obj});
			}, 3000)
		}, error => {
			setConfig({...config, modalType: false, modalText: errorMessage});
			setTimeout(() => {
				let obj = {...config};
				delete obj[`modalText`];
				delete obj[`modalType`];
				setConfig({...obj});
			}, 5000)
		});
}

export const sendNewEntity = (url, config, setConfig, auth, successFunc, successMessage, errorMessage) => {
	postRequest(url, config.data, `Bearer ${auth.access_token}`)
		.then(res => {
			let obj = {...config};
			obj.modalType = true;
			obj.modalText = successMessage;
			setConfig(obj);
			setTimeout(() => {
				successFunc();
			}, 3000)
		}, error => {
			let obj = {...config};
			obj.modalType = false;
			obj.modalText = errorMessage;
			setConfig(obj);
			setTimeout(() => {
				let obj = {...config};
				delete obj[`modalText`];
				delete obj[`modalType`];
				setConfig({...obj});
			}, 5000)
		})
}

export const deleteEntity = (url, auth, config, setConfig, redirect, message) => {
	deleteRequest(url, config.data.id, `Bearer ${auth.access_token}`)
		.then(res => {
			redirect();
		}, error => {
			setConfig({...config, modalType: false, modal: message});
			setTimeout(() => {
				let obj = {...config};
				delete obj[`modal`];
				delete obj[`modalType`];
				setConfig({...obj});
			}, 5000)
		});
}

export const sendCar = (config, setConfig, auth, sendFunction) => {
	let obj = {...config};
	if(formatFindErrors(obj.data)) {
		sendFunction();
	} else {
		obj.modalType = false;
		obj.modalText = `Обнаруженны неверно заполненные поля!`;
		setTimeout(() => {
			delete obj[`modalText`];
			delete obj[`modalType`];
			setConfig({...obj});
		}, 5000);
		setConfig(obj);
	}
}