module.exports = function(eleventyConfig) {
    // Pass through the entire assets folder
    eleventyConfig.addPassthroughCopy("assets");
  
    // Add passthrough for services.html and contact.html
    eleventyConfig.addPassthroughCopy("services.html");
    eleventyConfig.addPassthroughCopy("contact.html");
  
    return {
      dir: {
        input: ".",    // The folder where your source files are (index.html, etc.)
        output: "_site" // Output folder (default is _site)
      }
    };
  };
  