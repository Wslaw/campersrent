import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p>Локація</p>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26451.874331948545!2d30.496016819588728!3d50.45003324644812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce52fd799cb1%3A0x3997261b1e4a61db!2sZhytomyrska%20St%2C%20Kyiv%2C%20Ukraine%2C%2002071!5e0!3m2!1sen!2sus!4v1602717053462!5m2!1sen!2sus"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.twitter.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
        <div className={styles.contactInfo2}>
          <p>Адреса: місто Київ, вул. Житомирська 27</p>
          <p>Телефони: 044-555-666, 095258456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
