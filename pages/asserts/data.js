export const data = [
	{
		id: 1,
		name: 'doctor-appointments',

		image: ['/images/doc-appointments-1.png'],
		description:
			'this app is for patients to be able to book a specific medical doctor with in a particular feild or category, to be able to create an appointment a petient has to login or register through the application first, there after they can book update and cancel appointments.then the request doctor can view his appointments decide to confirm or cancel and delete appointments. uses JWT authentication and a mongoDB database to store the appointments',

		techStack: ['reactjs,nodejs,expressjs,mongodb'],
	},
	{
		id: 2,
		name: 'works-multimedia',

		image: ['/images/works-multmedia-1.png', '/images/works-multmedia-2.png'],
		description:
			'this app is for a videographer interprenuer based in Cape to who wanted to showcase his work and have  sound portifolio to be able to provide clients with what he is able to do then clients can book him through the app.This app uses Strapi backend therefore postgresql database to store the videos and images.',

		techStack: ['reactjs | nextJS,Strapi'],
	},
	{
		id: 3,
		name: 'house-marketing',

		image: ['/images/house-marketing-1.png', '/images/house-marketing-2.png'],
		description:
			'this is real estate app where people can view others postings and book a viewing ,can create their own listings provided they register and login to the app ,update listings or their profiles, this is an extraction of Brad Travery real estate project but instead of using nodejs and mongoDB I used Strapi backend. uses strapi JWT authentication and postgresql database to store the listings',

		techStack: ['reactjs,Strapi'],
	},
];
