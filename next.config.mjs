/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.NATIONAL_PARK_SERVICE_API_KEY,
  }
};

export default nextConfig;
