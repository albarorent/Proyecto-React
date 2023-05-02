import React from 'react'

function CardService({imagen,titulo,descripcion}) {
  return (
    <>
    <div className="card__body">
          <div className="card__image">
              <img className="image__service" src={imagen} />
          </div>
          <div className="card__text">
            <h5 className="card__title">{titulo}</h5>
            <p className="card__info">
              {descripcion}
            </p>
            <a href="#" className="btn__service">Saber Más</a>
          </div>
        </div>
    </>
  )
}

export default CardService