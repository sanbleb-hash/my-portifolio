import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';

const About = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 0.3 * 1000);
	}, []);

	if (isLoading) {
		return <Loader />;
	}
	return (
		<div className=' min-h-screen pt-20 text-gray-600 px-4'>
			{router.pathname === '/' ? (
				<h1 className='text-center text-3xl py-4 font-bold'> more about me</h1>
			) : (
				<h1 className='text-center text-3xl py-4 font-bold'>
					hie its blessings here
				</h1>
			)}

			{router.pathname === '/about-me' && (
				<div className='flex justify-center'>
					<div className='w-1/2 relative pr-2'>
						<Image
							src='/images/hero-image.jpg'
							alt='profile'
							layout='fill'
							objectFit='cover'
						/>
					</div>
					<div className='w-1/2'>
						{/* <img
						src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
						alt='profile'
						className='w-full h-full object-cover'
					/> */}
					</div>
				</div>
			)}
			<h2 className=' text-3xl tracking-widest py-3'>skills and experience</h2>
			<p className=' leading-6 p-2 bg-white tracking-wider'>
				2 years of experience in the web Software developer, with knowledge and
				comfidence working with existing API | NodeJs & MongoDB database, react
				| nextjs , HTML, CSS, tailwindcss, Styled-Components and javascript.
				Presently working as a freelancer with a passion for web development.
			</p>
			<h2 className=' text-3xl tracking-widest py-3'>tech stacks</h2>
			<ul className=' leading-6 p-2 bg-white tracking-wider'>
				<li className=' list-disc'>React, NextJS</li>
				<li className=' list-disc'>NodeJS, Express, MongoDB, Strapi</li>
				<li className=' list-disc'>
					HTML, CSS, TailwindCSS, Styled-Components
				</li>
			</ul>
			<p className=' pt-5 text-gray-400 tracking-wider text-xl inline-block'>
				check out some of my{' '}
				<Link href='/my-works' passHref>
					<a className='text-purple-400  text-xl  underline hover:text-red-300'>
						projects
					</a>
				</Link>
			</p>
			<a className='text-purple-400  text-xl ml-6 underline hover:text-red-300'>
				<Link href='/contact'>hire me</Link>
			</a>
		</div>
	);
};

export default About;
