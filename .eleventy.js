const markdownIt = require("markdown-it");
const purgeCssPlugin = require("eleventy-plugin-purgecss");

module.exports = function (eleventyConfig) {
	eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy("articles/**/*.jpg");
	eleventyConfig.addPassthroughCopy("*.html");
	eleventyConfig.addPassthroughCopy("*.txt");
	eleventyConfig.addPassthroughCopy("CNAME");

	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true
	}

	eleventyConfig.addPlugin(purgeCssPlugin);

	eleventyConfig.setLibrary("md", markdownIt(markdownItOptions));
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  };
