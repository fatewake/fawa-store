import React from 'react'
import styles from './SecondPageBlock.module.css'

const SecondPageBlock = ({ photoSrc, rtext, text }) => {
  return (
    <div className={styles.block}>
      <div className={styles.photo} style={{ backgroundImage: `url(${photoSrc})` }}></div>
      <div>
        <div className={styles.rtext}>{rtext}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  )
}

export default SecondPageBlock
