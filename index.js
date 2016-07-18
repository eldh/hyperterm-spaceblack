'use strict';
const foregroundColor = '#eff0eb';
const backgroundColor = '#16181c';
const black = backgroundColor;
const yellow = '#f5f9c1';
const magenta = '#ff6ac1';
const brightBlack = '#2d3646';
const brightWhite = foregroundColor;

const veryLightGray = '#c5c8c6';
const lightGray = '#65737E';
const gray = '#2F3640';
const darkGray = '#282a2e';
const veryDarkGray = '#1d1f21';

const cyan = '#8abeb7';
const blue = '#81a2be';
const purple = '#B48EAD';
const green = '#acc697';
const red = '#cc6666';
const orange = '#de935f';
const lightOrange = '#EBCB8B';

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: black,
		cursorColor: brightWhite,
		colors: [
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			gray,

			// bright
			brightBlack,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			brightWhite
		],
		css: `
			${config.css || ''}
			.tab_active:before {
				border-color: ${brightBlack};
			}
		`
	});
};
