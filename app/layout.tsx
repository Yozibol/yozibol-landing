import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { mainFont } from '@/app/ui/fonts';

import './globals.css';

export const metadata: Metadata = {
	title: 'Yozibol',
	description: '',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();

	const messages = await getMessages();
	return (
		<html lang={locale}>
			<body className={mainFont.className}>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
