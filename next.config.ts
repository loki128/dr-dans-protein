import type { NextConfig } from "next";

// Permanent destination for the Eden book QR code. Keep the public path stable; update only the destination when Eden moves.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/eden",
        destination: "https://eden.drdwheyprotein.com/",
        permanent: true,
      },
      {
        source: "/eden-diet",
        destination: "https://eden.drdwheyprotein.com/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;