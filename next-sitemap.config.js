const { Company } = require("./app/lib/company.ts");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: Company.link,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
