import React from 'react'
import {FaHeadphonesAlt} from 'react-icons/fa'
import {AiFillBug} from 'react-icons/ai'
import {TbFileInfo} from 'react-icons/tb'
import {BiDollarCircle} from 'react-icons/bi'
function Contacto() {
  return (
    <>
      <div className='contacto'>
          <section className='contacto__section'>
              <div className='contacto__fondo'>
                  <img className='contacto__image' src="https://img.freepik.com/vector-gratis/particula-tecnologia-abstracta-realista-fondo_23-2148431735.jpg?w=996&t=st=1682827177~exp=1682827777~hmac=76904ea8ce99312cec32c92d8b60f5249bdfd5628398f860fdec3705a637c2cd" />
              </div>
              <div className='contacto__formulario'>
                  <div className='formulario'>
                      <h2 className='form__title'>Contáctanos</h2>
                      <div className='form__datos'>
                          <div className='form' action="#">
                              <form>
                                  <div className='primer__input'>
                                      <input type="text" className='input__contact' placeholder='Ingrese su nombre' />
                                  </div>
                                  <div className='primer__input'>
                                      <input type="text" className='input__contact' placeholder='Ingrese su correo' />
                                  </div>
                                  <div className='tercer__input'>
                                      <textarea className='input__contact' placeholder='Ingrese un mensaje' rows="3"></textarea>
                                  </div>
                                  <a href='#' className='btn__contacto'>Enviar</a>
                              </form>
                          </div>
                          <div className='datos__contacto'>
                              <div className='dat__contact'>
                                  <div className='dato__final'>
                                      <div className='contact__info'>
                                          <div className='contact__icon'>
                                              <div  className='contac-iconf'>
                                                <FaHeadphonesAlt className='contac_icono'/>
                                              </div>
                                          </div>

                                          <div className='contact__text'>
                                              <p className='title__info'>Soporte tecnico</p>
                                              <p>soporte@correo.com</p>
                                              <p>+51 965 849 123</p>
                                          </div>
                                      </div>
                                      <div className='contact__info'>
                                          <div className='contact__icon'>
                                              <div  className='contac-iconf'>
                                                <AiFillBug className='contac_icono'/>
                                              </div>
                                          </div>

                                          <div className='contact__text'>
                                              <p className='title__info'>Reportar un error</p>
                                              <p>soporte@correo.com</p>
                                              <p>+51 965 849 123</p>
                                          </div>
                                      </div>
                                      <div className='contact__info'>
                                          <div className='contact__icon'>
                                              <div  className='contac-iconf'>
                                                <TbFileInfo className='contac_icono'/>
                                              </div>
                                          </div>

                                          <div className='contact__text'>
                                              <p className='title__info'>Pedir informacion</p>
                                              <p>soporte@correo.com</p>
                                              <p>+51 965 849 123</p>
                                          </div>
                                      </div>
                                      <div className='contact__info'>
                                          <div className='contact__icon'>
                                              <div  className='contac-iconf'>
                                                <BiDollarCircle className='contac_icono'/>
                                              </div>
                                          </div>

                                          <div className='contact__text'>
                                              <p className='title__info'>Precios</p>
                                              <p>soporte@correo.com</p>
                                              <p>+51 965 849 123</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
    </>
  )
}

export default Contacto