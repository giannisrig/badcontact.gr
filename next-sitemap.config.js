/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://badcontact.gr',
    generateIndexSitemap: false,
    generateRobotsTxt: true, // (optional)
}
