import React from 'react'
import {VscChecklist} from 'react-icons/vsc'
import {GiTeamIdea} from 'react-icons/gi'
import {RiTeamFill} from 'react-icons/ri'

function Nosotros() {
  return (
    <>
        <div className='nosotros'>
            <div className='nosotros__titulo'>
                  <div className='nosotros-title'>
                      <h2 className='nosotros__ti'>¿Quienes somos? </h2>
                      <p className='nosotros__des'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                      <p className='nosotros__sec'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem quibusdam magni natus eos quos itaque officia illo nulla vero iste explicabo, iure, velit totam alias tempore dolor ipsum vitae?</p>
                  </div>
                  <div className="nosotros__image">
                        <img className='image__nosotros' src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg?w=2000" width="300px"/>
                  </div>
            </div>
            <div className='nosotros__mision'>
                <div className='nosotros-mision'>
                    <h3 className='mision__title'>Nuestra Misión</h3>
                    <p className='mision__descripcion'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut at, iusto voluptas maxime magni tenetur natus? Repellendus, nulla? Repellat incidunt modi ipsa ex aspernatur distinctio tempore molestiae minus voluptate inventore. Laboriosam, eum pariatur tempora eius eligendi laborum impedit et vero possimus magni quos enim iusto dolorum voluptatum perferendis, expedita excepturi repellat officiis dolore accusantium quam beatae est laudantium dolores! Ipsum.</p>
                </div>
                <div className='nosotros__objetivos'>
                      <div className='objetivos-nos'>
                          <div className='objetivos__datos'>
                              <div className='objetivos__icon'>
                                    < VscChecklist className='icon_obj'/>
                              </div>
                              <div className='objetivos__text'>
                                  <p className='objetivos__title'>Tareas en Equipo</p>
                                  <p className='objetivos__descripcion'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nisi ut recusandae vero pariatur. Recusandae, iure aliquam, ut, fuga deleniti consequatur doloremque magni officiis obcaecati ipsa quae sequi vero quam.</p>
                              </div>
                          </div>
                          <div className='objetivos__datos'>
                              <div className='objetivos__icon'>
                                    <GiTeamIdea className='icon_obj'/>
                              </div>
                              <div className='objetivos__text'>
                                  <p className='objetivos__title'>Trabajo en Equipo</p>
                                  <p className='objetivos__descripcion'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nisi ut recusandae vero pariatur. Recusandae, iure aliquam, ut, fuga deleniti consequatur doloremque magni officiis obcaecati ipsa quae sequi vero quam.</p>
                              </div>
                          </div>
                          <div className='objetivos__datos'>
                              <div className='objetivos__icon'>
                                <RiTeamFill className='icon_obj'/>
                              </div>
                              <div className='objetivos__text'>
                                  <p className='objetivos__title'>Charlas motivacionales</p>
                                  <p className='objetivos__descripcion'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nisi ut recusandae vero pariatur. Recusandae, iure aliquam, ut, fuga deleniti consequatur doloremque magni officiis obcaecati ipsa quae sequi vero quam.</p>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nosotros