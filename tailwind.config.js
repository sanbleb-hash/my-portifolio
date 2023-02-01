/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],

	theme: {
		extend: {
			fontFamily: {
				fila: ['Fira Code', 'monospace'],
				poppins: ['Poppins', ' sans-serif'],
			},
			animation: {
				'fade-in': 'fadeLeft 1.5s ease-in forwards',
				'fade-out': 'fadeRight 1.5s ease-in forewards',
				'draw-top': 'drawTop 4s ease-in-out alternate  infinite',
				'fade-leter': 'fade0Letter 1s ease-in-out alternate  infinite',
				'fade-leter2': 'fade1Letter 2s ease-in-out alternate  infinite',
				'fade-leter3': 'fade2Letter 3s ease-in-out alternate  infinite',
			},
			keyframes: {
				fadeLeft: {
					'0%': {
						opacity: 0,

						transform: 'translateX(-30%)',
					},
					'50%': {
						opacity: 0.5,
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(1)',
					},
				},

				fadeRight: {
					'0%': {
						opacity: 0,

						transform: 'translateX(-50%)',
					},
					'50%': {
						opacity: 0.3,
						transform: 'translateX(60%)',
					},
					'100%': {
						opacity: 1,
						transform: 'translateX(1)',
					},
				},

				drawTop: {
					'0%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-55px)',
					},

					'100%': {
						transform: 'translateY(-120px)',
					},
				},

				fade0Letter: {
					'0%': {
						opacity: 0.8,
					},

					'100%': {
						opacity: 1,
						color: '#BE90D4',
					},
				},
				fade1Letter: {
					'0%': {
						opacity: 0.8,
					},

					'100%': {
						opacity: 1,
						color: '#89729E',
					},
				},
				fade2Letter: {
					'0%': {
						opacity: 0.8,
					},

					'100%': {
						opacity: 1,
						color: '#9B59B6',
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
};
