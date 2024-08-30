import React from 'react'
import styles from './Privacy.module.css'
import FooterPage from './FooterPage/FooterPage'
import TopBar from './TopBar/TopBar'
import Main from './Main/Main'
import RuleBlock from './RuleBlock/RuleBlock'

const Privacy = () => {
  return (
    <div styles={styles.skin}>
      <TopBar></TopBar>
      <Main>
        <RuleBlock></RuleBlock>
      </Main>
      <FooterPage></FooterPage>
    </div>
  )
}

export default Privacy
