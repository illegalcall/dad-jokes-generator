const {
	backgroundDarkColors,
	backgroundLightColors,
} = require('./consts');

module.exports = {
	generateSvg: (jokeText) => {
		// Image construction
		const width = 750;
		const height = 483;
		const text = jokeText;
		const words = text.split(' ');
		const lineBreak = 4;
		let newText = '';

		// Define some tspanElements w/ 4 words each
		let tspanElements = '';
		for (let i = 0; i < words.length; i++) {
			newText += words[i] + ' ';
			if ((i + 1) % lineBreak === 0) {
				tspanElements += `<tspan x="${
					width / 2
				}" dy="1.2em">${newText}</tspan>`;
				newText = '';
			}
		}
		if (newText !== '') {
			tspanElements += `<tspan x="${
				width / 2
			}" dy="1.2em">${newText}</tspan>`;
		}

		// calculate the height of the text element
		const textHeight =
			40 * (Math.floor(words.length / lineBreak) + 1);

		// use this height to approriately put the text in the middle of the svg
		const textY = (height - 23 - textHeight) / 2;
		console.log(
			'height: ' + height,
			'textHeight: ' + textHeight,
			'textY: ' + textY
		);

		console.log(tspanElements);

		//  Add background images for the svg creation

		const getBackgroundColor = (isDark) => {
			if (isDark) {
				const randomIndex = Math.floor(
					Math.random() * backgroundDarkColors.length
				);
				return backgroundDarkColors[randomIndex];
			} else {
				const randomIndex = Math.floor(
					Math.random() * backgroundLightColors.length
				);
				return backgroundLightColors[randomIndex];
			}
		};

		const isDark = Math.random() > 0.5;
		const backgroundColor = getBackgroundColor(isDark);
		const textColor = isDark ? '#ffffff' : '#000000';

		// Construct the SVG
		const svgImage = `
          <svg width="${width}" height="${height}" style="background-color:${backgroundColor}">
              <style>               
                .footerStyles {
                  font-size: 20px;
                     font-weight: bold;
                    fill: ${textColor};
                   text-anchor: middle;
                  font-family: Verdana;
              }
              </style>
              <g>
                     <text id="lastLineOfJoke" x="375" y="${textY}" font-family="Shadows Into Light" font-size="35" fill="${textColor}" text-anchor="middle">
                        ${tspanElements}
                    </text>
              </g>
              <g transform="translate(0.000000,516.000000) scale(0.05000000,-0.0500000)"
              fill="#000000" stroke="none">
              <path d="M1440 5146 c0 -3 10 -21 21 -41 22 -36 32 -135 16 -151 -4 -4 -17 -3
              -30 3 -56 25 -106 52 -154 83 -28 17 -58 30 -65 27 -8 -3 -2 -9 15 -16 16 -6
              38 -17 49 -25 17 -12 14 -13 -29 -10 -47 4 -47 4 -13 -7 19 -5 52 -15 73 -20
              23 -6 35 -14 31 -21 -4 -7 -3 -8 5 -4 11 7 100 -30 112 -47 11 -15 31 22 35
              63 2 22 -2 58 -10 80 -14 42 -9 43 32 7 46 -42 20 -121 -65 -194 -31 -27 -70
              -63 -89 -82 l-32 -33 -26 48 c-21 41 -25 45 -26 24 -1 -54 -23 -101 -71 -155
              -28 -30 -47 -55 -42 -55 15 0 72 30 78 41 4 5 11 9 16 9 16 0 -41 -89 -90
              -139 -63 -64 -138 -119 -256 -187 -233 -134 -336 -221 -397 -337 -20 -37 -32
              -69 -28 -72 4 -2 4 -24 -1 -47 -11 -58 -11 -169 0 -220 5 -24 14 -64 20 -91
              13 -55 73 -167 79 -146 4 12 109 119 118 119 1 0 1 -10 -1 -22 -3 -13 -19 -35
              -36 -50 -33 -28 -30 -35 15 -42 23 -3 28 -12 8 -13 -35 -3 -47 -8 -65 -31 -17
              -20 -18 -25 -4 -40 8 -9 18 -28 22 -41 l7 -23 -32 18 c-18 11 -63 48 -100 84
              -77 73 -90 104 -90 210 0 87 -15 140 -40 140 -48 0 -60 -191 -20 -319 24 -76
              21 -123 -5 -87 -18 23 -41 104 -49 170 -7 55 -13 67 -25 48 -13 -21 -31 10
              -37 65 -5 38 -3 52 10 62 13 11 20 11 41 -3 13 -9 26 -16 29 -16 3 0 2 46 -1
              103 -4 87 -1 117 21 209 41 173 97 265 216 353 19 15 92 64 162 111 90 60 136
              97 158 128 38 56 39 73 3 48 -61 -43 -153 -75 -153 -54 0 20 37 43 175 111
              l60 29 3 -34 c6 -70 80 -66 122 7 33 56 50 122 50 197 0 50 -5 66 -30 100 -16
              23 -48 51 -69 62 -46 23 -51 24 -51 10 0 -5 9 -10 20 -10 12 0 40 -18 63 -39
              41 -38 42 -41 45 -114 l4 -75 -48 -36 c-27 -19 -71 -43 -99 -52 -175 -59 -330
              -162 -445 -299 -36 -42 -79 -92 -96 -111 -42 -45 -64 -94 -64 -142 0 -45 -8
              -72 -21 -72 -5 0 -9 7 -9 15 0 8 -4 15 -8 15 -12 0 -41 54 -51 96 -7 29 -8 16
              -4 -51 9 -142 9 -226 0 -279 -8 -47 -9 -48 -24 -26 -11 16 -14 37 -11 78 l5
              55 -23 -26 c-14 -17 -26 -47 -30 -77 -4 -28 -8 -50 -11 -50 -11 0 -61 30 -72
              44 -16 19 -31 21 -31 4 0 -25 54 -120 82 -143 29 -25 29 -25 6 -26 -63 -3
              -143 26 -155 56 -6 17 -23 20 -23 5 0 -17 87 -69 128 -76 38 -6 40 -8 37 -38
              -1 -17 -1 -24 2 -15 2 9 16 27 30 40 l26 24 -6 -25 c-28 -107 -30 -150 -13
              -254 18 -110 40 -172 79 -220 l23 -28 -24 -47 c-28 -55 -25 -97 14 -195 21
              -53 40 -79 108 -144 111 -107 191 -146 298 -147 63 0 81 4 106 22 37 27 46 19
              63 -55 7 -29 16 -52 20 -52 4 0 13 16 20 35 15 41 12 40 71 19 25 -8 66 -14
              90 -12 l43 3 -47 46 -47 45 57 -12 c88 -19 173 -43 186 -52 6 -5 27 -15 46
              -22 41 -16 152 -92 157 -107 2 -6 -27 -35 -64 -64 -88 -69 -188 -161 -188
              -174 0 -5 -22 -23 -50 -39 -86 -50 -226 -179 -281 -260 -14 -20 -31 -36 -39
              -36 -23 0 -89 -38 -118 -68 -19 -20 -32 -49 -41 -96 -11 -51 -23 -76 -49 -105
              -90 -100 -171 -457 -171 -756 0 -139 2 -156 27 -230 52 -146 175 -300 304
              -378 123 -75 314 -138 460 -153 38 -4 94 -19 128 -34 111 -50 219 -79 370
              -100 132 -17 166 -19 285 -10 74 6 227 15 340 19 173 7 213 11 255 29 29 12
              85 23 134 27 93 6 199 38 293 87 53 27 62 37 84 87 45 100 102 284 118 380 34
              198 16 546 -38 746 -13 50 -23 91 -21 93 2 2 16 -3 32 -11 74 -38 149 -50 285
              -44 187 8 266 28 505 125 l52 21 11 -57 c17 -87 49 -170 95 -247 23 -38 55
              -94 69 -123 21 -42 32 -53 49 -52 41 4 47 0 47 -26 0 -23 -3 -25 -25 -20 -24
              6 -35 -7 -15 -19 6 -3 10 -13 10 -22 0 -12 -7 -14 -31 -9 -24 5 -38 0 -61 -19
              -16 -14 -35 -25 -42 -25 -7 0 -30 -11 -50 -25 -21 -14 -42 -23 -47 -19 -6 3
              -30 36 -54 73 -23 36 -58 81 -78 99 -40 39 -55 36 -102 -20 -22 -26 -26 -39
              -23 -79 2 -40 1 -46 -12 -39 -9 5 -45 16 -80 24 -88 22 -135 43 -204 91 -100
              69 -110 75 -128 75 -32 0 -58 -37 -58 -80 0 -35 7 -48 46 -90 27 -29 75 -64
              119 -87 l73 -37 -46 -27 c-95 -54 -117 -124 -61 -192 24 -29 29 -41 20 -50
              -39 -39 15 -121 88 -133 26 -4 42 -13 46 -24 16 -49 95 -59 161 -21 43 26 67
              26 119 1 85 -41 211 -13 280 63 22 25 56 52 75 62 19 10 51 34 70 55 43 45
              152 130 168 130 6 0 18 -13 27 -30 8 -16 27 -37 40 -46 15 -10 25 -26 25 -40
              0 -30 61 -91 101 -102 25 -6 35 -17 50 -52 19 -48 24 -146 10 -217 l-8 -41 61
              -20 c116 -38 184 -46 401 -46 204 1 213 2 327 32 179 49 220 67 364 163 181
              121 205 157 178 262 -14 54 -15 75 -4 157 13 104 18 311 12 565 -4 155 -66
              384 -132 482 -21 33 -64 83 -95 112 -30 28 -58 63 -61 77 -7 27 -58 74 -80 74
              -8 0 -14 10 -14 23 0 12 -3 32 -6 45 -7 23 -118 116 -158 131 -16 7 -27 23
              -36 56 -7 26 -24 60 -38 76 -33 40 -98 40 -174 0 -49 -25 -57 -27 -74 -14 -25
              19 -117 12 -169 -13 -40 -19 -75 -66 -75 -101 0 -20 -5 -23 -35 -23 -30 0 -35
              3 -35 23 0 13 14 45 31 73 18 27 51 87 74 133 39 78 43 83 54 63 11 -21 59
              -52 81 -52 7 0 9 8 4 23 -4 12 -8 42 -9 65 l-2 44 53 -4 c55 -3 64 1 41 21 -8
              6 -20 29 -27 51 -12 37 -12 44 8 79 26 46 62 212 62 285 -1 108 -28 166 -95
              201 -32 17 -41 29 -51 67 -8 31 -8 50 -2 56 6 6 44 9 87 7 74 -4 74 -4 16 4
              -74 9 -145 40 -202 87 -24 20 -47 33 -50 30 -11 -10 45 -61 93 -85 36 -19 43
              -26 33 -37 -6 -7 -8 -22 -4 -31 4 -10 11 -33 15 -51 7 -27 5 -34 -8 -38 -47
              -14 -105 -47 -141 -79 -38 -34 -58 -35 -45 -1 3 9 1 16 -5 16 -7 0 -20 -19
              -31 -42 -10 -24 -32 -58 -48 -77 l-29 -35 4 50 c3 35 -1 59 -14 83 -21 41 -35
              47 -57 26 -17 -17 -23 -95 -7 -95 4 0 6 10 4 23 -2 12 3 31 11 42 25 33 41 4
              43 -78 1 -39 5 -72 10 -74 4 -1 30 25 57 58 53 64 76 77 51 29 -8 -16 -15 -39
              -15 -52 1 -19 3 -17 16 11 42 97 173 191 247 177 96 -18 122 -149 73 -366 -29
              -126 -49 -150 -125 -150 -26 0 -56 7 -67 15 -27 20 -40 19 -21 -3 10 -10 14
              -21 11 -24 -3 -4 -6 -12 -8 -20 -1 -8 -13 -32 -26 -53 -14 -22 -26 -43 -28
              -47 -5 -11 47 -1 63 12 27 22 25 7 -10 -78 -56 -138 -154 -282 -256 -376 -71
              -66 -234 -150 -324 -168 -34 -7 -153 -12 -275 -12 -254 -1 -324 11 -469 81
              -177 85 -298 239 -355 453 -23 86 -24 94 -9 117 21 32 64 53 108 53 36 0 47
              13 19 24 -36 14 -74 5 -106 -24 -29 -27 -33 -28 -40 -13 -3 10 -7 54 -7 98 -1
              119 37 280 80 336 l17 24 7 -30 c13 -60 36 -111 66 -148 42 -52 62 -50 54 6
              -4 28 -1 59 10 92 26 77 76 176 86 169 20 -12 42 -72 44 -119 1 -38 6 -51 18
              -53 12 -3 17 4 17 21 0 44 40 130 99 212 45 62 63 80 82 80 36 0 38 -38 2 -71
              -25 -23 -22 -22 37 9 36 19 112 57 170 84 l105 49 -72 -71 c-40 -39 -73 -79
              -73 -89 0 -14 3 -16 13 -8 25 21 255 92 332 103 44 6 95 13 113 15 32 5 46 24
              16 24 -39 0 -267 -52 -346 -79 -49 -16 -88 -26 -88 -21 0 13 91 90 133 111 32
              17 52 49 29 49 -28 0 -130 -39 -212 -81 -53 -27 -99 -49 -103 -49 -4 0 -7 9
              -7 20 0 18 -26 40 -49 40 -12 0 -57 -48 -95 -100 -39 -54 -68 -110 -87 -170
              l-18 -55 0 43 c-1 44 -24 100 -59 140 -23 26 -34 28 -31 5 1 -10 -10 -45 -26
              -78 -44 -97 -55 -134 -55 -193 0 -54 -1 -55 -19 -38 -25 23 -62 110 -64 150
              -1 17 2 46 7 64 10 41 -8 43 -23 2 -5 -16 -15 -30 -22 -30 -24 0 -115 -53
              -159 -92 -63 -58 -136 -144 -170 -203 -29 -49 -30 -49 -23 -15 30 167 163 358
              304 437 81 45 100 49 61 12 -43 -39 -35 -50 9 -12 58 49 100 97 120 136 29 56
              0 36 -51 -35 -27 -39 -45 -55 -55 -51 -34 12 -142 -51 -217 -128 -96 -98 -144
              -196 -184 -369 -27 -117 -28 -134 -14 -125 6 3 10 15 10 27 0 30 55 127 101
              178 22 25 38 38 36 29 -6 -18 7 -100 30 -187 16 -61 33 -90 33 -57 0 19 37 75
              49 75 5 0 11 -30 14 -67 4 -55 1 -82 -19 -141 -23 -68 -25 -112 -4 -112 5 0 7
              15 4 33 -3 19 3 48 14 72 l19 40 13 -55 c33 -142 124 -302 210 -371 22 -18 40
              -36 40 -41 0 -4 -19 -8 -42 -8 -62 0 -76 -12 -43 -36 17 -13 24 -25 20 -36
              -10 -25 -42 -28 -71 -6 -19 15 -28 18 -37 9 -16 -16 -54 -13 -61 5 -3 9 3 31
              14 49 20 33 18 45 -9 45 -28 0 -402 185 -475 234 -38 26 -76 59 -83 74 -8 15
              -24 37 -35 49 -24 26 -112 47 -160 38 -28 -5 -44 1 -103 39 -38 25 -79 46 -91
              46 -17 0 -21 5 -17 18 4 15 -10 25 -72 51 -88 37 -189 52 -325 50 l-95 -1 1
              35 c2 54 33 88 110 121 244 103 419 306 484 560 53 207 6 585 -84 678 -24 25
              -111 79 -133 83 -1 1 4 19 12 40 8 22 14 53 15 69 0 46 -36 109 -84 145 -42
              31 -44 36 -48 92 -7 103 -64 130 -137 64 -33 -30 -46 -35 -87 -35 -27 0 -55
              -4 -63 -9 -8 -5 -28 0 -55 15 -23 13 -81 34 -130 47 l-88 23 39 26 c21 13 62
              31 90 37 29 7 50 17 47 22 -11 19 -103 -12 -155 -53 -34 -26 -69 -37 -69 -22
              0 4 17 27 37 52 61 74 84 112 115 190 26 66 29 83 26 168 -2 51 -6 94 -10 94
              -5 0 -8 -14 -8 -30 0 -28 -29 -98 -52 -128 -8 -9 -20 -1 -50 32 -34 40 -178
              154 -178 142z m253 -220 c-48 -44 -61 -46 -30 -3 13 17 32 50 43 72 l19 40 3
              -37 c3 -32 -2 -42 -35 -72z m-48 -153 c-10 -15 -39 -52 -64 -80 -34 -40 -52
              -53 -72 -53 -41 0 -42 13 -6 48 41 40 151 122 156 117 2 -3 -4 -17 -14 -32z
              m-220 -15 c-18 -34 -124 -178 -132 -178 -2 0 9 19 24 43 16 23 49 72 73 109
              45 70 64 84 35 26z m143 -152 c9 -5 8 -15 -4 -37 -8 -17 -13 -33 -11 -36 3 -2
              13 12 22 31 12 25 23 35 34 32 9 -2 50 -12 91 -21 41 -10 86 -23 99 -30 l25
              -13 -35 -16 -34 -17 25 20 c14 11 20 21 15 21 -6 0 -29 -19 -50 -41 -26 -27
              -33 -39 -20 -34 11 4 51 12 88 17 71 10 122 4 112 -12 -12 -19 -141 -51 -209
              -51 -46 0 -65 -4 -55 -10 20 -12 121 -11 177 3 73 18 130 58 189 134 54 68
              104 65 124 -8 21 -80 -3 -192 -56 -263 -42 -54 -45 -68 -9 -34 29 26 67 103
              79 158 l7 33 40 -38 c88 -86 92 -159 13 -284 -23 -37 -28 -55 -29 -119 -1 -65
              -6 -85 -34 -137 -42 -78 -113 -150 -177 -180 -58 -28 -150 -32 -230 -10 -51
              14 -51 15 19 37 43 13 135 64 205 113 43 30 211 212 211 228 0 5 -43 -37 -96
              -92 -141 -147 -224 -201 -379 -250 -117 -37 -299 -29 -453 18 -48 15 -53 18
              -47 40 15 59 17 82 8 82 -6 0 -13 -22 -15 -48 -3 -27 -20 -81 -39 -120 -19
              -40 -32 -72 -29 -72 4 0 19 27 35 60 16 33 33 60 38 60 22 0 186 -98 256 -153
              42 -34 148 -131 236 -217 186 -182 224 -206 315 -197 121 11 254 115 324 255
              57 114 114 340 117 462 1 42 1 43 10 15 5 -16 13 -85 20 -152 28 -313 -53
              -534 -270 -735 -126 -117 -391 -228 -650 -272 -101 -17 -402 -21 -496 -6 -27
              4 -40 8 -28 9 23 1 73 31 113 69 l24 22 -62 -6 c-34 -4 -62 -3 -62 1 0 4 21
              32 46 62 26 30 44 56 41 59 -3 3 -29 -7 -58 -22 -28 -15 -81 -33 -116 -40 -56
              -10 -63 -10 -63 5 0 14 -2 14 -10 1 -5 -8 -10 -39 -10 -69 0 -50 -3 -57 -40
              -92 -74 -70 -150 -73 -279 -12 -94 45 -205 151 -247 237 -50 106 -33 200 47
              254 29 20 42 23 89 18 30 -3 66 -8 80 -11 19 -5 22 -4 10 4 -13 10 -13 11 0
              11 30 0 44 -19 44 -59 1 -23 4 -41 8 -41 17 0 50 84 46 116 -3 23 -1 31 6 24
              26 -26 36 13 16 66 -10 26 3 60 19 50 3 -2 25 9 49 25 23 16 49 29 57 29 7 0
              16 3 19 8 2 4 -12 8 -32 8 -20 0 -50 3 -66 8 l-29 7 21 22 c24 27 46 92 36
              108 -5 8 -10 6 -16 -6 -21 -36 -124 -58 -168 -35 -27 14 -34 107 -16 193 32
              148 164 356 256 402 19 9 62 39 95 67 33 27 79 63 102 81 94 72 212 179 278
              251 l70 76 105 -3 c59 -2 111 -7 118 -11z m412 -83 c0 -3 -7 -14 -16 -24 -13
              -15 -19 -15 -42 -4 -20 10 -39 11 -72 5 -64 -13 -80 -11 -45 6 17 7 39 12 50
              9 11 -2 27 0 35 5 17 11 90 13 90 3z m-1727 -660 c14 -40 13 -41 -10 -52 -34
              -15 -78 -14 -93 4 -21 25 -6 34 30 16 36 -17 70 -17 70 0 0 5 -7 9 -16 9 -11
              0 -14 5 -10 16 3 9 6 25 6 36 0 28 6 21 23 -29z m1645 -403 c-7 -11 -16 -20
              -20 -20 -4 0 -5 -7 -2 -15 4 -9 0 -15 -9 -15 -20 0 -18 47 3 60 28 18 42 12
              28 -10z m-62 -2 c5 -7 2 -9 -7 -4 -8 4 -5 0 5 -8 24 -20 8 -21 -28 -3 -14 8
              -23 17 -19 20 10 11 41 8 49 -5z m1524 -422 c0 -2 -7 -23 -16 -47 -19 -54 -44
              -171 -44 -206 0 -14 -13 -41 -30 -60 -16 -18 -30 -38 -30 -43 0 -6 -4 -10 -9
              -10 -11 0 -31 124 -31 193 0 44 5 59 25 81 14 15 30 24 37 20 7 -4 8 -3 4 4
              -4 7 11 24 35 42 38 27 59 37 59 26z m-2279 -170 c-40 -41 -57 -47 -96 -30
              -29 13 -29 13 -5 14 14 0 45 11 70 24 63 33 69 31 31 -8z m806 -99 c-18 -41
              -11 -91 19 -139 24 -38 85 -100 92 -93 3 2 -13 21 -34 41 -34 32 -36 38 -20
              42 29 6 97 -48 124 -98 21 -39 23 -54 18 -115 -3 -38 -10 -95 -16 -125 -10
              -57 -10 -55 35 -220 18 -67 19 -184 1 -225 l-14 -30 -11 28 c-71 178 -135 263
              -232 306 -264 117 -299 145 -299 238 0 61 13 72 44 37 14 -16 26 -24 26 -18 0
              15 -134 142 -195 184 -27 18 -86 50 -132 70 l-83 37 153 6 c164 7 336 37 462
              81 39 13 71 25 73 25 1 1 -4 -14 -11 -32z m-922 -13 c9 -15 42 -51 74 -81 l56
              -54 -44 22 c-55 28 -131 99 -131 122 0 26 26 20 45 -9z m4179 -107 c-8 -27 -8
              -128 0 -155 10 -31 -5 -27 -39 8 -31 33 -32 25 2 143 9 29 -11 18 -40 -23 -16
              -22 -38 -45 -49 -51 -18 -10 -18 -7 5 22 14 19 30 45 35 59 9 23 14 25 51 22
              37 -4 41 -7 35 -25z m90 -49 c14 -10 0 -10 -43 -2 -33 7 -37 17 -20 61 l11 28
              20 -40 c12 -22 26 -43 32 -47z m-3023 57 c83 -18 159 -49 159 -65 0 -6 -5 -20
              -10 -30 -6 -11 -15 -43 -20 -72 -15 -75 1 -127 94 -319 42 -88 77 -212 63
              -226 -4 -3 -28 9 -54 26 -58 38 -152 84 -222 107 -40 13 -58 14 -76 6 -21 -10
              -25 -8 -35 21 -26 72 -28 127 -9 224 21 105 18 151 -15 209 -26 46 -90 94
              -131 97 -28 2 -45 13 -45 30 0 13 227 7 301 -8z m270 -145 c61 -36 74 -40 137
              -40 88 0 128 -14 148 -52 9 -16 13 -32 10 -35 -16 -16 215 -162 311 -196 38
              -14 91 -39 117 -56 26 -16 70 -35 97 -42 39 -10 48 -16 43 -28 -30 -69 -10
              -106 52 -96 26 3 45 2 49 -5 11 -17 51 -11 71 11 15 16 16 24 6 39 -17 27 -15
              30 14 30 14 0 34 5 44 10 15 8 28 5 57 -13 21 -13 99 -56 174 -95 143 -75 196
              -118 229 -182 23 -45 53 -163 39 -154 -5 3 -9 -2 -9 -10 0 -47 -360 -156 -515
              -156 -46 0 -66 7 -127 43 -73 42 -246 204 -322 299 -21 26 -43 45 -49 41 -6
              -3 -7 -1 -3 6 4 6 -11 33 -37 64 -24 28 -63 79 -87 112 -43 58 -300 329 -300
              315 0 -13 44 -65 146 -171 68 -72 135 -156 204 -260 118 -176 150 -241 213
              -429 59 -174 81 -335 81 -585 0 -219 -19 -323 -96 -516 l-50 -129 -71 -40
              c-74 -43 -194 -83 -287 -94 l-55 -7 45 38 c68 58 113 104 106 110 -3 3 -37
              -24 -76 -60 -69 -64 -174 -127 -212 -127 -22 0 -22 -6 2 62 10 30 22 92 26
              136 6 73 9 81 29 85 38 7 56 -9 43 -38 -15 -33 -3 -71 24 -79 64 -17 109 3
              132 59 19 45 46 60 139 78 122 25 207 96 207 175 0 20 14 60 33 96 42 77 48
              100 35 137 -14 42 -42 42 -97 1 -36 -26 -36 -26 7 21 74 82 100 166 66 215
              -31 45 -101 18 -174 -66 l-40 -47 29 60 c53 108 65 233 25 266 -22 18 -71 15
              -95 -7 -12 -10 -39 -54 -61 -98 -46 -91 -112 -167 -183 -207 -59 -34 -61 -34
              -68 -12 -3 10 -15 43 -26 73 -18 47 -20 63 -11 110 11 61 4 101 -29 154 -29
              47 -70 62 -109 42 -17 -9 -33 -24 -36 -34 -5 -15 -34 9 -150 123 -119 115
              -150 152 -175 204 -45 96 -46 121 -11 235 22 71 30 118 30 171 0 52 4 76 15
              85 20 17 82 5 155 -31 33 -16 64 -29 68 -29 5 0 31 -16 58 -35 27 -19 54 -35
              60 -35 38 0 14 117 -60 285 -73 164 -79 188 -73 260 8 101 17 105 118 45z
              m-961 -25 c10 -11 9 -18 -4 -30 -26 -27 -40 -94 -27 -137 23 -76 138 -151 288
              -187 44 -10 93 -26 110 -35 36 -18 108 -97 116 -126 4 -17 0 -20 -27 -20 -66
              0 -127 -30 -193 -97 -36 -35 -71 -78 -78 -96 l-14 -32 -26 59 c-65 146 -286
              421 -379 471 -20 11 -36 24 -36 29 0 13 64 69 153 133 43 31 81 62 84 69 7 18
              18 18 33 -1z m3954 -145 c14 -17 28 -47 32 -68 4 -20 20 -66 35 -101 30 -66
              38 -145 19 -181 -22 -40 -121 -53 -163 -20 -34 27 -55 113 -39 159 9 24 8 31
              -1 30 -7 -1 -33 3 -58 10 -35 10 -46 17 -43 29 3 10 6 41 7 71 l2 55 55 22
              c80 33 122 31 154 -6z m-247 -16 c23 -23 25 -30 19 -82 -6 -45 -13 -63 -36
              -84 -57 -53 -108 -49 -173 12 l-42 39 26 48 c23 42 33 51 85 70 77 28 90 28
              121 -3z m-278 -237 c11 -10 12 -8 6 11 -8 26 -3 27 35 7 68 -35 110 -143 110
              -284 0 -203 -91 -361 -252 -440 -83 -41 -141 -49 -187 -24 -48 25 -68 57 -88
              137 -14 58 -15 81 -5 145 11 76 54 191 71 191 13 0 41 -75 41 -110 0 -17 5
              -30 10 -30 16 0 1 78 -25 137 -18 40 -35 60 -71 83 -26 16 -55 30 -63 30 -8 0
              32 23 90 52 90 45 116 64 194 142 l90 91 16 -63 c9 -34 21 -68 28 -75z m652
              88 c24 -19 50 -35 56 -35 7 0 20 -14 29 -32 21 -40 13 -131 -14 -167 -25 -34
              -80 -40 -106 -12 -18 19 -18 21 3 47 27 35 28 106 1 174 -29 74 -29 73 31 25z
              m-580 -11 c42 -45 70 -54 164 -51 100 2 102 1 136 -95 12 -31 29 -64 38 -72
              10 -9 52 -19 101 -25 47 -5 86 -14 88 -20 2 -6 8 -9 13 -5 5 3 9 0 9 -6 0 -8
              13 -10 37 -7 27 4 44 0 61 -14 39 -30 98 -25 132 11 l28 30 57 -62 c81 -91
              127 -192 171 -378 41 -176 42 -225 5 -410 -16 -80 -34 -132 -77 -220 -49 -99
              -68 -126 -134 -192 -66 -65 -96 -85 -202 -138 -114 -57 -133 -63 -234 -76 -60
              -8 -122 -19 -139 -24 -23 -8 -32 -7 -41 5 -27 36 -21 301 7 329 3 3 41 15 84
              26 44 11 99 30 122 41 62 30 147 111 190 180 27 45 40 58 52 53 26 -11 52 -6
              72 12 23 21 24 38 4 57 -13 13 -13 16 0 21 20 7 19 55 -1 63 -8 3 -26 1 -40
              -6 -24 -11 -25 -10 -19 23 10 52 -12 174 -45 245 -36 76 -148 196 -221 236
              -67 36 -74 25 -9 -17 35 -22 45 -34 33 -35 -10 -1 -43 -5 -74 -8 -44 -5 -58
              -11 -62 -24 -4 -17 4 -19 78 -23 96 -5 153 -32 204 -97 56 -70 70 -117 73
              -234 2 -59 4 -107 6 -107 2 0 16 7 31 15 27 13 41 11 41 -6 0 -5 -12 -15 -27
              -23 l-28 -14 28 -11 c29 -11 35 -29 15 -49 -19 -19 -54 -14 -70 10 -14 21 -16
              19 -46 -46 -32 -69 -134 -182 -153 -171 -5 4 -9 2 -9 -3 0 -5 -6 -9 -12 -10
              -7 0 -31 -5 -53 -11 -22 -5 -61 -12 -88 -14 -55 -6 -72 11 -54 50 17 37 -1 47
              -63 34 -57 -12 -88 -8 -142 22 -66 36 -71 89 -21 194 30 63 25 90 -20 98 -59
              11 -114 -25 -144 -94 -8 -18 -23 -42 -34 -54 -10 -11 -19 -29 -19 -38 0 -45
              -43 -103 -86 -115 -22 -6 -99 35 -157 83 -16 13 -39 23 -52 23 -47 0 -161 146
              -214 275 -29 69 -38 108 -62 258 -7 48 -16 74 -21 69 -11 -11 12 -174 37 -262
              8 -30 17 -66 20 -80 6 -36 57 -130 67 -124 4 3 8 -2 8 -10 0 -8 7 -19 16 -24
              9 -5 15 -12 15 -15 -3 -15 12 -57 18 -53 3 2 7 -8 7 -22 1 -15 11 -58 23 -97
              26 -86 27 -156 4 -193 -27 -41 -76 -79 -114 -88 -13 -3 -34 -8 -45 -11 -20 -5
              -22 -1 -26 70 -4 85 -14 101 -87 147 l-45 28 35 21 c19 12 42 21 51 21 9 0 26
              11 37 25 15 20 25 24 45 19 31 -7 56 10 56 38 0 10 7 21 15 24 35 14 4 74 -39
              74 -17 0 -35 22 -83 103 -115 192 -128 234 -127 412 0 110 4 140 23 195 13 36
              29 71 36 78 8 9 52 15 131 19 197 10 236 7 277 -19 48 -31 51 -43 22 -86 -59
              -87 -81 -243 -50 -350 22 -73 56 -109 121 -128 49 -14 59 -14 107 0 70 20 161
              80 219 144 97 109 140 310 99 467 -29 108 -65 166 -116 183 -46 15 -41 11 -49
              40 -7 20 -4 22 27 22 23 0 41 -8 58 -26z m273 -12 c3 -5 -1 -9 -9 -9 -8 0 -12
              4 -9 9 3 4 7 8 9 8 2 0 6 -4 9 -8z m-3977 -47 c115 -57 312 -261 348 -360 20
              -55 35 -78 35 -54 0 24 21 40 36 28 10 -8 19 1 38 38 42 84 157 173 223 173
              25 0 31 -7 52 -61 14 -33 24 -75 24 -92 -1 -18 -2 -58 -4 -89 -1 -48 4 -69 31
              -125 27 -56 59 -93 176 -208 120 -119 144 -147 154 -185 23 -82 17 -138 -20
              -210 -31 -58 -34 -73 -32 -139 1 -60 -2 -81 -19 -108 -24 -38 -32 -40 -66 -13
              -28 22 -58 25 -98 10 -21 -8 -33 -6 -56 7 -28 17 -33 16 -139 -11 -99 -26
              -122 -28 -221 -24 -103 5 -116 8 -183 42 -95 48 -203 132 -241 185 -27 38 -30
              50 -28 109 l1 67 -45 34 c-49 38 -63 64 -63 117 0 61 32 108 89 132 28 11 51
              26 51 31 0 15 2 15 -85 -18 l-77 -30 18 27 c9 15 24 38 33 52 l15 25 -28 -25
              c-15 -14 -43 -52 -61 -85 -92 -163 -87 -358 12 -453 l44 -43 -25 -20 c-43 -34
              -29 -79 25 -79 15 0 31 6 36 13 5 8 9 2 13 -18 6 -37 33 -44 69 -17 18 13 37
              18 54 15 15 -3 34 0 42 7 11 9 20 8 42 -7 102 -70 351 -96 518 -53 120 31 131
              28 169 -47 l17 -33 -28 0 c-16 0 -43 4 -61 9 -17 5 -32 6 -32 1 0 -11 37 -20
              86 -20 45 0 40 5 81 -97 7 -17 -101 -47 -143 -40 -36 6 -47 -7 -16 -17 17 -6
              84 4 140 20 28 8 28 1 -4 -53 -14 -24 -24 -49 -21 -56 2 -7 15 10 29 37 30 59
              42 47 27 -26 -9 -43 -21 -62 -63 -104 -41 -42 -64 -56 -119 -73 -103 -32 -266
              -44 -477 -37 -370 13 -518 39 -681 121 -201 99 -331 240 -390 421 -71 219 35
              887 158 990 19 16 26 33 29 69 4 52 32 105 68 128 13 9 50 23 82 33 68 19 73
              22 55 33 -21 13 -1 40 91 126 l83 77 79 -5 c64 -4 92 -12 153 -42z m3920 29
              c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m528 -145 c47 -42 48
              -81 3 -109 -35 -22 -72 -20 -97 5 -13 13 -12 18 6 37 11 13 26 40 33 61 6 20
              13 37 15 37 3 0 20 -14 40 -31z m-231 -58 c4 -5 -3 -7 -14 -4 -23 6 -26 13 -6
              13 8 0 17 -4 20 -9z m-57 -317 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2
              13 -5z m74 -41 c13 -16 12 -17 -3 -4 -10 7 -18 15 -18 17 0 8 8 3 21 -13z
              m-2997 -334 c41 -33 51 -64 52 -179 1 -58 5 -128 9 -157 l7 -52 -33 -15 c-49
              -21 -12 -19 53 3 127 44 204 111 268 236 70 135 110 165 146 110 20 -31 15
              -111 -12 -195 -22 -68 -110 -160 -197 -205 -58 -30 -78 -53 -32 -35 85 32 217
              122 251 171 63 92 154 106 154 24 0 -90 -115 -220 -256 -290 -49 -25 -80 -45
              -70 -45 11 0 48 16 83 35 35 19 70 35 78 35 7 0 44 20 81 45 36 25 73 45 81
              45 23 0 26 -28 8 -75 -13 -35 -30 -55 -78 -89 -79 -55 -151 -92 -213 -107 -27
              -6 -53 -16 -59 -20 -18 -17 25 -9 107 22 146 53 147 54 161 40 19 -19 -11 -61
              -79 -107 -55 -37 -70 -41 -165 -54 -142 -18 -229 -15 -334 10 -55 13 -102 19
              -124 15 l-37 -6 -12 73 c-7 40 -24 97 -38 127 l-25 54 38 39 c38 39 38 40 35
              112 -2 63 2 85 33 164 35 91 35 91 23 168 l-12 77 28 23 c33 29 46 30 80 3z
              m2470 -45 c22 -8 20 -24 -10 -78 -29 -51 -33 -114 -14 -186 16 -58 46 -86 104
              -94 34 -5 58 -17 82 -39 l34 -32 -14 -76 c-11 -54 -13 -97 -7 -149 l7 -73 -52
              -24 c-110 -50 -235 -53 -329 -7 l-50 24 68 -5 c39 -2 67 0 67 5 0 6 -22 10
              -49 10 -102 0 -198 44 -230 107 -11 21 -10 21 19 6 50 -24 220 -44 220 -24 0
              5 -37 11 -82 13 -89 5 -164 34 -209 80 -32 34 -62 106 -55 133 6 22 9 21 61
              -30 35 -35 73 -60 107 -73 68 -24 118 -34 118 -22 0 5 -17 12 -37 15 -102 17
              -168 60 -226 147 -97 147 -66 233 49 138 74 -62 143 -92 221 -97 61 -3 65 -2
              41 9 l-27 13 21 45 c13 27 24 75 27 122 7 83 22 110 76 134 34 15 47 17 69 8z
              m-3836 -82 c67 -80 104 -161 109 -239 l5 -68 -35 -23 c-62 -41 -94 1 -36 49
              l32 26 -36 22 c-51 31 -85 106 -93 204 -5 48 -3 77 3 77 5 0 28 -22 51 -48z
              m2265 -13 c12 -7 54 -35 92 -65 55 -41 88 -57 150 -75 139 -38 157 -47 234
              -119 l74 -70 -8 -48 c-14 -79 -10 -110 15 -137 13 -14 30 -25 38 -25 8 0 2 12
              -17 29 -33 31 -41 74 -21 125 15 39 -3 71 -75 138 -80 74 -96 116 -70 172 10
              21 29 45 43 54 24 16 26 15 60 -23 19 -22 52 -66 73 -97 22 -32 60 -73 85 -90
              104 -75 108 -79 112 -149 3 -49 -1 -75 -17 -112 -25 -57 -25 -58 -8 -54 17 3
              10 -49 -11 -85 -20 -34 -99 -70 -167 -76 -36 -3 -64 2 -98 17 -27 12 -57 21
              -67 21 -10 0 -22 9 -25 20 -3 11 -15 25 -26 30 -13 7 -19 21 -19 44 0 21 -8
              40 -21 52 -11 10 -26 32 -34 49 -7 16 -23 39 -36 51 -37 32 -99 67 -99 55 0
              -6 19 -20 43 -32 76 -38 99 -97 56 -140 -26 -26 -59 -21 -137 18 -65 33 -92
              65 -92 109 0 39 47 92 108 123 37 19 38 19 77 -1 22 -11 57 -36 78 -56 20 -20
              37 -30 37 -24 0 27 -54 64 -182 126 -183 88 -256 167 -214 231 18 27 36 31 69
              14z m968 -16 c13 -16 12 -17 -3 -4 -17 13 -22 21 -14 21 2 0 10 -8 17 -17z
              m48 -87 c-9 -8 -10 -8 -6 0 7 12 -16 38 -24 29 -3 -2 -6 5 -6 16 -2 19 1 18
              23 -6 20 -21 23 -30 13 -39z m388 12 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7
              2 -19 0 -25z m1227 -120 c-4 -154 -29 -290 -68 -367 -26 -50 -29 -70 -8 -57 5
              3 19 37 32 75 l24 70 13 -32 c28 -64 13 -126 -39 -173 -29 -27 -157 -111 -228
              -151 -125 -70 -312 -120 -490 -129 -219 -12 -548 34 -536 75 8 27 20 105 19
              126 0 16 1 16 4 3 5 -22 4 -23 50 4 34 20 52 23 168 24 133 2 151 -2 187 -38
              22 -22 18 -22 159 11 172 41 247 69 320 122 24 17 49 4 49 -26 0 -21 4 -25 31
              -25 56 0 108 72 160 219 10 29 16 58 12 64 -3 5 -1 7 5 4 6 -5 13 9 17 34 4
              22 24 77 45 122 21 45 43 105 51 134 7 29 16 50 20 48 4 -3 5 -64 3 -137z
              m-1268 3 c-5 -8 -56 -3 -56 5 0 2 14 4 31 4 16 0 28 -4 25 -9z m304 -27 c0 -2
              -9 -4 -21 -4 -11 0 -18 4 -14 10 5 8 35 3 35 -6z m130 -67 c13 4 13 3 0 -6
              -11 -9 -4 -10 30 -6 l45 5 -40 -10 c-38 -10 -40 -9 -80 32 -34 36 -35 38 -5
              12 19 -18 42 -30 50 -27z m-750 -19 c0 -12 -3 -18 -7 -14 -10 10 -11 46 -1 40
              4 -3 8 -15 8 -26z m-5 -58 c3 -5 -15 -24 -42 -42 -26 -18 -68 -51 -93 -74 -47
              -42 -104 -84 -114 -84 -18 0 -2 29 18 34 29 7 121 82 121 99 0 6 7 12 15 12 8
              0 33 11 54 25 34 21 37 25 20 31 -16 6 -16 8 -2 8 9 1 20 -3 23 -9z m-2197
              -58 c45 -56 72 -143 79 -252 7 -114 3 -119 -88 -127 -58 -6 -62 -5 -54 13 35
              82 38 107 26 168 -7 34 -28 97 -47 140 -19 44 -34 81 -34 82 0 3 40 11 67 13
              14 1 32 -12 51 -37z m3609 3 c0 -8 -4 -12 -9 -9 -5 3 -6 10 -3 15 9 13 12 11
              12 -6z m-13 -23 c3 -5 -1 -9 -9 -9 -8 0 -12 4 -9 9 3 4 7 8 9 8 2 0 6 -4 9 -8z
              m-34 -26 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z
              m-2072 -88 c5 -44 -60 -78 -154 -78 -42 0 -59 5 -83 26 -34 28 -40 64 -16 84
              12 10 21 8 51 -10 52 -33 112 -31 138 4 18 23 22 24 40 12 12 -7 22 -24 24
              -38z m1974 15 c-6 -2 -9 -10 -6 -15 4 -7 2 -8 -5 -4 -13 9 -5 26 12 25 9 0 8
              -2 -1 -6z m-92 -53 c-8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 8 5 20 10 25 10 6
              0 3 -5 -5 -10z m-1852 -22 c48 -48 -71 -115 -133 -74 -33 22 -32 33 8 40 17 3
              46 15 62 25 36 23 47 25 63 9z m1812 -2 c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9
              4 6 10 25 14 25 6z m-423 -43 c-3 -3 -11 -2 -17 2 -9 6 -9 10 1 16 14 8 27 -7
              16 -18z m-377 -17 c0 -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z
              m497 -12 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-420 -10 c-3
              -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m-2407 -79 c38 -20 47 -38
              60 -118 8 -54 8 -74 -4 -101 -13 -30 -20 -35 -58 -40 -60 -7 -463 -21 -579
              -20 -104 2 -239 21 -239 34 0 5 11 17 24 28 21 16 48 20 163 25 156 7 240 28
              311 76 24 17 69 35 100 41 63 12 100 28 151 65 40 29 35 29 71 10z m280 -22
              c0 -25 -30 -53 -56 -53 -29 0 -46 28 -32 53 20 39 88 39 88 0z"/>
              <path d="M1245 4433 c-42 -6 -105 -51 -137 -100 -31 -46 -47 -103 -29 -103 6
              0 11 13 11 29 0 20 14 44 46 80 38 43 57 54 105 68 32 9 56 20 53 25 -3 4 -8
              7 -12 6 -4 0 -20 -3 -37 -5z"/>
              <path d="M1432 4355 c-40 -13 -90 -35 -110 -49 -54 -37 -127 -104 -121 -111 3
              -3 32 19 65 49 59 53 137 100 156 94 5 -2 -18 -23 -52 -47 -73 -51 -188 -164
              -213 -209 -30 -52 -4 -36 41 26 42 57 86 98 194 182 39 30 53 47 45 52 -7 5
              -8 8 -1 8 22 0 22 -13 0 -44 -36 -48 -88 -146 -79 -146 5 0 22 26 38 58 17 31
              53 81 82 110 28 28 46 52 40 51 -7 0 -45 -11 -85 -24z"/>
              <path d="M438 3104 c-51 -27 -45 -114 11 -168 17 -17 37 -26 48 -23 15 3 13 6
              -9 15 -74 30 -92 162 -23 162 14 0 25 4 25 9 0 16 -26 19 -52 5z"/>
              <path d="M2105 3080 c-13 -21 -88 -52 -116 -48 -34 5 -39 -7 -7 -16 26 -6 96
              24 123 54 10 11 15 20 12 20 -3 0 -9 -5 -12 -10z"/>
              <path d="M1740 2595 c0 -34 73 -47 90 -15 7 14 7 20 0 20 -5 0 -10 -7 -10 -15
              0 -9 -9 -15 -24 -15 -25 0 -51 22 -39 33 3 4 1 7 -5 7 -7 0 -12 -7 -12 -15z"/>
              <path d="M2173 1749 c-37 -14 -40 -55 -7 -90 58 -61 133 -13 94 61 -13 24 -59
              39 -87 29z m71 -28 c22 -24 17 -65 -7 -69 -51 -10 -86 23 -72 68 8 26 56 27
              79 1z"/>
              <path d="M2357 1460 c-33 -48 25 -116 76 -89 48 26 58 58 27 89 -27 27 -84 27
              -103 0z m94 -9 l24 -19 -25 -27 c-32 -34 -71 -31 -84 7 -18 52 37 78 85 39z"/>
              <path d="M522 898 c-36 -36 19 -218 104 -348 49 -74 69 -97 138 -157 47 -41
              86 -56 86 -32 0 12 -80 89 -92 89 -4 0 -32 33 -63 73 -65 88 -123 208 -131
              274 -13 118 -17 126 -42 101z"/>
              <path d="M1140 5010 c0 -6 11 -14 23 -19 36 -14 74 -66 82 -109 6 -39 -23
              -150 -47 -179 -8 -10 -6 -13 6 -13 27 0 59 85 60 157 1 49 -4 67 -22 92 -12
              17 -21 31 -19 31 19 0 101 -58 109 -76 13 -28 28 -32 28 -6 -1 21 -23 52 -39
              52 -7 0 -9 5 -5 12 4 6 3 8 -2 5 -6 -3 -23 1 -39 8 -68 32 -135 54 -135 45z"/>
              <path d="M4186 3917 c-4 -24 -4 -52 0 -63 11 -30 96 -126 104 -117 4 4 15 38
              25 76 10 37 20 65 22 63 10 -10 4 -98 -8 -112 -24 -30 1 -25 43 7 l43 34 -27
              -33 c-34 -41 -35 -52 -5 -53 l22 0 -22 -9 c-13 -5 -23 -14 -23 -20 0 -13 12
              -13 47 1 38 15 87 13 123 -6 22 -12 28 -12 24 -2 -7 18 -62 37 -110 38 -35 0
              -32 2 31 18 161 42 306 36 421 -19 91 -44 158 -111 178 -181 24 -78 20 -89
              -14 -51 -23 24 -30 28 -30 15 1 -24 34 -63 54 -63 8 0 18 -4 21 -10 7 -12 91
              -12 155 -1 54 10 49 12 -59 14 l-83 2 -27 77 c-15 42 -40 93 -56 113 -38 51
              -130 108 -207 130 -93 26 -251 24 -351 -4 -44 -13 -81 -20 -84 -18 -5 5 108
              116 132 130 8 4 15 12 15 18 0 6 -15 -1 -33 -15 -19 -15 -37 -26 -41 -26 -4 0
              -28 -14 -52 -31 -25 -17 -48 -28 -51 -25 -4 3 -4 6 -1 6 3 0 -1 26 -8 57 -7
              32 -11 68 -8 80 4 13 2 23 -3 23 -5 0 -9 -8 -10 -18 -2 -20 -40 -139 -52 -160
              -5 -10 -18 -2 -45 29 -36 39 -38 44 -34 95 6 64 -7 72 -16 11z"/>
              <path d="M4167 3843 c9 -27 23 -56 31 -66 22 -25 12 -28 -48 -17 -220 42 -386
              -24 -592 -233 -55 -56 -118 -129 -140 -161 -21 -32 -50 -68 -64 -78 -13 -11
              -31 -27 -40 -36 -19 -18 -101 -65 -156 -89 -21 -9 -38 -20 -38 -24 0 -9 102
              36 167 73 60 34 95 67 158 151 94 123 148 183 202 225 28 23 54 46 58 51 10
              17 128 80 190 101 73 25 166 26 265 1 41 -10 83 -22 93 -26 27 -11 20 6 -17
              45 -36 39 -66 90 -66 115 0 8 -4 15 -9 15 -6 0 -3 -21 6 -47z"/>
              <path d="M4300 3706 c0 -16 28 -42 36 -33 7 6 -18 47 -28 47 -5 0 -8 -6 -8
              -14z"/>
              <path d="M4045 3703 c-52 -13 -28 -21 62 -21 82 1 113 -4 182 -27 45 -15 85
              -24 88 -21 3 3 -3 8 -13 12 -10 3 -47 17 -81 30 -61 23 -194 38 -238 27z"/>
              <path d="M4784 3701 c3 -5 20 -12 38 -15 34 -6 111 -61 135 -96 8 -11 19 -20
              24 -20 21 0 -73 98 -115 118 -43 22 -92 30 -82 13z"/>
              <path d="M3985 3623 c-88 -27 -149 -55 -195 -88 -55 -41 -126 -113 -118 -120
              3 -3 31 19 62 50 92 92 248 153 399 155 16 0 26 4 22 10 -9 15 -113 11 -170
              -7z"/>
              <path d="M4240 3565 c-47 -39 -85 -84 -78 -91 3 -2 25 15 49 38 24 24 58 53
              74 65 21 15 25 22 13 22 -9 1 -35 -15 -58 -34z"/>
              <path d="M4563 3305 c-82 -15 -173 -43 -188 -58 -7 -6 -2 -7 15 -2 14 4 48 13
              75 22 59 17 263 29 227 13 -30 -13 -140 -88 -164 -112 -22 -22 -14 -46 9 -26
              15 12 55 29 115 48 26 8 28 6 33 -28 17 -101 27 -142 37 -142 6 0 7 8 3 18 -4
              9 -11 53 -16 97 -11 92 -17 115 -27 99 -8 -13 -103 -56 -109 -50 -6 5 138 86
              153 86 21 0 24 29 4 40 -24 13 -77 11 -167 -5z"/>
              <path d="M4024 3121 c-47 -12 -100 -57 -118 -102 -18 -44 -22 -149 -6 -149 7
              0 8 13 5 33 -10 53 10 108 55 152 36 35 47 40 88 40 33 0 57 -7 79 -22 35 -26
              55 -30 47 -10 -6 18 -84 67 -104 66 -8 -1 -29 -4 -46 -8z"/>
              <path d="M5071 3074 c-31 -39 -25 -50 10 -20 50 42 79 29 79 -35 0 -47 -8 -69
              -26 -69 -8 0 -14 -4 -14 -10 0 -5 7 -10 16 -10 18 0 44 57 44 97 0 69 -69 98
              -109 47z"/>
              <path d="M4603 2868 c-24 -5 -43 -13 -43 -18 0 -6 9 -6 23 -1 123 46 228 -4
              256 -124 6 -28 9 -33 10 -15 1 33 -31 100 -60 127 -46 42 -99 51 -186 31z"/>
              <path d="M4604 2772 c-11 -38 -77 -171 -124 -247 -100 -164 -259 -337 -376
              -407 -59 -36 -198 -88 -236 -88 -15 0 -18 4 -13 18 14 34 19 105 6 98 -6 -4
              -11 -19 -11 -34 0 -15 -9 -42 -20 -60 -11 -18 -20 -35 -20 -37 0 -12 81 -3
              147 15 40 11 79 17 87 14 20 -8 21 -30 1 -38 -42 -16 3 -21 183 -21 173 0 202
              2 235 19 118 58 172 192 184 451 5 131 -8 291 -27 323 -9 15 -10 15 -16 -6z
              m-318 -567 c10 -42 -19 -75 -66 -75 -22 0 -40 3 -40 6 0 8 82 90 92 92 4 1 10
              -9 14 -23z m133 -66 c-14 -27 -93 -62 -119 -54 -25 8 -27 27 -2 23 11 -2 16 3
              14 13 -5 31 66 65 101 47 14 -7 15 -13 6 -29z m-273 -77 c-14 -14 -19 -14 -48
              -1 l-32 16 45 26 44 27 3 -26 c2 -15 -3 -34 -12 -42z"/>
              <path d="M4355 2140 c-8 -13 5 -13 25 0 13 8 13 10 -2 10 -9 0 -20 -4 -23 -10z"/>
              <path d="M4190 2770 c-52 -17 -146 -63 -178 -87 -41 -31 -35 -44 6 -14 61 43
              176 91 219 91 24 0 43 5 43 10 0 12 -54 12 -90 0z"/>
              <path d="M3983 2693 c-46 -54 -73 -93 -73 -108 0 -3 17 3 38 14 56 28 229 81
              246 75 8 -3 17 -1 21 5 13 21 -61 11 -158 -23 -53 -18 -93 -28 -87 -21 5 6 8
              14 5 17 -3 3 13 26 36 51 22 26 36 47 31 47 -5 0 -31 -26 -59 -57z"/>
              <path d="M3830 2445 c-7 -9 -30 -25 -51 -35 -20 -11 -39 -26 -43 -35 -28 -75
              44 -144 119 -115 41 16 114 72 115 89 0 7 -20 -5 -44 -27 -48 -44 -82 -58
              -120 -48 -36 9 -56 33 -56 67 0 23 7 32 38 48 43 22 66 45 60 62 -2 7 -9 5
              -18 -6z"/>
              <path d="M3555 2433 c-80 -47 -107 -67 -96 -71 6 -2 33 12 58 32 25 20 51 36
              57 36 6 0 -14 -18 -45 -40 -51 -36 -96 -86 -87 -96 2 -2 24 17 47 42 24 24 46
              42 49 39 3 -3 0 -11 -6 -17 -14 -14 -16 -28 -4 -28 5 0 16 16 25 35 9 20 33
              45 52 56 19 12 35 23 35 25 0 11 -59 2 -85 -13z"/>
              <path d="M4659 2133 c-5 -16 -22 -38 -37 -50 -15 -13 -22 -23 -16 -23 15 0 61
              51 69 78 9 32 -4 27 -16 -5z"/>
              </g>
              <text x="${width - 150}" y="${
			height - 10
		}" class="footerStyles">Developed by @Dhruv </text>
          </svg>
        `;

		const svgBuffer = Buffer.from(svgImage);

		return { svgBuffer, backgroundColor };
	},
};
