import React from 'react'
import styles from './Hero.module.css'
import  Button  from '../Helpers/Button'
import Arrow from '../Helpers/Arrow'
const Hero = () => {
  return (
<section className={`${styles.Hero} apper`}>
    <div className={`${styles.wrapper}`}>
    <div className={styles.container}>
     <div className={styles.bg}>
      <h1 className={styles.default}>São Luiz Transportes</h1>
     <h1 className={styles.mask}>São Luiz Transportes</h1>
      
      </div> 
      <div className={styles.buttons}>
        <Button type='Skinnie'>Contato</Button>
        <Button type='Full'>Passagens</Button>
      </div>
    </div>

      <div className={styles.Sobre}>
        <h3>Conheça mais sobre nós</h3>
        <Arrow Color='white'/>
      </div>
    </div>
  </section>
  )
}

export default Hero