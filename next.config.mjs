import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
    env: {
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'xmfrzjqbkoyflgaxdlzj.supabase.co',
        },
    
      ],
    },

  };

  const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  });
   
  // Merge MDX config with Next.js config

  export default withMDX(nextConfig);