import React from "react";
import "./Grilla.css"; // tu CSS de la grilla

const cards = [
  {
    name: "Matematica",
    img: "https://i.pinimg.com/736x/11/27/fc/1127fc5b3431a9291c71c10445969741.jpg",
  },
  {
    name: "Ingles",
    img: "https://i.pinimg.com/736x/65/34/43/653443bd861cef14463bfb533487e6a8.jpg",
  },
  {
    name: "Quimica",
    img: "https://i.pinimg.com/1200x/52/22/e3/5222e3de01d704ede991a1842c6e6ab4.jpg",
  },
  {
    name: "AGBD",
    img: "https://i.pinimg.com/736x/f3/78/fe/f378fe13f884fa9417c0ebff36ab05fd.jpg",
  },
  {
    name: "AED",
    img: "https://i.pinimg.com/736x/96/27/93/9627931ce425e9483e7c1c1647f53a5e.jpg",
  },
  {
    name: "TAP",
    img: "https://i.pinimg.com/736x/cf/db/70/cfdb70005d1b9930354fc0166b936b3f.jpg",
  },
  {
    name: "Programacion Web",
    img: "https://i.pinimg.com/736x/00/5d/c1/005dc1e96cbd4b8e4755c500c34118bb.jpg",
  },
  {
    name: "Diseño de Software",
    img: "https://i.pinimg.com/736x/3d/6a/6c/3d6a6c4ea071378b66b3c6530af3b78c.jpg",
  },
];

export function Grilla() {
  return (
    <div className="grid">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{card.name}</h2>
          <img src={card.img} alt={card.name} />
        </div>
      ))}
    </div>
  );
}
