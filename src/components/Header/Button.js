import React, { useState } from 'react';
import styles from './Button.module.scss';
import HelpMenu from './HelpMenu';

const Button = () => {
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);

  const toggleHelpMenu = () => {
    setIsHelpMenuOpen(!isHelpMenuOpen);
  };

  return (
    <>
      <button className={styles.button} onClick={toggleHelpMenu}>
        ДОПОМОГТИ +
      </button>
      {isHelpMenuOpen && <HelpMenu onClose={toggleHelpMenu} />}
    </>
  );
};

export default Button;
