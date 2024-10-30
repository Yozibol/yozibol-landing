'use client';

import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import clsx from 'clsx';

import { MerchType } from '@/types';

import { MerchSchemaType } from './schema';

type MerchPreviewProps = {
	merch: MerchType;
	form: UseFormReturn<MerchSchemaType>;
	className?: string;
};

export default function MerchPreview({
	merch,
	form,
	className,
}: MerchPreviewProps) {
	return (
		<div className={clsx('flex gap-2', className)}>
			<div className='w-1/4 lg:w-1/5 flex flex-col gap-2'>
				{merch?.thumbnails &&
					Array.isArray(merch?.thumbnails) &&
					merch?.thumbnails.map((thumbnail, index) => (
						<Image
							loading='lazy'
							src={thumbnail}
							alt={merch?.name}
							width={0}
							height={0}
							className={clsx(
								'w-full h-full max-h-[120px] rounded-[8px] cursor-pointer border',
								// form.watch('activePreviewIndex') === index && 'bg-red-500 z-50'
							)}
							onMouseEnter={(e) => {
								form.setValue('activePreview', thumbnail);
								form.setValue('activePreviewIndex', index);
							}}
						/>
					))}
			</div>
			<div className='w-3/4 lg:w-4/5'>
				<Image
					loading='lazy'
					src={form.watch('activePreview') || merch?.thumbnails[0]}
					alt={merch?.name}
					width={0}
					height={0}
					className='w-full h-full max-h-[650px] max-w-[650px] border rounded-[20px]'
				/>
			</div>
		</div>
	);
}
