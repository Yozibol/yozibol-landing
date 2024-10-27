import { StaticImageData } from 'next/image';

export type AuthorListItemType = {
	id: string;
	author: string;
	image: string | StaticImageData;
};

export type AuthorListType = AuthorListItemType[];

export type ProductListItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	author: string;
	thumbnail: string | StaticImageData;
};

export type ProductListType = ProductListItemType[];
