import './globals.css'
import Header from './components/ui/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container m-auto">
        <h1 className="text-4xl text-blue-600 text-bold my-4">APP</h1>
        <hr />
        <p className="text-base mt-4">Esta es la app</p>
      </main>
    </>
  )
}
