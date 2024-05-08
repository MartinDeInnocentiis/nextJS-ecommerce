"use client"
import { useState } from "react"
import Boton from "../ui/Boton"

const EditForm = () => {
    const [values, setValues] = useState({
        title: '',
        description: '',
        inStock: 0,
        price: 0,
        type: '',
        slug: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
        })
    }

  return (
    <div>
      
    </div>
  )
}

export default EditForm
