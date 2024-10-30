'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { MerchType } from '@/types';
import MerchPreview from '@/ui/merch/preview';
import MerchDetails from '@/ui/merch/details';
import { MerchSchema, MerchSchemaType } from './schema';

type MerchWrapperDetails = {
	merch: MerchType;
};

export default function MerchWrapper({ merch }: MerchWrapperDetails) {
	const form = useForm<MerchSchemaType>({
		defaultValues: {
			activePreview: merch?.thumbnails[0] || '',
			activePreviewIndex: 0,
			size: undefined,
		},
		resolver: zodResolver(MerchSchema),
	});

	const onSubmit: SubmitHandler<MerchSchemaType> = (data) =>
		console.log({ data });

	return (
		<form
			onSubmit={form.handleSubmit(onSubmit)}
			className='flex flex-col lg:flex-row gap-5'>
			<MerchPreview merch={merch} form={form} className='w-full lg:w-1/2' />
			<MerchDetails
				merch={merch}
				form={form}
				className='w-full lg:w-1/2 lg:pr-24'
			/>
		</form>
	);
}
