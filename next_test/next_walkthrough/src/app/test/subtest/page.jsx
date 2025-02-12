import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
    <div>
        <h1>SubTest Page</h1>
        <Image
        src="https://res.cloudinary.com/dmrevelyc/image/upload/v1738014633/jolt_banner_pics/banner_67857cf6607bf309a2a5acfd_1738014631969.jpg"
        alt="stupid ahh baby"
        width={500}
        height={200}
    />
        <Link href="/test">Back</Link>
      </div>
  )
}

export default page