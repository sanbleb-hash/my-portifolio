export const data = [
	{
		id: 1,
		name: 'music artist',

		image: ['/images/artist.png'],
		description:
			"this website is for an entrepreneur musical artist , users will find all of the latest music releases, exclusive merchandise, and exciting updates on upcoming events.The homepage features a sleek design that highlights the artist's brand and latest releases. Visitors can easily navigate to the music page, where they can stream or download the artist's music. The site offer both individual track purchases and full album downloads, making it easy for fans to support the artist in their preferred way.In addition to music,there's a variety of merchandise options. Fans can browse through the selection of t-shirts, hoodies, and accessories, all featuring the artist's unique branding and designs. We also offer limited edition items for collectors, so fans can get their hands on exclusive items that won't be available forever.the website also features a blog section, where fans can stay up-to-date on all of the artist's latest news and updates. We also offer a contact form for fans to reach out with any questions or comments they may have.Overall, the website is the perfect hub for fans to stay connected with the entrepreneur musical artist, and to support them by purchasing their music and merchandise.",

		techStack: ['reactjs,nodejs ,express & stripe,firebase'],
		link: 'https://artist-gilt.vercel.app/',
	},
	{
		id: 2,
		name: 'doctor-appointments',

		image: ['/images/doc-appointments-1.png'],
		description:
			'this app is for patients to be able to book a specific medical doctor with in a particular feild or category, to be able to create an appointment a petient has to login or register through the application first, there after they can book update and cancel appointments.then the request doctor can view his appointments decide to confirm or cancel and delete appointments. uses JWT authentication and a mongoDB database to store the appointments',

		techStack: ['reactjs,nodejs,expressjs,mongodb'],
		link: 'https://doctor-appointment-01.vercel.app/',
	},
	{
		id: 3,
		name: 'works-multimedia',

		image: ['/images/works-multmedia-1.png', '/images/works-multmedia-2.png'],
		description:
			'this is for a videographer interprenuer based in Capetown who wanted to showcase his work and have  sound portifolio for clients both see his work be able book him through the app.This app uses nodejs and MOngodb database in the backend and cloudinary storage to store the video and image assets.',

		techStack: ['reactjs | nextJS,Strapi'],
		link: 'https://works-mult-media.vercel.app/',
	},
	{
		id: 4,
		name: 'house-marketing',

		image: ['/images/house-marketing-1.png', '/images/house-marketing-2.png'],
		description:
			'this is real estate app where people can view others postings and book a viewing ,can create their own listings provided they register and login to the app ,update listings or their profiles, this is an extraction of Brad Travery real estate project but instead of using nodejs and mongoDB I used Strapi backend. uses strapi JWT authentication and postgresql database to store the listings',

		techStack: ['reactjs,Strapi'],
		link: 'https://house-market-mern-01.vercel.app/',
	},
];
