import React, { useState } from 'react';
import styles from './HelpMenu.module.scss';
import PartnerContent from './PartnerContent';
import DonateContent from './DonateContent';
import HelpContent from './HelpContent';

const HelpMenu = ({ onClose }) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div className={styles.helpMenu}>
      <button className={styles.helpMenu__close} onClick={onClose}>×</button>
      {activeCard === null ? (
        <div className={styles.helpMenu__cards}>
          <div className={styles.card} onClick={() => handleCardClick('partner')}>
            Стати нашим партнером
          </div>
          <div className={styles.card} onClick={() => handleCardClick('donate')}>
            Зробити донат
          </div>
          <div className={styles.card} onClick={() => handleCardClick('help')}>
            Вам потрібна допомога?
          </div>
        </div>
      ) : (
        <div className={styles.helpMenu__content}>
          <button className={styles.helpMenu__back} onClick={() => setActiveCard(null)}>Назад</button>
          {activeCard === 'partner' && <PartnerContent />}
          {activeCard === 'donate' && <DonateContent />}
          {activeCard === 'help' && <HelpContent />}
        </div>
      )}
    </div>
  );
};

export default HelpMenu;
