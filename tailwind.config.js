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
				'fade-in': 'fadeLeft 1s ease-in forwards',
				'fade-out': 'fadeRight 1s ease-in forewards',
				'draw-top': 'drawTop 10s ease-in-out alternate  infinite',
				'fade-leters': 'fadeLetters 1s ease-in-out alternate  infinite',
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
						transform: 'translateX(120%)',
					},
					'50%': {
						opacity: 0.5,
						transform: 'translateX(30%)',
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
						transform: 'translateY(-110px)',
					},
				},

				fadeLetters: {
					'0%': {
						opacity: 0.5,
					},
					'100%': {
						opacity: 1,
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
