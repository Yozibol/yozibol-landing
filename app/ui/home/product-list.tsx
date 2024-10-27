import clsx from 'clsx';

import Img1 from '@/app/assets/images/products/1.png';
import Img2 from '@/app/assets/images/products/2.jpg';
import Img3 from '@/app/assets/images/products/3.jpeg';
import Img4 from '@/app/assets/images/products/4.jpeg';
import Img5 from '@/app/assets/images/products/5.jpeg';
import Img6 from '@/app/assets/images/products/6.jpeg';
import Img7 from '@/app/assets/images/products/7.jpeg';
import Img8 from '@/app/assets/images/products/8.jpeg';
import Img9 from '@/app/assets/images/products/9.jpeg';

import { ProductListType } from '@/app/types';
import ProductListCard from './product-list-card';

type ProductListProps = {
	className?: string;
};

export default function ProductList(props: ProductListProps) {
	const products = [
		{
			id: '1',
			category: 'Futbolka',
			name: 'tchk',
			price: 220000,
			author: 'tchk',
			thumbnail: Img1,
		},
		{
			id: '2',
			category: 'Futbolka',
			name: 'smile',
			price: 220000,
			author: 'tchk',
			thumbnail: Img2,
		},
		{
			id: '3',
			category: 'Futbolka',
			name: "Don't be sheep",
			price: 150000,
			author: 'TROLL.UZ',
			thumbnail: Img3,
		},
		{
			id: '4',
			category: 'Futbolka',
			name: 'Turn on insoff',
			price: 150000,
			author: 'TROLL.UZ',
			thumbnail: Img4,
		},
		{
			id: '5',
			category: 'Futbolka',
			name: 'Musaffo Sky',
			price: 150000,
			author: 'TROLL.UZ',
			thumbnail: Img5,
		},
		{
			id: '6',
			category: 'Futbolka',
			name: 'Surish kerak',
			price: 150000,
			author: 'TROLL.UZ',
			thumbnail: Img6,
		},
		{
			id: '7',
			category: 'Futbolka',
			name: 'Tanish Bilish',
			price: 150000,
			author: 'TROLL.UZ',
			thumbnail: Img7,
		},
		{
			id: '8',
			category: 'Futbolka',
			name: 'Tirikchilik',
			price: 150000,
			author: 'TROLL.UZ',
			thumbnail: Img8,
		},
		{
			id: '9',
			category: 'Futbolka',
			name: 'Use Farosat',
			price: 150000,
			author: 'TROLL.UZ',
			thumbnail: Img9,
		},
	] as ProductListType;
	return (
		<div className={clsx('py-4 px-3 md:px-2', props.className)}>
			<div className='flex flex-wrap flex-auto'>
				{products &&
					Array.isArray(products) &&
					products.length > 0 &&
					products.map((product) => (
						<ProductListCard
							product={product}
							className='sm:flex-[0_0_33.3%] sm:max-w-[33.3%] flex-[0_0_50%] max-w-[50%]'
						/>
					))}
			</div>
		</div>
	);
}
