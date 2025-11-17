export default function Footer() {
	return (
		<footer className='mt-16 border-t border-zinc-200 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400'>
			<div className='mx-auto max-w-5xl px-6 sm:px-8 md:px-10'>
				© {new Date().getFullYear()}
			</div>
		</footer>
	)
}
