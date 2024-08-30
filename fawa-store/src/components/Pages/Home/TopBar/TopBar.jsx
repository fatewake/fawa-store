import React from 'react'
import styles from './TopBar.module.css'
import { Link } from 'react-router-dom'
import SecondPage from '../SecondPage/SecondPage'

const TopBar = () => {
  const handleScroll = () => {
    const height = window.innerHeight;
    window.scrollTo({
      top: window.pageYOffset + height,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.skin}>
      <Link to="/"><div className={styles.logo}>Fawa store</div></Link>
      <div className={styles.buttons}>
        <div className={styles.button} onClick={handleScroll}>Why us?</div>
        <div className={styles.button}>FAQ</div>
        <div className={styles.button}>Catalog</div>
      </div>
      <div className={styles.logsign}>
        <div className={styles.button}>Log In</div>
        <div className={styles.button}>Sign Up</div>
      </div>
      <div className={styles.botline}></div>
    </div >
  )
}

export default TopBar
