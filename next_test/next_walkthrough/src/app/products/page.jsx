import Link from "next/link"
import { products } from "../data/products"

export default function ProductsPage() {
    return (
        <div className="container flex justify-center items-center px-4 py-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-center text-3xl font-bold text-gray-900">
                        Products
                    </h1>
                </div>
                <ul className="divide-y divide-gray-200">
                    {products.map((product) => (
                        <li key={product.id} className="py-4">
                            <Link className="text-xl text-center inline-block align-middle font-medium text-gray-700 hover:text-gray-900" href={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
