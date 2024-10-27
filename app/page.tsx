import HomeSideNav from '@/app/ui/home/sidenav';
import Search from '@/app/ui/components/search';
import ProductList from '@/app/ui/home/product-list';

type HomePageProps = {};

export default async function HomePage(props: HomePageProps) {
	return (
		<div className='container pt-8'>
			<Search className="max-w-[50%] mx-auto" />
			<div className='flex items-start'>
				<HomeSideNav className='flex-[0_0_25%] max-w-[25%]' />
				<ProductList className='flex-[0_0_75%] max-w-[75%] ' />
			</div>
		</div>
	);
}
