import React from "react";

function Slide5({ data }) {
  return (
    <div class=" h-screen p-16 grid grid-cols-3 gap-4 break-words">
      <div class="col-span-1 bg-blue-300 text-white text-center text-5xl py-4 rounded-lg">
        <img src={data.imagen} alt="" />
      </div>
      <div class="col-span-1 bg-green-300 text-white text-center text-5xl py-4 rounded-lg"></div>
      <div class="col-span-1 bg-red-300 text-white text-center text-3xl py-4 rounded-lg ">
        <div className="">
          <h1>{data.titulo}</h1>
          <p className="text-3xl ">{data.contenido1}</p>
        </div>
      </div>
      <div class="col-span-3 bg-yellow-300 text-white text-center text-3xl py-4 rounded-lg">
        {data.contenido2}
      </div>
    </div>
  );
}

export default Slide5;
