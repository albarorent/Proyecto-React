import React from "react";
import CardService from "../components/CardService";

function Servicios() {
  return (
    <>
      <h3 className="titulo__servicios">Nuestros Servicios</h3>
      <div className="card__servicio">
      <CardService
        imagen="/servicio_internet.jpg"
        titulo="Servicio de Internet"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        suscipit debitis aperiam enim neque porro sed, nisi magnam
        exercitationem quia voluptates."
      />
      <CardService
        imagen="/servicio_internet.jpg"
        titulo="Servicio de Cable"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        suscipit debitis aperiam enim neque porro sed, nisi magnam
        exercitationem quia voluptates."
      />
      <CardService
        imagen="/servicio_internet.jpg"
        titulo="Servicio de Software"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        suscipit debitis aperiam enim neque porro sed, nisi magnam
        exercitationem quia voluptates."
      />
      <CardService
        imagen="/servicio_internet.jpg"
        titulo="Servicio de la nube"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        suscipit debitis aperiam enim neque porro sed, nisi magnam
        exercitationem quia voluptates."
      />
      <CardService
        imagen="/servicio_internet.jpg"
        titulo="Servicio de Base de datos"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        suscipit debitis aperiam enim neque porro sed, nisi magnam
        exercitationem quia voluptates."
      />
      <CardService
        imagen="/servicio_internet.jpg"
        titulo="Servicio de machine learning"
        descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        suscipit debitis aperiam enim neque porro sed, nisi magnam
        exercitationem quia voluptates."
      />
      </div>
    </>
  );
}

export default Servicios;
