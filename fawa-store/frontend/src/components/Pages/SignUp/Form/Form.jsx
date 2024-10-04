import React, { useState } from 'react'
import styles from './Form.module.css'

const Form = () => {

    const [cbppa, setCbppa] = useState(0);


    return (
        <div className={styles.skin}>
            <div className={styles.tsignup}>Sign Up</div>
            <form className={styles.form}>
                <input className={styles.fgmail} placeholder='gmail' type='mail' />
                <input className={styles.fsignup} placeholder='login' />
                <input className={styles.fpasswd} placeholder='password' type='password' />
                <input className={styles.fpasswdrp} placeholder='repeat password' type='password' />
                <input className={styles.fcode} placeholder='code' />
                <div className={styles.pp}>
                    <div className={styles.cbppa} onClick={() => {
                        if (cbppa === 0) {
                            setCbppa(1)
                        }
                        else {
                            setCbppa(0)
                        }
                    }}>
                        <div className={styles.cbppaa} style={{ opacity: cbppa }}>

                        </div>
                    </div>
                    <div className={styles.pptext}>asdfsdfsdf</div>
                </div>
                <div className={styles.breg}>Confirm</div>
            </form>
        </div>
    )
}

export default Form
