import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { PROFILE } from './data/content'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: `${PROFILE.name} — Портфоліо`,
	description: `${PROFILE.role}. Контакти, технології, проєкти та досвід роботи.`,
	metadataBase: new URL('http://localhost:3000'),
	openGraph: {
		title: `${PROFILE.name} — Портфоліо`,
		description: `${PROFILE.role}. Контакти, технології, проєкти та досвід роботи.`,
		type: 'website',
		url: '/',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
