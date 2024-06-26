import { mockData } from '@/app/data/products'
import Image from 'next/image'
import QtySelector from "./QtySelector.jsx"
import GoBack from "../ui/GoBack"

const isExternalURL = (url) => /^(http:|https:)/.test(url);

const ProductDetail = async ({ slug }) => {

    const item = await fetch (`http://localhost:3000/api/product/${slug}`, {
        cache: 'force-cache',
        next: {
            revalidate: 0
        }
    }).then(res => res.json())
    .catch(err => console.error('Error fetching product:', err));
    const imageUrl = isExternalURL(item.image) ? item.image : `/imgs/products/${item.image}`;


    return (
        <div className='max-w-4xl m-auto'>
            <GoBack className="text-sm text-blue-500 underline mb-6" />
            <section className='flex gap-6'>
                <div className='relative basis-1/2'>
                    <Image
                        src={imageUrl}
                        alt={item.title}
                        width={860}
                        height={860}
                    />
                </div>
                <div className='basis-1/2'>
                    <h2 className='text-2xl font-semibold border-b border-gray-200 pb-4 mb-4'>{item.title}</h2>
                    <p className='text-4xl'>$ {item.price}</p>

                    <QtySelector item={item} />
                </div>
            </section>

            <section className='mt-12'>
                <h3 className='text-xl font-semibold border-b border-gray-200 pb-4 my-4'>Descripcion</h3>
                <p className='text-gray-600'>{item.description}</p>
            </section>
        </div>
    )
}

export default ProductDetail
