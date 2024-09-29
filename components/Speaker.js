import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social icons
import styles from './Speaker.module.css'; // Import the CSS module

const speakers = [
  {
    name: 'Sri Sri Ravi Shankar',
    img: 'https://i0.wp.com/wisdom.srisriravishankar.org/wp-content/uploads/image_6483441-15-scaled-e1696715200841.jpg?fit=2560%2C1574&ssl=1',
    social: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
  },
  {
    name: 'Mohan Bhagwat',
    img: 'https://img.theweek.in/content/dam/week/news/india/images/2018/10/19/rss-bhagwat-pti.jpg',
    social: {
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith',
      instagram: 'https://instagram.com/janesmith',
    },
  },
  {
    name: 'Jaya Kishori',
    img: 'https://blackhattalent.com/wp-content/uploads/2024/01/Jaya-Kishori.jpg',
    social: {
      twitter: 'https://twitter.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson',
      instagram: 'https://instagram.com/alexjohnson',
    },
  },
  {
    name: 'Narendra Modi',
    img: 'https://c4.wallpaperflare.com/wallpaper/915/675/763/narendra-modi-prime-minister-presentation-wallpaper-preview.jpg',
    social: {
      twitter: 'https://twitter.com/emilydavis',
      linkedin: 'https://linkedin.com/in/emilydavis',
      instagram: 'https://instagram.com/emilydavis',
    },
  },
  {
    name: 'Murari Bapu',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Morari_Bapu.png/1200px-Morari_Bapu.png',
    social: {
      twitter: 'https://twitter.com/michaelbrown',
      linkedin: 'https://linkedin.com/in/michaelbrown',
      instagram: 'https://instagram.com/michaelbrown',
    },
  },
  {
    name: 'Sadhguru',
    img: 'https://www.dnpindia.in/wp-content/uploads/2023/08/Sadhguru-4.jpg',
    social: {
      twitter: 'https://twitter.com/sarahwilson',
      linkedin: 'https://linkedin.com/in/sarahwilson',
      instagram: 'https://instagram.com/sarahwilson',
    },
  },
];

const Speaker = () => {
  return (
    <section className={styles.sectionSpacing}>
      <h1 className={styles.speakerTitle}>Who's Speaking</h1>
      <div className={styles.speakerGrid}>
        {speakers.map((speaker, index) => (
          <div className={styles.speakerCard} key={index}>
            <img src={speaker.img} alt={speaker.name} />
            <div className={styles.speakerInfo}>
              <h3>{speaker.name}</h3>
              <div className={styles.socialLinks}>
                <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href={speaker.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add an hr after the section with spacing */}
      <hr />
    </section>
  );
};

export default Speaker;
