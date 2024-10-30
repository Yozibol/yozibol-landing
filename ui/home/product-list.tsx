import clsx from 'clsx';

import { products } from '@/mock';

import ProductListCard from './product-list-card';

type ProductListProps = {
	className?: string;
};

export default function ProductList(props: ProductListProps) {
	return (
		<div className={clsx('py-4 lg:px-2', props.className)}>
			<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
				{products &&
					Array.isArray(products) &&
					products.length > 0 &&
					products.map((product) => (
						<ProductListCard key={product?.id} product={product} />
					))}
			</div>
		</div>
	);
}
