import Image from "next/image";
import Link from "next/link";

const isExternalURL = (url) => /^(http:|https:)/.test(url);

const ProductCard = ({ item }) => {
    const imageUrl = isExternalURL(item.image) ? item.image : `/imgs/products/${item.image}`;
    return (
        <article className="basis-72 shadow-lg rounded">
            <Link href={`/productos/detail/${item.slug}`}
                className="flex flex-col"
            >
                <Image
                    alt={item.title}
                    src={imageUrl}
                    width={300}
                    height={300}
                    objectFit= 'contain' 
                />

                <div className="px-4 border-t border-gray-200">
                    <h4 className="text-sm my-4">{item.title}</h4>
                    <p className="text-2xl font-semibold mb-6">${item.price}</p>
                </div>
            </Link>
        </article>
    )
}

export default ProductCard
