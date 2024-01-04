import React from 'react'
import Title from '../Helpers/Title'
import styles from './Where.module.css'
import Image from '../../assets/Onibus_teste.jpg'
const Where = () => {
  return (
    <section  className='container'>
        <Title>De onde viemos?</Title>
        <div className={styles.container}>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore reiciendis dolorum soluta accusamus cumque id iure delectus earum fugit, nesciunt officiis saepe necessitatibus ea sequi sed mollitia, vitae optio sapiente voluptatibus sit aut laudantium? Ab, est. Odio veritatis maiores totam ullam laborum unde quae tempora? Tempora aliquid vero aspernatur optio sequi blanditiis totam, odit voluptates dolorum, cumque unde, animi laboriosam.</p>
          </div>
          <div className={styles.image}>
                <img src={Image} alt="" />
          </div>
        </div>
    </section>
  )
}

export default Where