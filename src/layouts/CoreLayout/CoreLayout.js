import React from 'react'
import Header from 'components/Header'
import styles from './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
