'use client'
import Link from 'next/link'
import { useState } from 'react'

const NAV = [
	{ href: '#about', label: 'Про мене' },
	{ href: '#stack', label: 'Технології' },
	{ href: '#projects', label: 'Проєкти' },
	{ href: '#contact', label: 'Контакти' },
]

export default function Header() {
	const [open, setOpen] = useState(false)
	return (
		<header className='sticky top-0 z-40 backdrop-blur supports-backdrop-filter:bg-white/60 dark:supports-backdrop-filter:bg-black/40 border-b border-black/10 dark:border-white/10'>
			<div className='mx-auto flex max-w-5xl items-center justify-between px-6 sm:px-8 md:px-10 py-4'>
				<Link href='#' className='font-semibold tracking-tight text-xl'>
					<div className='w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold'>
						VF
					</div>
				</Link>
				<nav className='hidden md:flex gap-6 text-sm'>
					{NAV.map(i => (
						<a
							key={i.href}
							href={i.href}
							className='text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors'
						>
							{i.label}
						</a>
					))}
				</nav>
				<button
					className='md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10'
					onClick={() => setOpen(v => !v)}
					aria-label='Перемкнути навігацію'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='h-5 w-5'
					>
						<path d='M3.75 5.25h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Zm0 6h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5Z' />
					</svg>
					<div className='sr-only'>меню</div>
				</button>
			</div>
			{open && (
				<div className='md:hidden border-t border-black/10 dark:border-white/10 px-6 sm:px-8 md:px-10 py-4'>
					<div className='flex flex-col gap-3 text-sm'>
						{NAV.map(i => (
							<a
								key={i.href}
								href={i.href}
								onClick={() => setOpen(false)}
								className='text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors'
							>
								{i.label}
							</a>
						))}
					</div>
				</div>
			)}
		</header>
	)
}
