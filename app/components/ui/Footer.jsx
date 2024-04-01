import Image from "next/image"

const Footer = () => {
  return (
    <footer className='w-full bg-gray-100 border-t mt-7'>
      <div className='container m-auto py-2 text-sm text-gray-700 flex justify-between items-center'>
        <div>
          <p className="m-2"> 2024 - FightFever Shop - © Copyright.</p>
          <hr />
          <p className="m-2"> Todos los derechos reservados</p>
        </div>
        
        <div className='flex items-center gap-2'>
          <p>Powered by</p>
          <Image
            src={"/next.svg"}
            alt="Next Logo"
            width={50}
            height={50}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
