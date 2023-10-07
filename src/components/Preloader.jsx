const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 text-white">
      <div className="animate-spin border-t-4 border-white h-14 w-14 rounded-full mr-4"></div>
      <p className="text-xl">Cargando Modelo 3D...</p>
    </div>

  )
}

export default Preloader
