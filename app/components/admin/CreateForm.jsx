"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { db, storage } from "@/app/firebase/config"

const createProduct = async (values) => {
    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, values)
        .then(() => console.log("Producto agregado!"))
}

const CreateForm = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        type: '',
        slug: '',
        image: '' 
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleInput = async (e) => {
        e.preventDefault()
        const file = e.target.files[0];
        if (!file) return;

        const storageRef = ref(storage, `images/${values.slug}`);
        const fileSnapshot = await uploadBytes(storageRef, file);
        const fileURL = await getDownloadURL(fileSnapshot.ref);

        setValues({ ...values, image: fileURL });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values);
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="image"
                    onChange={handleInput}
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.inStock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripcion: </label>
                <textarea
                    value={values.description}
                    required
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}

export default CreateForm