import HomeSideNav from '@/app/ui/home/sidenav';
import Search from '@/app/ui/components/search';
import ProductList from '@/app/ui/home/product-list';
import { Suspense } from 'react';

export default async function HomePage() {
	return (
		<div className='container pt-8 box-border'>
			<Suspense>
				<Search className='max-w-[100%] mx-auto lg:max-w-[50%]' />
			</Suspense>
			<div className='flex items-start'>
				<HomeSideNav className='flex-[0_0_25%] max-w-[25%]' />
				<ProductList className='lg:flex-[0_0_75%] lg:max-w-[75%] ' />S
			</div>
		</div>
	);
}
