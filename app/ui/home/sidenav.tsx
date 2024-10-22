import { useTranslations } from 'next-intl';

import { AuthorListType } from '@/app/types';

import Authors from './author-list';

type HomeSideNavProps = {
	authors: AuthorListType;
};

export default function HomeSideNav({ authors }: HomeSideNavProps) {
	const t = useTranslations();
	return (
		<div className='flex h-full flex-col px-3 py-4 md:px-2 flex-shrink-0'>
			<span className='text-lg'>{t('listOfAuthors')}</span>
			<Authors data={authors} />
		</div>
	);
}
