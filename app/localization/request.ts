import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async () => {
	const locale = 'ru';

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default,
	};
});
