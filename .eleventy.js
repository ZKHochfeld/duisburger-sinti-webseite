module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });

  eleventyConfig.addCollection("presse", (api) =>
    api.getFilteredByGlob("src/presse/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("veranstaltungen", (api) =>
    api.getFilteredByGlob("src/veranstaltungen/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("galerien", (api) =>
    api.getFilteredByGlob("src/galerien/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("videos", (api) =>
    api.getFilteredByGlob("src/videos/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("archiv", (api) => {
    const all = [
      ...api.getFilteredByGlob("src/presse/*.md"),
      ...api.getFilteredByGlob("src/veranstaltungen/*.md"),
      ...api.getFilteredByGlob("src/galerien/*.md"),
      ...api.getFilteredByGlob("src/videos/*.md"),
    ];
    return all.sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("datum", (dateObj) => {
    if (!dateObj) return "";
    const d = new Date(dateObj);
    return d.toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
