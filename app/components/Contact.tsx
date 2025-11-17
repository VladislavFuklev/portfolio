import { CONTACTS } from '../data/content'

export default function Contact() {
	return (
		<div className='py-12'>
			<h2 className='text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'>
				Контакти
			</h2>
			<p className='mt-2 text-zinc-600 dark:text-zinc-400'>
				Звʼяжіться зі мною зручним способом.
			</p>
			<ul className='mt-6 grid gap-3 sm:grid-cols-2'>
				{CONTACTS.map(c => (
					<li key={c.label}>
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
					</li>
				))}
			</ul>
		</div>
	)
}
