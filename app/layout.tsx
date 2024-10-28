import { Suspense } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { mainFont } from '@/ui/fonts';
import LayoutHeader from '@/ui/layout/header';
import '@/assets/styles/globals.css';

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
					<Suspense>
						<LayoutHeader />
					</Suspense>
					<div className='max-w-7xl mx-auto pt-16 px-3 lg:px-8 xl:px-12'>
						{children}
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
