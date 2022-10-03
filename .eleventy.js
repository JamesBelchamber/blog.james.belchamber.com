const Image = require('@11ty/eleventy-img');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

async function imageShortcode(src, alt, sizes) {
	let metadata = await Image(src, {
	  widths: [300, 600, ],
	  formats: ["avif", "jpeg"],
	  outputDir: "./_site/img/"
	});

	let imageAttributes = {
	  alt,
	  sizes,
	  loading: "lazy",
	  decoding: "async",
	};
  
	return Image.generateHTML(metadata, imageAttributes);
  }

  async function cssBackgroundShortcode(src) {
	let background = await Image(src, {
		widths: [1200],
		formats: ["jpeg"],
		outputDir: "./_site/img/"
	});
  
	return `background-image: url("${background.jpeg[0].url}");`;
  }

module.exports = function (eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
	eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
	eleventyConfig.addJavaScriptFunction("image", imageShortcode);
	eleventyConfig.addNunjucksAsyncShortcode("cssbackground", cssBackgroundShortcode);
	eleventyConfig.addJavaScriptFunction("cssbackground", cssBackgroundShortcode);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
  };
