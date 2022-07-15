/** @type {import('next').NextConfig} */
require("dotenv").config()
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTACT_SERVICE_ID: process.env.CONTACT_SERVICE_ID,
    CONTACT_TEMPLATE_ID: process.env.CONTACT_TEMPLATE_ID,
    CONTACT_PUBLIC_KEY: process.env.CONTACT_PUBLIC_KEY,
  },
}

module.exports = nextConfig
