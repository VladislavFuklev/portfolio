export type Contact = {
	label: string
	href: string
	copy?: string
}

export type Project = {
	title: string
	description: string
	tech: string[]
	link?: string
	repo?: string
}

export const PROFILE = {
	name: 'Фуклєв Владислав',
	role: 'Frontend-розробник',
	location: 'Україна, Дніпро',
	startYear: 2022,
	summary:
		'Працюю над сучасними веб‑застосунками, приділяючи увагу продуктивності, доступності та зрозумілому UX. Люблю охайний код і командну роботу.',
}

export const CONTACTS: Contact[] = [
	{ label: 'Email', href: 'vladfyklev@gmail.com', copy: 'vladfyklev@gmail.com' },
	{ label: 'GitHub', href: 'https://github.com/VladislavFuklev' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/vladislavfyklev/' },
	{ label: 'Telegram', href: 'https://t.me/Fucklevv' },
]

export const TECH_STACK: string[] = [
	'JavaScript',
	'TypeScript',
	'HTML5',
	'CSS3',
	'SASS',
	'Tailwind CSS',
	'React.js',
	'React Hooks',
	'Redux Toolkit',
	'React Router v5/6',
	'React Query',
	'Formik',
	'Material UI',
	'Styled Components',
	'OOP',
	'Git',
	'WebSocket',
	'Axios',
	'Next.js',
]

export const PROJECTS: Project[] = [
	{
		title: 'Крипто Live (Binance WS)',
		description:
			'Односторінковий застосунок на Next.js для моніторингу курсів криптовалют у реальному часі. Live‑дані надходять через WebSocket (Binance), REST API використано для отримання курсу валют та погоди.',
		tech: ['Next.js', 'TypeScript', 'Tailwind', 'WebSocket', 'REST API'],
		link: 'https://nextapp-mu-gilt.vercel.app/dashboard',
		repo: 'https://github.com/VladislavFuklev/nextapp',
	},
	{
		title: 'Віджет погоди',
		description:
			'Дашборд погоди з авторизацією, вибором міста та метриками. Пошук міст (Open‑Meteo Geocoding): вибір зі списку — перемикає поточне місто та додає його до вибору міст. Зміна теми (світла/темна).',
		tech: ['Next.js', 'TypeScript', 'NextAuth (JWT, credentials)', 'React Query', 'Tailwind', 'Radix UI', 'Recharts','React-hook-form + zod'],
		link: 'https://weather-widget-six-smoky.vercel.app/signin',
		repo: 'https://github.com/VladislavFuklev/admin-dashboard',
	},
	{
		title: 'Персональний фінансовий трекер',
		description:
			'Мінімалістичний веб-додаток для управління особистими фінансами з акцентом на транзакції та аналітику. Дозволяє відстежувати доходи/витрати, автоматично розраховує баланс і коефіцієнт заощаджень за поточний місяць. Реалізовано повний CRUD для транзакцій з системою категорій, розширеною фільтрацією (тип, категорія, діапазон дат, пошук) та адаптивним UI з мобільним меню.',
		tech: [ "Next.js", "React 19", "TypeScript", "Tailwind CSS", "Next.js Server Actions", "NextAuth.js v5", "Prisma ORM", "Vercel Postgres (PostgreSQL)", "React Hook Form", "Zod", "Jest" ],
		link: 'https://dashboard-omega-sandy-89.vercel.app/',
		repo: 'https://github.com/VladislavFuklev/pet',
	}
]
