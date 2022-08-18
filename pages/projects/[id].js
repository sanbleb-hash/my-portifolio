import React, { useState } from 'react';
import Loader from '../components/Loader';
import { data } from '../asserts/data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

const DetailsPage = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const router = useRouter();
	const title = router.asPath.split('/')[2];
	const project = data.find((project) => project.name === title);

	const sliderImages = project?.image;
	const handleNext = () => {
		if (currentImage < sliderImages - 1) {
			setCurrentImage(currentImage + 1);
		}
	};
	const handlePrev = () => {
		if (currentImage > 0) {
			setCurrentImage(currentImage - 1);
		}
	};

	if (!project) {
		return (
			<h1 className=' text-gray-600 text-center '>sorry thats not available</h1>
		);
	}

	return (
		<div className='w-[80vw] pt-[10vh] px-4 min-h-[80vh] mx-auto '>
			<h1 className=' text-gray-600 pb-7 '>{title} app</h1>
			<Link href='/projects' className='cursor-pointer bg-purple-300 m-2'>
				go back
			</Link>
			<AiOutlineArrowLeft className='text-gray-600 inline-block pl-3 ' />
			<div className='flex  justify-between items-center w-full py-6 '>
				<div className='w-full h-full '>
					<div className='w-full  p-4 relative h-[40vh] shadow-xl shadow-red-200 mb-7 flex '>
						{sliderImages?.map((image, index) => (
							<Image
								key={index}
								src={image}
								alt={project.name}
								layout='fill'
								objectFit='cover'
								className='rounded-lg w-full  object-fill shadow-lg '
							/>
						))}
					</div>
					<span className='absolute top-0 left-0  w-full h-full flex justify-between items-center '>
						<AiOutlineArrowLeft
							onClick={handleNext}
							className='bg-purple-400 text-white rounded-full text-4xl cursor-pointer  '
						/>
						<AiOutlineArrowRight
							onClick={handlePrev}
							className='bg-purple-400 text-white rounded-full text-4xl cursor-pointer  '
						/>
					</span>
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
		</div>
	);
};

export default DetailsPage;
