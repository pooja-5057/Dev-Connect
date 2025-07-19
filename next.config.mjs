/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
       
    },
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname: "images.pexels.com"
            },
            
        ],
    },
};

export default nextConfig;
