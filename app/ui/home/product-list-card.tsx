import clsx from 'clsx';

import { ProductListItemType } from '@/app/types';
import Image from 'next/image';

type ProductListCardProps = {
	product: ProductListItemType;
	className?: string;
};

export default function ProductListCard(props: ProductListCardProps) {
	return (
		<div
			className={clsx(
				'p-2 flex flex-col rounded-3xl transition-[box-shadow,opacity,background] duration-300 ease-in-out flex-shrink-0 cursor-pointer hover:shadow-[0_0_12px_0_rgba(0,0,0,0.2)]',
				props.className
			)}>
			<div className=''>
				<Image
					src={props?.product?.thumbnail}
					alt={props?.product?.name}
					width={0}
					height={0}
					className='w-full h-full min-h-[175px] rounded-[15px]'
				/>
			</div>
			<div className='p-2'>
				<div className='py-2'>
					<span>{props?.product?.category}</span>: {props?.product?.name}
				</div>
				<div className='py-2'>
					<span>{props?.product?.price}</span>UZS
				</div>
				<div className='py-2'>
					<span>{props?.product?.author}</span>
				</div>
			</div>
		</div>
	);
}
