import Image from "next/image"

const Footer = () => {
  return (
    <footer className='w-full bg-gray-100 border-t'>
      <div className='container m-auto py-2 text-sm text-gray-700 flex justify-between items-center'>
        <p> FightFever Shop</p>

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
