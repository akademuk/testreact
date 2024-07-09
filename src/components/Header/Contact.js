import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.contact__header} onClick={toggleOpen}>
        <span className={styles.contact__label}>Гаряча лінія</span>
        <a href="tel:+380931080687" className={styles.contact__phone}>+38 093 108 06 87</a>
        <button className={styles.contact__toggle}>
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      {isOpen && (
        <div className={styles.contact__details}>
          <div className={styles.contact__detail}>
            <span>Email</span>
            <a href="mailto:rescuedfuture@gmail.com">rescuedfuture@gmail.com</a>
          </div>
          <div className={styles.contact__detail}>
            <span>Facebook</span>
            <a href="https://www.facebook.com/rescuedfuture" target="_blank" rel="noopener noreferrer">@rescuedfuture</a>
          </div>
          <div className={styles.contact__detail}>
            <span>Instagram</span>
            <a href="https://www.instagram.com/rescuedfuture" target="_blank" rel="noopener noreferrer">@rescuedfuture</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
