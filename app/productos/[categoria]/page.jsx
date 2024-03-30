import ProductList from "@/components/products/ProductList";
import CategoriesMenu from "@/components/products/CategoriesMenu";

export async function generateMetadata({ params, searchParams }, parent) {

    return {
        title: `FightShop - ${params.categoria}`
    }
}


const Productos = ({ params }) => {
    const { categoria } = params
    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>
            <div className="flex gap-10">
                <CategoriesMenu />
                <ProductList categoria={categoria} />
            </div>
        </main>
    )
}