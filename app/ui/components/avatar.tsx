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
	const avatarSize = size === 'lg' ? 70 : size === 'sm' ? 50 : 60;
	return (
		<Image
			src={src}
			width={avatarSize}
			height={avatarSize}
			alt={alt || 'Avatar image'}
			className={clsx(
				`w-[${avatarSize}px] h-[${avatarSize}px] flex-shrink-0 object-cover object-center border`,
				type === 'squared' ? 'rounded' : 'rounded-[50%]',
				className
			)}
		/>
	);
}
