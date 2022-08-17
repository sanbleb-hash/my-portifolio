import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className=' w-screen fixed top-0 left-0 bg-slate-100 h-[10vh] font-fila  z-50 '>
			<div className='mx-auto h-full container flex items-center justify-between text-gray-500 px-6  '>
				<ul className='flex text-2xl items-end gap-3'>
					<h1
						className=' font-semibold text-gray-600 text-2xl md:text-4xl pr-10 cursor-pointer '
						onClick={() => router.push('/')}
					>
						san Bleb
						<span className='   text-red-500   '>
							.<span className=' animate-fade-leter'>d</span>
							<span className=' animate-fade-leter2'>e</span>
							<span className=' animate-fade-leter3'>v</span>
						</span>
					</h1>

					<li className='mr-3 hidden md:inline-block'>
						<Link href='about-me'>about me</Link>
					</li>
					<li className='mr-3 hidden md:inline-block'>
						<Link href='/my-works'>my work</Link>
					</li>
				</ul>
				<span>
					{!isOpen && (
						<FaBars
							className=' inline-block md:hidden text-3xl hover:text-gray-400 hover:border p-1 cursor:pointer  '
							onClick={handleOpen}
						/>
					)}
					<button className=' border px-5 py-2 rounded-md text-purple-400 shadow-md hover:bg-purple-100 hover:border hover:text-gray-500 border-white text-inherit transition-all ease-out duration-100 delay-75 animate-fade-in hidden md:inline-block  '>
						<Link href='/contact'>hire me</Link>
					</button>
				</span>
			</div>
			{isOpen && (
				<div className='absolute top-0 left-0 w-screen h-screen z-10 bg-[url("https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29sb3IlMjBvdmVybGF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")] bg-cover bg-no-repeat bg-center  '>
					<div className='flex justify-between flex-row-reverse  h-full'>
						<GrClose
							className=' inline-block md:hidden text-3xl hover:text-gray-400 hover:border p-1
                      text-gray-500 mr-14 mt-5 z-50 '
							onClick={handleOpen}
						/>
						<div className='flex flex-col justify-start gap-4 items-center h-full w-1/2 bg-purple-200 text-gray-500  opacity-75 pt-14 text-3xl'>
							<h3 onClick={handleOpen}>
								<Link href='/'>home</Link>
							</h3>
							<h3 onClick={handleOpen}>
								<Link href='/about-me'>about</Link>{' '}
							</h3>
							<h3 onClick={handleOpen}>
								<Link href='/my-works'>my works</Link>
							</h3>
							<button
								className='border px-5 py-2 rounded-md mt-24 text-purple-600 shadow-md hover:bg-white hover:border  border-white text-inherit transition-all ease-out duration-100 delay-75 animate-fade-in '
								onClick={handleOpen}
							>
								<Link href='/contact'>hire me</Link>
							</button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
