import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.jsx";


export default function Dropdown({ title, items, menuAbierto, toggleMenu, tipo }) {
  return (
    <div className="dropdown">
      <button onClick={() => toggleMenu(tipo)} className="dropbtn">
        {title} ▼
      </button>
      {menuAbierto === tipo && (
        <div className="dropdown-content">
          {items.map((item, i) => (
            <Link key={i} to={item.link}>
              {item.nombre}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
