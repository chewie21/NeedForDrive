export const regExpRus = /[^А-Яа-я0-9 -.,]/g;
export const regExpEng = /[^A-Za-z0-9 -.,]/g;
export const regExpNumber = /^[АВЕКМНОРСТУХ]\d{3}(?<!000)[АВЕКМНОРСТУХ]{2}\d{2,3}$/ui;
export const regExpPrice = /[^0-9]/g;

export const rusLetValid = (event, setValue) => {
	const value = event.target.value.replace(regExpRus, ``);
	setValue(value);
}

export const engLetValid = (event, setValue) => {
	const value = event.target.value.replace(regExpEng, ``);
	setValue(value);
}

export const priceValid = (event, setValue) => {
	const value = event.target.value.replace(regExpPrice, ``);
	setValue(value);
}