import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

import { AuthorListType } from '@/types';

import Authors from './author-list';

import Temur from '@/assets/images/32139112_67373631_avatar.jpeg';
import Shaxzoda from '@/assets/images/37979595_95436269_avatar.jpeg';
import Kunduziy from '@/assets/images/41135978_5372451_avatar.jpeg';
import AkbarYusupov from '@/assets/images/63167179_88033440_avatar.jpeg';
import Konsta from '@/assets/images/94183624_22106680_avatar.jpeg';
import Chumolilar from '@/assets/images/IMG_0225.jpeg';
import TrollUz from '@/assets/images/IMG_1699.jpeg';

type HomeSideNavProps = {
	visible?: boolean;
	className?: string;
};

export default function HomeSideNav(props: HomeSideNavProps) {
	const t = useTranslations();
	const authors = [
		{
			id: '1',
			author: 'TROLL.UZ',
			image: TrollUz,
		},
		{
			id: '2',
			author: 'Chumolilar',
			image: Chumolilar,
		},
		{
			id: '3',
			author: 'Konsta',
			image: Konsta,
		},
		{
			id: '4',
			author: 'Alixonov Temur',
			image: Temur,
		},
		{
			id: '5',
			author: 'Shahzoda_abdusalom',
			image: Shaxzoda,
		},
		{
			id: '6',
			author: 'Kunduziy',
			image: Kunduziy,
		},
		{
			id: '7',
			author: 'AKBAR YUSUPOV',
			image: AkbarYusupov,
		},
	] as AuthorListType;
	return (
		<Fragment>
			<div
				className={clsx(
					'hidden lg:flex h-full flex-col gap-3 px-3 py-4 md:px-2 flex-shrink-0',
					props.className
				)}>
				<span className='text-xl font-bold'>{t('listOfAuthors')}</span>
				<Authors data={authors} />
			</div>
		</Fragment>
	);
}
