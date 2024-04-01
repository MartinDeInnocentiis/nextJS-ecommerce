import ProductDetail from "@/app/components/products/ProductDetail";


const DetailPage = ({ params }) => {
    const { slug } = params
    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Detalles</h2>
            <div className="flex gap-10"> 
                <ProductDetail slug={slug}  />
            </div>
        </main>
    )
}

export default DetailPage
