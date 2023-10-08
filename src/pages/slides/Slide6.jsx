import React from "react";

function Slide5({ data }) {
  return (
    <div class=" h-screen p-16 grid grid-cols-6 grid-rows-3 gap-4 break-words">
      <div class="row-span-2 col-span-2 bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">
        <img src={data.imagen} alt="" />
      </div>
      <div class="row-span-2 col-span-2 bg-green-300 text-white text-center text-5xl py-4 rounded-lg"></div>
      <div class="row-span-2 col-span-2 bg-red-300 text-white text-center text-3xl py-4 rounded-lg ">
        <div className="">
          <p className="text-3xl ">{data.titulo}</p>
        </div>
      </div>
      <div class="row-span-1 col-span-3 bg-yellow-300 text-white text-center text-3xl py-4 rounded-lg">
        {data.contenido1}
      </div>
      <div class="row-span-1 col-span-3 bg-yellow-300 text-white text-center text-3xl py-4 rounded-lg">
        {data.contenido2}
      </div>
    </div>
  );
}

export default Slide5;
