import React from 'react';

const Navbar = () => {
	return (
		<nav className=' w-screen bg-slate-100 h-[10vh] font-fila '>
			<div className='mx-auto h-full container flex items-center justify-between text-gray-500  '>
				<ul className='flex text-2xl items-end gap-3'>
					<h1 className=' font-semibold text-gray-700 text-2xl md:text-4xl pr-10 capitalize'>
						nino-multimedia
					</h1>

					<li className='mr-3'>about</li>
					<li className='mr-3'>my work</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
