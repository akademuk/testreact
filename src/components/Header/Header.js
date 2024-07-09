import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Contact from './Contact';
import Button from './Button';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <Navigation />
        <Contact />
        <Button />
      </div>
    </header>
  );
};

export default Header;
