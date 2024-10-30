import { StaticImageData } from 'next/image';

export type AuthorListItemType = {
	id: string;
	author: string;
	image: string | StaticImageData;
};

export type AuthorListType = AuthorListItemType[];

export enum MerchSizes {
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
}

export type MerchType = {
	id: string;
	category: string;
	name: string;
	description?: string;
	price: number;
	author: string;
	thumbnails: (string | StaticImageData)[];
	sizes: MerchSizes[];
};
export type ProductListType = MerchType[];
