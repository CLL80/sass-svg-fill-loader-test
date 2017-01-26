import React from 'react'
import styles from './TestComponent.scss'

export const TestComponent = () => (
  <div>
    <div className={styles.first}>First</div>
    <div className={styles.second}>Second</div>
    <div className={styles.third}>Third</div>
  </div>
)

export default TestComponent
