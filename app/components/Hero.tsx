import { PROFILE } from '../data/content'

function getExperienceYears(startYear: number): number {
	const now = new Date()
	return Math.max(0, now.getFullYear() - startYear)
}

export default function Hero() {
	const years = getExperienceYears(PROFILE.startYear)
	return (
		<div className='relative overflow-hidden'>
			<div className='pointer-events-none absolute inset-0 -z-10 opacity-60 blur-2xl mask-[radial-gradient(60%_60%_at_50%_0%,#000_30%,transparent_70%)]'>
				<div className='mx-auto h-48 w-[120%] -translate-x-10 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40' />
			</div>
			<div className='py-16 sm:py-20 md:py-24'>
				<p className='text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 motion-safe:animate-[fade-in_0.6s_ease both]'>
					{PROFILE.location}
				</p>
				<h1 className='mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl motion-safe:animate-[fade-in-up_0.7s_ease both]'>
					{PROFILE.name}
				</h1>
				<p className='mt-3 text-lg text-zinc-700 dark:text-zinc-300 motion-safe:animate-[fade-in-up_0.8s_ease_0.05s_both]'>
					{PROFILE.role} • {years}+ років досвіду
				</p>
				<p className='mt-5 max-w-2xl text-zinc-600 dark:text-zinc-400 motion-safe:animate-[fade-in-up_0.9s_ease_0.1s_both]'>
					{PROFILE.summary}
				</p>
				<div className='mt-8 flex gap-3 motion-safe:animate-[fade-in-up_1s_ease_0.15s_both]'>
					<a
						href='#projects'
						className='inline-flex items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200'
					>
						Мої проєкти
					</a>
					<a
						href='#contact'
						className='inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900'
					>
						Контакти
					</a>
					<a
						href='/CV_Fyklev_Frontend_React.pdf'
						download
						className='inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900'
					>
						Завантажити резюме (PDF)
					</a>
				</div>
			</div>
		</div>
	)
}
