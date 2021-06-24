export const getBaseUrl = () => {
	if (window) {
		return window.location.origin;
	}
};

export const setUrl = (param, query) => {
	if (window) {
		if (query) {
			return `${window.location.origin}/${param}?${query}`;
		}
		return `${window.location.origin}/${param}`;
	}
};
