import React from 'react'
import styles from './Arrow.module.css'
const Arrow = ({Color}) => {
  return (
    <div style={{color:`${Color}`}} className={styles.arrow}>⮟</div>
  )
}

export default Arrow