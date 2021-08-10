// npx @11ty/eleventy --serve
module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "_site",
      output: "dist"
    }
  }
};