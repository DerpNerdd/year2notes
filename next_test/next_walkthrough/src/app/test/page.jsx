import Link from 'next/link'


const page = () => {
  return (
    <div>
        <h1>Test Page</h1>
        <Link href="/test/subtest">Sub Page</Link><br></br>
        <Link href="/">Back</Link>
        </div>
  )
}

export default page