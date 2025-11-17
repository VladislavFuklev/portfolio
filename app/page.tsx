import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Section from './components/Section'
import TechStack from './components/TechStack'

export default function Home() {
	return (
		<div className='min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50'>
			<Header />
			<main>
				<Section id='about'>
					<Hero />
				</Section>
				<Section id='stack' className='pt-0'>
					<TechStack />
				</Section>
				<Section id='projects' className='pt-0'>
					<Projects />
				</Section>
				<Section id='contact'>
					<Contact />
				</Section>
			</main>
			<Footer />
		</div>
	)
}
