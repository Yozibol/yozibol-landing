'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { HiBars3, HiShoppingCart, HiXMark } from 'react-icons/hi2';

export default function LayoutHeader() {
	const t = useTranslations();
	const [toggleMobileMenu, setMobileMenu] = useState(false);
	return (
		<header className='w-full fixed left-0 z-[100] bg-white border-b-2 border-b-stone-100 dark:bg-black dark:border-b-stone-800'>
			<nav
				aria-label='Global'
				className='mx-auto flex max-w-7xl items-center justify-between py-3 lg:py-4 px-3 lg:px-8 xl:px-12'>
				<div className='flex lg:flex-1'>
					<Link href='/' className='p-1.5'>
						<h1 className='text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100'>
							YOZIBOL
						</h1>
					</Link>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					<Link
						href='/'
						className='text-md font-semibold leading-6 text-gray-900 dark:text-gray-50'>
						{t('authors')}
					</Link>
					<Link
						href='/'
						className='text-md font-semibold leading-6 text-gray-900 dark:text-gray-50'>
						{t('marketplace')}
					</Link>
					<Link
						href='/'
						className='text-md font-semibold leading-6 text-gray-900 dark:text-gray-50'>
						{t('login')}
					</Link>
					<button type='button' className='cursor-pointer'>
						<HiShoppingCart className='w-6 h-6' />
					</button>
				</div>
				<div className='flex gap-3 lg:hidden'>
					<button type='button' className='cursor-pointer'>
						<HiShoppingCart className='w-6 h-6' />
					</button>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer'
						onClick={() => setMobileMenu(true)}>
						<span className='sr-only'>Open main menu</span>
						<HiBars3 className='h-6 w-6' />
					</button>
				</div>
				<div
					className={clsx(
						'lg:hidden',
						toggleMobileMenu
							? 'visible opacity-1 transition duration-300'
							: 'hidden opacity-0'
					)}
					role='dialog'
					aria-modal='true'>
					<div className='fixed inset-0 z-10'></div>
					<div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-black px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
						<div className='flex items-center justify-between'>
							<Link href='/' className='p-1.5'>
								<h1 className='text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100'>
									YOZIBOL
								</h1>
							</Link>
							<button
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer'
								onClick={() => setMobileMenu(false)}>
								<span className='sr-only'>Close menu</span>
								<HiXMark className='h-6 w-6' />
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-500/10'>
								<div className='space-y-2 py-6'>
									<Link
										href='/'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										{t('authors')}
									</Link>
									<Link
										href='/'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										{t('marketplace')}
									</Link>
								</div>
								<div className='py-6'>
									<Link
										href='/'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										{t('login')}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
