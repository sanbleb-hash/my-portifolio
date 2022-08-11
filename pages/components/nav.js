import React from 'react';

const Navbar = () => {
	return (
		<nav className=' w-screen bg-slate-100 h-[10vh] font-fila '>
			<div className='mx-auto h-full container flex items-center justify-between text-gray-500  '>
				<ul className='flex text-2xl items-end gap-3'>
					<h1 className=' font-semibold text-gray-600 text-2xl md:text-4xl pr-10 '>
						san Bleb<span className='text-red-500 capitalize '>.dev</span>
					</h1>

					<li className='mr-3'>about</li>
					<li className='mr-3'>my work</li>
				</ul>
				<button className=' border px-5 py-2 rounded-md text-purple-400 shadow-md hover:bg-purple-100 hover:border hover:text-gray-500 border-white text-inherit transition-all ease-out duration-100 delay-75 '>
					hire me
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
