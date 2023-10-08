
const Slide2 = ({ data }) => {
  return (

    <div className='h-screen p-16 grid grid-cols-3 grid-rows-4 gap-6 break-words'>
      <div className='row-span-2 bg-blue-500 text-white text-center text-2xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          1<h1 className="font-bold">{data.titulo}</h1>
          <p className="font-semibold text-xl">
            {data.contenido1}
          </p>
        </div>

      </div>
      <div className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>2
        <p>{data.contenido2}</p>
      </div>
      <div className='row-span-4 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido3}
          </p>
        </div>
      </div>
      <div className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>
        <div className="flex flex-col items-center justify-center h-full px-6">
          <p className="font-semibold text-2xl">
            {data.contenido4}
          </p>
        </div>
      </div>
      <div className='row-span-2 bg-blue-500 text-white text-center text-5xl py-4 rounded-lg'>5
        <p>{data.contenido5}</p>
      </div>
    </div>
  )
}

export default Slide2
