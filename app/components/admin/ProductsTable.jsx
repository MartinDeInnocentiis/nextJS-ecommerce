import React from 'react';
import Image from "next/image";
import Link from "next/link";

const ProductsTable = async () => {
    const items = await fetch(`http://localhost:3000/api/productos/todos`, {
        cache: 'no-store',
    }).then(r => r.json())

    const isExternalURL = (url) => /^(http:|https:)/.test(url);

    return (
        <div className='overflow-x-auto'>
            <table className='w-full text-xs text-left text-gray-600'>
                <thead className='text-xs text-gray-700 uppercase'>
                    <tr>
                        <th scope='col' className='px-3 py-2'>Nombre</th>
                        <th scope='col' className='px-3 py-2'>Precio</th>
                        <th scope='col' className='px-3 py-2'>En stock</th>
                        <th scope='col' className='px-3 py-2'>Tipo</th>
                        <th scope='col' className='px-3 py-2'>Imagen</th>
                        <th scope='col' className='px-3 py-2'>Slug</th>
                        <th scope='col' className='px-3 py-2'>Descripción</th>
                        <th scope='col' className='px-3 py-2'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.slug}> {/* Asegúrate de añadir una key única aquí */}
                            <td className='p-2'>{item.title}</td>
                            <td className='p-2'>{item.price}</td>
                            <td className='p-2'>{item.inStock}</td>
                            <td className='p-2'>{item.type}</td>
                            <td className='p-2'>
                                <Image
                                    src={isExternalURL(item.image) ? item.image : `/imgs/products/${item.image}`}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    unoptimized={isExternalURL(item.image)} // Añade esta propiedad si la imagen es externa
                                />
                            </td>
                            <td className='p-2'>{item.slug}</td>
                            <td className='p-2 truncate max-w-prose'>{item.description}</td>
                            <td className='p-2'>
                                <Link
                                    href={`/admin/edit/${item.slug}`}
                                    className='rounded bg-green-400 p-2 text-white'
                                >
                                    Editar
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable;
