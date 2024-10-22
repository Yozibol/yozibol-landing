import { useTranslations } from 'next-intl';

import { AuthorListType } from '@/app/types';

type AuthorListProps = {
	data: AuthorListType;
};

export default function Authors({ data }: AuthorListProps) {
	const t = useTranslations();
	return (
		<div className="flex flex-direction">
			{JSON.stringify(data)}
		</div>
	);
}


