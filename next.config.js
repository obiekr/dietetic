/** @type {import('next').NextConfig} */

require("dotenv").config();


const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  images:{
    domains: ["edamam-product-images.s3.amazonaws.com"],
    // loader: "custom",
    // path: "/",
  },
  env:{
    APPID: process.env.APP_ID,
    APPKEY: process.env.APP_KEY,
  }
}




module.exports = nextConfig