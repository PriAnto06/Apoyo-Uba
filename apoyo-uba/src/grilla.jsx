import React from "react";
import "./Grilla.css"; // tu CSS de la grilla

const cards = [
  {
    name: "Matematicas",
    img: "https://i.pinimg.com/736x/11/27/fc/1127fc5b3431a9291c71c10445969741.jpg",
    className: "Fernando Michalski",
  },
  {
    name: "Ingles",
    img: "https://i.pinimg.com/736x/65/34/43/653443bd861cef14463bfb533487e6a8.jpg",
    className: "Gabriel Veronda",
  },
  {
    name: "Quimica",
    img: "https://i.pinimg.com/1200x/52/22/e3/5222e3de01d704ede991a1842c6e6ab4.jpg",
    className: "Marcela Gleiser",
  },
];

export function Grilla() {
  return (
    <div className="grid">
      {cards.map((card, index) => (
        <div key={index} className={`card ${card.className}`}>
          <img src={card.img} alt={card.name} />
          <h2>{card.name}</h2>
        </div>
      ))}
    </div>
  );
}
