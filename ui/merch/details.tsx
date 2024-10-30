'use client';

import { useTranslations } from 'next-intl';
import { UseFormReturn } from 'react-hook-form';
import clsx from 'clsx';

import { MerchSizes, MerchType } from '@/types';

import { MerchSchemaType } from './schema';

type MerchDetailsProps = {
	merch: MerchType;
	form: UseFormReturn<MerchSchemaType>;
	className?: string;
};

export default function MerchDetails({
	merch,
	form,
	className,
}: MerchDetailsProps) {
	const t = useTranslations();
	return (
		<div className={clsx('flex flex-col gap-3 lg:gap-2', className)}>
			<div className='flex items-center lg:flex-col lg:items-start'>
				<span className='text-gray-400'>{merch?.category}</span>
				<span className='text-gray-400 pr-2 lg:hidden'>:</span>
				<span className='font-semibold text-lg lg:text-2xl'>{merch?.name}</span>
			</div>
			<div className=' text-gray-400'>
				<span>{t('cloth')}: </span>
				<span>{merch?.description}</span>
			</div>
			<span className='text-2xl font-semibold' suppressHydrationWarning>
				{new Intl.NumberFormat('uz-UZ', {
					style: 'currency',
					currency: 'UZS',
					maximumFractionDigits: 0,
				}).format(merch?.price)}
			</span>
			<div className='flex flex-col gap-1 lg:gap-3'>
				<span className=''>{t('selectSize')}:</span>
				<div className='flex flex-wrap gap-3'>
					{merch?.sizes &&
						Array.isArray(merch?.sizes) &&
						merch?.sizes?.map((size: MerchSizes) => (
							<label
								key={size}
								className=''
								htmlFor={`merch-${size}`}
								onClick={() => form.setValue('size', size)}>
								<input
									type='radio'
									id={`merch-${size}`}
									className='hidden'
									name='size'
								/>
								<button
									type='button'
									className='rounded border-2 border-neutral-800 px-4 lg:px-12 py-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-800 hover:text-neutral-100 focus:border-neutral-800 focus:bg-neutral-800 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-900 active:bg-neutral-900 active:text-neutral-100 motion-reduce:transition-none'>
									{size}
								</button>
							</label>
						))}
				</div>
				{form.formState.errors && form.formState.errors.size && (
					<div className='mt-2 text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
						{form.formState.errors.size?.message?.toString()}
					</div>
				)}
			</div>
			<div className='py-2'>
				<button
					type='submit'
					className='w-full rounded bg-neutral-800 px-6 py-5 text-sm font-medium uppercase text-white transition duration-150 ease-in-out cursor-pointer hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed motion-reduce:transition-none'>
					{t('add')}
				</button>
			</div>
		</div>
	);
}
