import { products } from "../../data/products";
import Image from 'next/image'

export async function generateStaticParams () {
    return products.map((product) => ({
        id: product.id,
    }))
}

export default function ProductPage ({ params }){
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        return <h1>Product not found</h1>
    }

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold text-center">{product.name}</h1>
            <p className="text-center">{product.description}</p>
            <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg shadow-md"
            />
        </div>
    )
}