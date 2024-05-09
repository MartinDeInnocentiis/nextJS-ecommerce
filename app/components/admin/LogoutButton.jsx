"use client"

import { useAuthContext } from "../context/AuthContext"
import Boton from "../ui/Boton"


const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <Boton onClick={logout} className="bg-red-500 mt-4"> Cerrar Sesión </Boton>

}

export default LogoutButton
