import React from 'react'
import styles from './Partnes.module.css'
import Title from '../Helpers/Title'
import Onibus from '../../assets/Onibus_teste.jpg'

const Partnes = () => {
  return (
    <section className='container'>
        <Title>Nossos Parceiros</Title>
        <div className={styles.container}>
          <img src={Onibus} alt="" />
          <img src={Onibus} alt="" />
          <img src={Onibus} alt="" />
          <img src={Onibus} alt="" />
          <img src={Onibus} alt="" />
          <img src={Onibus} alt="" />
        </div>
    </section>
  )
}

export default Partnes