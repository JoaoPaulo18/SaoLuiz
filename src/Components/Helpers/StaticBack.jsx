import React from 'react'
import styles from './StaticBack.module.css'
const StaticBack = () => {
  return (
    <div className={styles.BG}>
        <div className={styles.Blur}></div>

        <div className={styles.Blob1}></div>
        <div className={styles.Blob2}></div>
    
    </div>
  )
}

export default StaticBack