/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images:{
    domains: ["edamam-product-images.s3.amazonaws.com"],
    // loader: "custom",
    // path: "/",
  }
}



module.exports = nextConfig