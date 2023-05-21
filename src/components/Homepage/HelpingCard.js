import React from 'react'
import styles from './HelpingCard.module.scss'

const HelpingCard = ({image, title}) => {
  return (
    <div className={styles.wrapper}>
        <img className={styles.image} src={image} alt='icon'/>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default HelpingCard