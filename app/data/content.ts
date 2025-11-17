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
]
