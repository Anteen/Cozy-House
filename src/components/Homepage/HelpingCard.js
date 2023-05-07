import React from 'react'
import styles from '../../styles/HelpingCard.module.css'

const HelpingCard = ({image, title}) => {
  return (
    <div className={styles.wrapper}>
        <img className={styles.image} src={image} />
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default HelpingCard