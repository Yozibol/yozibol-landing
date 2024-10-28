import createMiddleware from 'next-intl/middleware';
import { routing } from '@/localization/routing';

export default createMiddleware(routing);

export const config = {
	matcher: ['/', '/(uz|ru|en)/:path*'],
};
