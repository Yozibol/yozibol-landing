'use client';

import { createTranslator } from 'use-intl';

const getNavigatorLanguage = () => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem('lang') || 'uz';
	}
	return 'uz';
};

export default createTranslator({
	locale: getNavigatorLanguage(),
	messages: require(`./messages/${getNavigatorLanguage()}.json`),
});
