'use client';

import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

type AvatarProps = {
	src: string | StaticImageData;
	alt?: string;
	className?: string;
	size?: 'sm' | 'md' | 'lg';
	type?: 'rounded' | 'squared';
};

export default function AvatarComponent({
	src,
	alt,
	size = 'md',
	type = 'rounded',
	className,
}: AvatarProps) {
	return (
		<Image
			src={src}
			width={60}
			height={60}
			alt={alt || 'Avatar image'}
			className={clsx(
				'w-[60px] h-[60px] flex-shrink-0 object-cover object-center border',
				type === 'squared' ? 'rounded' : 'rounded-full',
				className
			)}
		/>
	);
}
