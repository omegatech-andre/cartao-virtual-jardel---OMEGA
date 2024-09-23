'use client'
import './index.scss'
import Image from 'next/image'
import { SiGmail, SiInstagram, SiWhatsapp } from "react-icons/si"
import { IoMenu, IoShareSocial } from "react-icons/io5";
import { useState } from 'react'

export default function Page() {
  const [isVisible, setIsVisible] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isRotate, setIsRotate] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
    setIsRotate(!isRotate)
  }

  return (
    <main>
      <div className="page">
        <div className="page__logo">
          <Image
            src='/logo.png'
            width={240}
            height={240}
          />
          <h1>Victor Jardel</h1>
          <h2>Dep.Técnico</h2>
        </div>
        {
          isVisible && (
            <>
              <div className="page__content">
                <a href="https://www.omegascreen.com.br/boletim-tecnico" target='_blank'><button className='page__content--btn'>Consulte a FISPQ e BOLETIM</button></a>
              </div>
              <div className="page__content">
                <a href="mailto:laboratorio@omegascreen.com.br,omega_ind.laboratorio@outlook.com?subject=Duvida Técnica" target='_blank'><SiGmail size={22} /></a>
                <a href="https://wa.me/558191987561" target='_blank'><SiWhatsapp size={22} /></a>
                <a href="https://www.instagram.com/omegascreen.ind/" target='_blank'><SiInstagram size={22} /></a>
                <a onClick={() => setIsModalOpen(true)}><IoShareSocial size={22} /></a>
              </div>
            </>
          )
        }
        <div className="page__btntoggle">
          <IoMenu size={30} onClick={handleClick} className={isRotate ? 'rotateX' : 'rotateY'} />
        </div>
      </div>
      {
        isModalOpen && (
          <div onClick={() => setIsModalOpen(false)} className='page__modal'>
            <div className='page__modal--content'>
              <Image width={250} height={250} src='/qrcode.png'/>
            </div>
          </div>
        )
      }
    </main >
  )
}