import { TECH_STACK } from '../data/content'

export default function TechStack() {
	return (
		<div className='py-12'>
			<h2 className='text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50'>
				Технології
			</h2>
			<p className='mt-2 text-zinc-600 dark:text-zinc-400'>
				Інструменти та технології, з якими я працюю.
			</p>
			<div className='mt-6 flex flex-wrap gap-2'>
				{TECH_STACK.map(t => (
					<span
						key={t}
						className='inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-800 dark:border-zinc-700 dark:text-zinc-200 bg-white/70 dark:bg-white/5 backdrop-blur motion-safe:animate-[fade-in_0.6s_ease_both]'
					>
						{t}
					</span>
				))}
			</div>
		</div>
	)
}
