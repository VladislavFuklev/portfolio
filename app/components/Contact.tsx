'use client'
import { useState } from 'react'
import { CONTACTS } from '../data/content'

export default function Contact() {
	const [copied, setCopied] = useState(false)

	const handleEmailClick = (email: string) => {
		navigator.clipboard.writeText(email)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}
	return (
		<div className='py-12'>
			<h2 className='text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'>
				Контакти
			</h2>
			<p className='mt-2 text-zinc-600 dark:text-zinc-400'>
				Звʼяжіться зі мною зручним способом.
			</p>
			<ul className='mt-6 grid gap-3 sm:grid-cols-2 relative'>
				{CONTACTS.map(c => (
					<li key={c.label} className='relative'>
						{c.label === 'Email' ? (
							<button
								onClick={() => handleEmailClick(c.copy!)}
								className='group inline-flex items-center justify-between w-full rounded-xl border border-zinc-200 bg-white/70 p-4 text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-900'
							>
								<span>{c.label}</span>
								<span className='opacity-0 transition-opacity group-hover:opacity-100'>
									→
								</span>
							</button>
						) : (
							<a
								href={c.href}
								className='group inline-flex items-center justify-between w-full rounded-xl border border-zinc-200 bg-white/70 p-4 text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/50 dark:text-zinc-200 dark:hover:bg-zinc-900'
								target={c.href.startsWith('http') ? '_blank' : undefined}
								rel={
									c.href.startsWith('http') ? 'noreferrer noopener' : undefined
								}
							>
								<span>{c.label}</span>
								<span className='opacity-0 transition-opacity group-hover:opacity-100'>
									→
								</span>
							</a>
						)}

						{c.label === 'Email' && copied && (
							<div className='absolute left-1/2 top-[-35px] -translate-x-1/2 rounded-md bg-zinc-800 text-white text-sm px-3 py-1 shadow-md animate-fade'>
								Скопійовано!
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
