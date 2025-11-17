import { PROJECTS } from '../data/content'

export default function Projects() {
	return (
		<div className='py-12'>
			<h2 className='text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'>
				Проєкти
			</h2>
			<div className='mt-6 grid gap-6 sm:grid-cols-2'>
				{PROJECTS.map(p => (
					<article
						key={p.title}
						className='group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 p-5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-900/50'
					>
						<div className='absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent,rgba(99,102,241,0.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
						<h3 className='text-lg font-semibold text-zinc-900 dark:text-zinc-50'>
							{p.title}
						</h3>
						<p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
							{p.description}
						</p>
						<div className='mt-3 flex flex-wrap gap-1.5'>
							{p.tech.map(t => (
								<span
									key={t}
									className='text-xs text-zinc-600 dark:text-zinc-400 rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5'
								>
									{t}
								</span>
							))}
						</div>
						<div className='mt-4 flex gap-3 text-sm'>
							{p.link && (
								<a
									className='text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300'
									href={p.link}
									target='_blank'
									rel='noreferrer noopener'
								>
									Сайт →
								</a>
							)}
							{p.repo && (
								<a
									className='text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white'
									href={p.repo}
									target='_blank'
									rel='noreferrer noopener'
								>
									Код →
								</a>
							)}
						</div>
					</article>
				))}
			</div>
		</div>
	)
}
