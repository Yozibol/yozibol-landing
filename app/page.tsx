import { AuthorListType } from '@/app/types';
import HomeSideNav from './ui/home/sidenav';

type HomePageProps = {};

export default async function HomePage(props: HomePageProps) {
	const authors = [] as AuthorListType;
	
	return (
		<div className='container'>
			<HomeSideNav authors={authors} />
		</div>
	);
}
