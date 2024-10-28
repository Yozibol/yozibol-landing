'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { HiOutlineSearch } from 'react-icons/hi';
import clsx from 'clsx';

import { useDebouncedCallback } from '@/hooks/useDebouncedCallback';

type SearchProps = {
	placeholder?: string;
	className?: string;
};

export default function SearchComponent({
	placeholder = 'Search',
	className,
}: SearchProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(searchParams);
		params.set('page', '1');
		if (term) {
			params.set('query', term);
		} else {
			params.delete('query');
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className={clsx('relative flex flex-1 flex-shrink-0', className)}>
			<input
				className='peer block w-full rounded-md border border-gray-200 py-[11px] pl-5 text-sm outline-none placeholder:text-gray-500'
				placeholder={placeholder}
				onChange={(e) => {
					handleSearch(e.target.value);
				}}
				defaultValue={searchParams.get('query')?.toString()}
			/>
			<button
				type='button'
				className='absolute right-0 top-0 p-3 rounded-md bg-primary flex items-center justify-center '>
				<HiOutlineSearch className='w-5 h-5' />
			</button>
		</div>
	);
}
