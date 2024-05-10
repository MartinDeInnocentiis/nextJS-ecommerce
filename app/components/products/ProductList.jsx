import { mockData } from '@/app/data/products'
import ProductCard from './ProductCard'

const ProductList = async ({ categoria }) => {

    const items = await fetch (`http://localhost:3000/api/productos/${categoria}`, {
        cache: 'no-cache',
        next: {
            tags: ["productos"]
        }
    }).then(r => r.json())


    return (
        <section className='container m-auto flex justify-center items-center gap-12 flex-wrap'>
            {
                items.map(item => <ProductCard key={item.slug} item={item} />)
            }
        </section>
    )
}

export default ProductList
