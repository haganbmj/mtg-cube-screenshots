const Pageres = require('pageres');

/**
 * Some explicit css to ensure there are no margins/padding.
 * Only because I don't mind the margins when I view packs in browser.
 */
const css = 'html, body, #pack { margin: 0; padding: 0; }';

/**
 * Opens `n` instances of `cube-pack.html` with size `1085x902` and outputs
 * screenshots to `output`.
 */
function doPageres(n) {
	return new Pageres({ delay: 1 })
		.src('cube-pack.html', ['1085x902'],
			{
				css: css,
				crop: true,
				filename: '<%= date %>-<%= time %>-' + n
			})
		.dest('output')
		.run();
}

const numberOfPacks = process.argv[2] || 1;

console.log('Generating %s pack(s)', numberOfPacks);

for (let i = 0; i < numberOfPacks; i++) {
	doPageres(i);
}
