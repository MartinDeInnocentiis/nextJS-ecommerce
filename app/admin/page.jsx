import ProductsTable from "../components/admin/ProductsTable"
import LogoutButton from "../components/admin/LogoutButton"

const Admin = () => {
  return (
    <div className="container m-auto">
      <LogoutButton />
      <h2 className="text-2xl my-10 border-b pb-4"> ADMIN PANEL </h2>
      <ProductsTable />
    </div>
  )
}

export default Admin
