import React from 'react'
import TestComponent from 'components/TestComponent/TestComponent'
import styles from './Header.scss'

export const Header = () => (
  <div>
    <h1 className={styles.heading}>SVG fill loader with sourcemapping test</h1>
    <div className={styles.test} />
    <TestComponent />
  </div>
)

export default Header
