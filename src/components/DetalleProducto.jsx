import React from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle del producto {id}</h2>
      {/* Aquí puedes agregar la lógica para mostrar los detalles del producto */}
    </div>
  );
};

export default DetalleProducto;