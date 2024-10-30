import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

import { MerchType } from '@/types';

type ProductListCardProps = {
	product: MerchType;
	className?: string;
};

export default function ProductListCard(props: ProductListCardProps) {
	return (
		<Link
			href={`/merch/${props.product?.id}`}
			className={clsx(
				'group p-2 flex flex-col rounded-3xl transition-[box-shadow,opacity,background] duration-300 ease-in-out flex-shrink-0 cursor-pointer hover:shadow-[0_0_12px_0_rgba(0,0,0,0.2)]',
				props.className
			)}>
			<div className='flex-shrink-0'>
				<Image
					loading='lazy'
					src={props?.product?.thumbnails[0]}
					alt={props?.product?.name}
					width={0}
					height={0}
					className='w-full h-full min-h-[175px] rounded-[15px]'
				/>
			</div>
			<div className='p-2'>
				<div className='py-1'>
					<span className='text-gray-400'>{props?.product?.category}</span>:{' '}
					<span className='font-semibold'>{props?.product?.name}</span>
				</div>
				<div className='py-1'>
					<span className='font-semibold' suppressHydrationWarning>
						{new Intl.NumberFormat('uz-UZ', {
							style: 'currency',
							currency: 'UZS',
							maximumFractionDigits: 0,
						}).format(props?.product?.price)}
					</span>
				</div>
				<div className='py-1'>
					<span className='font-semibold'>{props?.product?.author}</span>
				</div>
			</div>
		</Link>
	);
}
