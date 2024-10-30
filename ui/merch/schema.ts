import { z } from 'zod';

import { MerchSizes } from '@/types';
import t from '@/localization/translate';

export const MerchSchema = z.object({
	size: z.nativeEnum(MerchSizes, {
		errorMap: (issue, ctx) => {
			return { message: t('select_size_error') };
		},
	}),
	activePreview: z
		.union([
			z.string(),
			z.object({
				src: z.string(),
				height: z.number(),
				width: z.number(),
				blurDataURL: z.string().optional(),
			}),
		])
		.optional(),
	activePreviewIndex: z.number().optional(),
});

export type MerchSchemaType = z.infer<typeof MerchSchema>;
