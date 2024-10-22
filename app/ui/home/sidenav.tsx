import { useTranslations } from 'next-intl';

export default function SideNav() {
	const t = useTranslations();
	return (
		<div className='flex h-full flex-col px-3 py-4 md:px-2'>
			<span className='text-lg'>List of authors</span>
		</div>
	);
}
