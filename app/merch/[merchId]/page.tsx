import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// import { httpService } from '@services/axios';
import MerchDetails from '@/ui/merch/wrapper';
import { products } from '@/mock';

export default async function MerchDetailsPage({
	params,
}: {
	params: { merchId: string };
}) {
	// const merch = await httpService.get<{ name: string }>(
	// 	'/users/' + params.merchId
	// );

	const merch = products.find((el) => el?.id === params?.merchId);

	if (!merch) {
		notFound();
	}

	return (
		<div className='container pt-6 lg:pt-10 box-border'>
			<Suspense>
				<MerchDetails merch={merch} />
			</Suspense>
		</div>
	);
}
