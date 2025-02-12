/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // images: {
    //   domains: ["res.cloudinary.com"],
    // },
    images:{
        remotePatterns:[{
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dmrevelyc/image/upload/**',
    }],
    }
  
};

export default nextConfig;
