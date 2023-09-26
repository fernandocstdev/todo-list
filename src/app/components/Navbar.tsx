import Link from 'next/link'
import { HomeIcon, IconApp } from './icons'

export const NavBar = (): JSX.Element => {
	return (
		<aside className='w-1/5 min-h-screen border-r border-gray-300'>
			<header className='flex items-center w-full py-5 px-7'>
				<div className='flex gap-2 items-center'>
					<IconApp />
					<h1 className='font-normal text-xl'>Lista de tareas</h1>
				</div>
			</header>
			<nav className='flex flex-col px-10 py-5 border-t border-gray-100'>
				<ul>
					<li>
						<Link href='/' className='flex items-center gap-2 text-gray-500 font-light'>
							<HomeIcon />
							Inicio
						</Link>
					</li>
				</ul>
				<ul className='mt-20'>
					<h2 className='text-gray-400 font-light text-sm mb-3'>Espacios</h2>
					<li><Link href='' className='flex items-center gap-2 text-gray-500 font-light'>Tareas</Link></li>
					<li><Link href='' className='flex items-center gap-2 text-gray-500 font-light'>Hogar</Link></li>
					<li><Link href='' className='flex items-center gap-2 text-gray-500 font-light'>Escuela</Link></li>
				</ul>
			</nav>
		</aside>
	)
}
