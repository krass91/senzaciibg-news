/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true, domains: ["images.unsplash.com", "i.ibb.co"] },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_REPO: process.env.GITHUB_REPO || "krass91/senzaciibg-news",
  },
};
module.exports = nextConfig;