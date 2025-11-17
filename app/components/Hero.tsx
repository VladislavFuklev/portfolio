import { PROFILE } from '../data/content'

function getExperienceYears(startYear: number): number {
	const now = new Date()
	return Math.max(0, now.getFullYear() - startYear)
}

export default function Hero() {
	const years = getExperienceYears(PROFILE.startYear)
	return (
		<div className='relative overflow-hidden'>
			{/* Фон-градiєнт з адаптацiєю для мобiльних */}
			<div className='pointer-events-none absolute inset-0 -z-10 opacity-50 blur-xl mask-[radial-gradient(60%_60%_at_50%_0%,#000_25%,transparent_75%)]'>
				<div className='mx-auto h-40 w-[130%] -translate-x-12 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 sm:h-56 md:h-64' />
			</div>
			<div className='mx-auto max-w-5xl px-5 sm:px-8 md:px-10 py-12 sm:py-20 md:py-24'>
				<p className='text-xs sm:text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400 motion-safe:animate-[fade-in_0.6s_ease both]'>
					{PROFILE.location}
				</p>
				<h1 className='mt-3 text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 motion-safe:animate-[fade-in-up_0.7s_ease both]'>
					{PROFILE.name}
				</h1>
				<p className='mt-3 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 motion-safe:animate-[fade-in-up_0.8s_ease_0.05s_both]'>
					{PROFILE.role} • {years}+ років досвіду
				</p>
				<p className='mt-5 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 motion-safe:animate-[fade-in-up_0.9s_ease_0.1s_both]'>
					{PROFILE.summary}
				</p>
				<div className='mt-8 flex flex-col sm:flex-row gap-3 motion-safe:animate-[fade-in-up_1s_ease_0.15s_both]'>
					<a
						href='#projects'
						className='inline-flex w-full sm:w-auto justify-center items-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200'
					>
						Мої проєкти
					</a>
					<a
						href='#contact'
						className='inline-flex w-full sm:w-auto justify-center items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900'
					>
						Контакти
					</a>
					<a
						href='/CV_Fyklev_Frontend_React.pdf'
						download
						className='inline-flex w-full sm:w-auto justify-center items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900'
					>
						Завантажити резюме (PDF)
					</a>
				</div>
			</div>
		</div>
	)
}
