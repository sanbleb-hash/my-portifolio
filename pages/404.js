import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Notfound = () => {
	return (
		<div className='w-full pt-[10vh] px-4 min-h-[80vh] grid place-items-center bg-[url("https://media.istockphoto.com/vectors/unhappy-businessman-vector-id1329000810?b=1&k=20&m=1329000810&s=170667a&w=0&h=VarFir7fvOxPHIHulBOmJDf17-CouyS7RahqCITltNc=")] bg-cover bg-center object-cover before:absolute before:bg-red-200/50 before:z-30 before:top-[10vh] before:bottom-[10vh] before:left-0 before:right-0 '>
			<div className='text-center text-2xl font-bold  text-gray-700 z-50'>
				<h1>404</h1>

				<h3>sorry, page not found</h3>
				<p>
					please check the url and try again or{' '}
					<Link href='/' passHref>
						<a className=' text-purple-600'>go back</a>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Notfound;
