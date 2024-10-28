import { Suspense } from 'react';

import { AuthorListType } from '@/types';
import Avatar from '../components/avatar';

type AuthorListProps = {
	data: AuthorListType;
};

export default function Authors({ data }: AuthorListProps) {
	return (
		<div className='flex flex-col gap-2'>
			{data &&
				Array.isArray(data) &&
				data.length > 0 &&
				data.map((author) => (
					<div
						key={author?.id}
						className='p-4 flex items-center gap-3 opacity-60 rounded-3xl 
						transition-[box-shadow,opacity,background] duration-300 ease-in-out flex-shrink-0 cursor-pointer
						hover:shadow-[0_0_12px_0_rgba(0,0,0,0.2)] hover:opacity-100'>
						<Suspense>
							<Avatar
								src={author?.image}
								alt="Author's avatar image"
								className='block'
							/>
						</Suspense>
						<h3 className='block font-bold'>{author?.author}</h3>
					</div>
				))}
		</div>
	);
}
