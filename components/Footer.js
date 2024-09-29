import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navLinks}>
        <a href="#">Home</a>
        <a href="#">Speakers</a>
        <a href="#">Schedule</a>
        <a href="#">Contact</a>
      </div>

      {/* Divider Line */}
      <div className={styles.divider}></div>

      <div className={styles.socialIcons}>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </footer>
  );
};

export default Footer;
