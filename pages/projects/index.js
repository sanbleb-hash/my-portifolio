import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { data } from '../../asserts/data';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Projects = () => {
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
		<div className='w-full pt-[10vh] px-4 min-h-[80vh] '>
			<h1>my projects</h1>
			<div className='flex flex-wrap justify-start'>
				{data.map((project) => (
					<div key={project.id} className='w-full md:w-1/2 lg:w-1/3 p-4'>
						<div className='bg-white shadow-md rounded-lg p-4'>
							<div className='flex justify-between items-center flex-col '>
								<h2 className='text-2xl font-bold'>{project.name}</h2>
								<div className='flex'>
									{project.techStack.map((tech, index) => (
										<span
											key={index}
											className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
										>
											{tech}
										</span>
									))}
								</div>
							</div>
							<div className='flex justify-between gap-2 mt-4'>
								<div className='flex-1 '>
									<Image
										src={project.image[0]}
										alt={project.name}
										width={200}
										height={200}
										className='rounded-lg object-fill shadow-lg '
									/>
								</div>
								<div className='flex  flex-1 flex-col justify-between'>
									<p className='text-gray-700 text-base'>
										{project.description.substring(0, 80)} ...
									</p>
									<button
										className=' w-full bg-purple-200  text-gray-400 py-1 hover:text-gray-100 rounded-md mb-3 shadow-lg md:'
										onClick={() => router.push(`/projects/${project.name}`)}
									>
										see details
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
