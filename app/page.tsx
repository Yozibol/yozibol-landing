import { Suspense } from 'react';

import HomeSideNav from '@/ui/home/sidenav';
import Search from '@/ui/components/search';
import ProductList from '@/ui/home/product-list';

export default async function HomePage() {
	return (
		<div className='container mx-auto pt-8 box-border'>
			<Suspense>
				<Search className='max-w-[100%] mx-auto lg:max-w-[50%]' />
			</Suspense>
			<div className='flex items-start'>
				<HomeSideNav className='w-1/4' />
				<ProductList className='w-full lg:w-3/4' />
			</div>
		</div>
	);
}
