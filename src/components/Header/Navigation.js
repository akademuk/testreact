import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__item}><a href="#home" className={styles.navigation__link}>головна</a></li>
        <li className={styles.navigation__item}><a href="#meta" className={styles.navigation__link}>мета</a></li>
        <li className={styles.navigation__item}><a href="#partners" className={styles.navigation__link}>партнери</a></li>
        <li className={styles.navigation__item}><a href="#news" className={styles.navigation__link}>новини</a></li>
        <li className={styles.navigation__item}><a href="#reports" className={styles.navigation__link}>звіти</a></li>
        <li className={styles.navigation__item}><a href="#team" className={styles.navigation__link}>команда</a></li>
        <li className={styles.navigation__item}><a href="#contacts" className={styles.navigation__link}>контакти</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
