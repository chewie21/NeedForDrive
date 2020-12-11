import {getRequest} from "./RequestsToApiFactory";

export const setFilters = (filters, config, setConfig, auth, url) => {
	let str;
	for(const key in filters) {
		if(key === 'createdAt') {
			const date = new Date().getTime() - filters[key].value;
			str ?
				(str = str + '&' + filters[key].name + '[$gt]' + '=' + date) :
				(str = filters[key].name + '[$gt]'+ '=' + date);
		} else {
			str ?
				(str = str + '&' + filters[key].name + '=' + filters[key].value) :
				(str = filters[key].name + '=' + filters[key].value);
		}
	}
	let newUrl = `${url}?${str}`;
	getRequest(`${newUrl}&page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
		.then(res => {
			const obj = {
				...config,
				page: 1,
				orders: res.data,
				url: newUrl,
				count: Math.floor(res.count / 10)
			}
			setConfig(obj);
		});
}

export const removeFilters = (config, setConfig, auth, url) => {
	getRequest(`${url}?page=0&limit=10&sort[createdAt]=-1`, `Bearer ${auth.access_token}`)
		.then(res => {
			const obj = {
				...config,
				page: 1,
				orders: res.data,
				url: `${url}?`,
				count: Math.floor(res.count / 10)
			}
			setConfig(obj);
		});
}