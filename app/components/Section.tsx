import React from 'react'

type Props = {
	id?: string
	className?: string
	children: React.ReactNode
}

export default function Section({ id, className = '', children }: Props) {
	return (
		<section id={id} className={`w-full px-6 sm:px-8 md:px-10 ${className}`}>
			<div className='mx-auto w-full max-w-5xl'>{children}</div>
		</section>
	)
}
