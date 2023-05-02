import React from "react";
import CardService from "../components/CardService";

function Inicio() {
  return (
    <>
      <div className="inicio">
        <div className="inicio__bienvenido">
          <div className="inicio__presentacion">
            <div className="inicio__pre">
              <div className="inicio__titulo">
                <h1 className="inicio__titulo-final">Bienvenidos a SERVITEC</h1>
              </div>
              <div className="inicio__titulo-texto">
                <p className="inicio__texto-final">
                  Somos una empresa dedicada al rubro de la tecnología,
                  <br />
                  con más de 10 años de experiencia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inicio__numeros">
          <div className="inicio__numero-servicios">
            <div className="inicio__numero-dato">
              <h3 className="numero__ini">40+</h3>
              <p className="dato__servicio">Clientes Satisfechos</p>
            </div>
            <div className="inicio__numero-dato">
              <h3 className="numero__ini">30+</h3>
              <p className="dato__servicio">Trabajos realizados</p>
            </div>
            <div className="inicio__numero-dato">
              <h3 className="numero__ini">10+</h3>
              <p className="dato__servicio">Servicios disponibles</p>
            </div>
            <div className="inicio__numero-dato">
              <h3 className="numero__ini">20</h3>
              <p className="dato__servicio">Trabajadores</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="titulo__servicios">Servicios que brindamos</h3>
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
      </div>
    </>
  );
}

export default Inicio;
