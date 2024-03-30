"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/productos/todos", },
    { label: "Kimonos", href: "/productos/kimonos", },
    { label: "Guantes", href: "/productos/guantes", },
    { label: "Accesorios", href: "/productos/accesorios", },
]

const CategoriesMenu = () => {
    const pathname = usePathname()
    return (
        <aside className="flex flex-col gap-3">
            {links.map(link => (
                <Link
                    label={link.label}
                    href={link.href}
                    className={`${pathname === link.href ? "font-semibold border-b" : ''} py-2`}
                >
                    {link.label}
                </Link>
            ))}
        </aside>
    )
}

export default CategoriesMenu
