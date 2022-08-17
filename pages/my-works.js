import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';

const Projects = () => {
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
	return <div className='w-full pt-[10vh] px-4 min-h-[80vh] '>Projects</div>;
};

export default Projects;
