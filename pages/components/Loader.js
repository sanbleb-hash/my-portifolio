import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const Loader = () => {
	return (
		<div className=' w-full h-[70vh] my-auto mx-auto bg-slate-100 grid place-items-center  text-red-600 '>
			<BiLoaderAlt className=' animate-spin text-5xl ' />
		</div>
	);
};

export default Loader;
