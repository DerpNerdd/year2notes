/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
