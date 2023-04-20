import React, { useState } from 'react';
import Loader from '../components/Loader';
import { data } from '../../asserts/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

const DetailsPage = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const router = useRouter();
	const title = router.asPath.split('/')[2];
	const altTitle = title.replaceAll('%20', ' ');
	const project = data.find((project) => project.name === altTitle);

	const sliderImages = project?.image;
	const handleNext = (direction) => {
		if (direction === 'right') {
			setCurrentImage(currentImage + 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	return (
		<div className=' w-[95%] md:w-[80vw] pt-[10vh] px-4 min-h-[80vh] mx-auto '>
			{!project ? (
				<h1 className='pt-[10vh] text-gray-600 text-center '>
					sorry thats was`t available
				</h1>
			) : (
				<>
					<h1 className=' text-gray-600 pb-7 '>{altTitle} app</h1>

					<div className=' w-full flex  justify-between items-center  py-6 '>
						<div className='w-full min-h-screen  p-2 '>
							<div className='w-full  p-2 relative min-h-[80vh] shadow-lg  py-7 flex items-center '>
								{sliderImages?.map((image, index) => (
									<Image
										key={index}
										src={image}
										alt={project.name}
										layout='fill'
										objectFit='cover'
										className='rounded-lg w-full h-full  object-cover shadow-lg '
									/>
								))}
							</div>

							<div className='bg-white shadow-md rounded-lg p-4'>
								<div className='flex justify-between items-start gap-4 flex-col '>
									<h2 className='text-2xl font-bold'>{project.name}</h2>
									<h2 className='  tracking-widest bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
										{project.techStack}
									</h2>
									<div className='flex'>
										<p className='bg-gray-200 rounded-md leading-7  px-3 py-1 text-sm tracking-wider font-semibold text-gray-700 mr-2'>
											{project.description}
										</p>
									</div>
									<a
										rel='nooperner noreferrer'
										href={project.link}
										target='_blank'
										className='bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'
									>
										visit site
									</a>
								</div>
							</div>
						</div>
					</div>
					<Link href='/projects' className='cursor-pointer bg-purple-300 m-2'>
						go back
					</Link>
				</>
			)}
		</div>
	);
};

export default DetailsPage;
