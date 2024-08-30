import React from 'react'
import styles from './TopBar.module.css'
import { Link } from 'react-router-dom'

const TopBar = () => {

  return (
    <div className={styles.skin}>
      <Link to="/"><div className={styles.logo}>Fawa store</div></Link>
      <div className={styles.buttons}>
        <div className={styles.button}>Why us?</div>
        <div className={styles.button}>FAQ</div>
        <div className={styles.button}>Catalog</div>
      </div>
      <div className={styles.logsign}>
        <div className={styles.button}>Log In</div>
        <div className={styles.button}>Sign Up</div>
      </div>
      <div className={styles.botline}></div>
    </div>
  )
}

export default TopBar
