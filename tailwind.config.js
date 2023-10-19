/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./docs/**/*.{js,ts,vue,md}',
		'../rich-token-page/src/rich_tokens/**/*.{js,ts}',
		'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
	],
	darkMode: 'class',
	important: true,
	theme: {
		extend: {}
	},
	plugins: [
		require('flowbite/plugin')
	]
  }
