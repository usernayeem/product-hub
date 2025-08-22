/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Allow all HTTPS domains (Universal)
      {
        protocol: "https",
        hostname: "**",
      },
      // Allow all HTTP domains (for localhost/development)
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
