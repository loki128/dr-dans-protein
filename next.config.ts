import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/eden",
        destination: "https://app-eight-bice-66.vercel.app/",
        permanent: true,
      },
      {
        source: "/eden-diet",
        destination: "https://app-eight-bice-66.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;