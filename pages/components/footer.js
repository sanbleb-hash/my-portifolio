import React from 'react';

const Footer = () => {
	return (
		<footer className=' w-screen bg-white min-h-[10vh] shadow-red-100 shadow-inner'>
			<div className='mx-auto h-full container flex items-center justify-center text-gray-500  '>
				<p className=' pt-10'>
					&copy; nino-multimedia {new Date().getFullYear()}{' '}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
