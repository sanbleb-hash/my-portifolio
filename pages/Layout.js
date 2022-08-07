import React from 'react';
import Footer from './components/footer';
import Navbar from './components/nav';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className='container min-h-[80vh] mx-auto prose-h1:text-6xl font-poppins bg-slate-50 py-4 text-gray700 '>
				{children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;
