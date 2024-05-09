"use client"
import { useState } from "react"
import Boton from "../ui/Boton"
import { db, storage } from "@/app/firebase/config"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const updateProduct = async (slug, values, file) => {
  let fileURL = values.image

  if (file) {
    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    fileURL = await getDownloadURL(fileSnapshot.ref)
  }

  const docRef = doc(db, "productos", slug)
  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    inStock: Number(values.inStock),
    price: Number(values.price),
    type: values.type,
    image: fileURL
  })
    .then(() => console.log("PRODUCTO ACTUALIZADO OK"))
}


const EditForm = ({ item }) => {
  const { title, description, inStock, price, type, image } = item
  const [values, setValues] = useState({ title, description, inStock, price, type, image })
  const [file, setFile] = useState(null)


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateProduct(item.slug, values, file)
  }

  return (
    <div className="container m-auto mt-6 max-w-lg">
      <form onSubmit={handleSubmit} className="my-12">
        <label>Nombre: </label>
        <input
          type="text"
          value={values.title}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="title"
          onChange={handleChange}
        />

        <label>Descripción: </label>
        <input
          type="text"
          value={values.description}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="description"
          onChange={handleChange}
        />

        <label>Categoría: </label>
        <input
          type="text"
          value={values.type}
          required
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="type"
          onChange={handleChange}
        />

        <label>Imagen: </label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="p-2 rounded w-full border border-blue-100 block my-4"
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

        <Boton type="submit">Guardar cambios</Boton>

      </form>
    </div>
  )
}

export default EditForm
