module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget('./_assets/sass/')
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');


    return {
        templateFormats: ['njk', '11ty.js']
    }  
};
