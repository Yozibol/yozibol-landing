import Img1 from '@/assets/images/products/1.png';
import Img2 from '@/assets/images/products/2.jpg';
import Img3 from '@/assets/images/products/3.jpeg';
import Img4 from '@/assets/images/products/4.jpeg';
import Img5 from '@/assets/images/products/5.jpeg';
import Img6 from '@/assets/images/products/6.jpeg';
import Img7 from '@/assets/images/products/7.jpeg';
import Img8 from '@/assets/images/products/8.jpeg';
import Img9 from '@/assets/images/products/9.jpeg';

import { ProductListType } from '@/types';

export const products = [
	{
		id: '1',
		category: 'Futbolka',
		name: 'tchk',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 220000,
		author: 'tchk',
		thumbnails: [Img1, Img2, Img3],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '2',
		category: 'Futbolka',
		name: 'smile',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 220000,
		author: 'tchk',
		thumbnails: [Img2, Img1, Img3],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '3',
		category: 'Futbolka',
		name: "Don't be sheep",
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 150000,
		author: 'TROLL.UZ',
		thumbnails: [Img3, Img4, Img5],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '4',
		category: 'Futbolka',
		name: 'Turn on insoff',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 150000,
		author: 'TROLL.UZ',
		thumbnails: [Img3, Img4, Img5],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '5',
		category: 'Futbolka',
		name: 'Musaffo Sky',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 150000,
		author: 'TROLL.UZ',
		thumbnails: [Img5, Img7, Img9],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '6',
		category: 'Futbolka',
		name: 'Surish kerak',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 150000,
		author: 'TROLL.UZ',
		thumbnails: [Img6, Img3, Img2],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '7',
		category: 'Futbolka',
		name: 'Tanish Bilish',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 150000,
		author: 'TROLL.UZ',
		thumbnails: [Img7, Img6, Img5],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '8',
		category: 'Futbolka',
		name: 'Tirikchilik',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 150000,
		author: 'TROLL.UZ',
		thumbnails: [Img8, Img9, Img1],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
	{
		id: '9',
		category: 'Futbolka',
		name: 'Use Farosat',
		description:
			'100% узбекская пахта (хлопок) Стикерпак от Troll.uz идет в подарок к футболке :)',
		price: 150000,
		author: 'TROLL.UZ',
		thumbnails: [Img9, Img1, Img5],
		sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
	},
] as ProductListType;
