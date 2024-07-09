import React from 'react';
import styles from './Logo.module.scss';
import logo from './../../assets/images/logo.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Логотип" className={styles.logo__image} />
      <span className={styles.logo__text}>Врятоване майбутнє</span>
    </div>
  );
};

export default Logo;
