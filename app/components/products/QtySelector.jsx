"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"
import { useCartContext } from "../context/CartContext"


const QtySelector = ({ item }) => {

    const  {addToCart} = useCartContext()

    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
            <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Add to cart</Boton>
        </div>
    )
}

export default QtySelector
