import React, { useState } from "react";

export default function Apoyo() {
  // Estado para guardar lo que el usuario escribe en la barra de búsqueda
  const [busqueda, setBusqueda] = useState("");

  const datos = [
    "Matemática",
    "ingles",
    "Lengua",
    "Química",
    "Apoyo Taller",
    "programacion web",
    "AGBD",
    "AED",
    "TAP",
    "Diseño de Software",
  ];

  return (
    <>
      <div className="nose">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Logo_de_la_Universidad_de_Buenos_Aires.jpg/960px-Logo_de_la_Universidad_de_Buenos_Aires.jpg"
          alt=""
          className="logo"
        />
        <input type="text" placeholder="matematica... " />
      </div>
      <h4>
        Encuentra los materiales y herramientas de la mano de otros estudiantes
      </h4>
      <h4>para mejorar tus habilidades de estudio.</h4>
    </>
  );
}
