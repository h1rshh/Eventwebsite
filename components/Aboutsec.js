import React from 'react';
import styles from './Aboutsec.module.css';
import { IoCheckmark } from "react-icons/io5";

const Aboutsec = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="https://www.simerjeetsingh.com/images/5.webp" alt="About" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h1>About Conference</h1>
        <p>
          When I first got into the online advertising business, I was looking for the magical combination that would
          put my website into the top search engine rankings, catapult me to the forefront of the minds or individuals
          looking to buy my product, and generally make me rich beyond my wildest dreams! After succeeding in the
          business for this long, I’m able to look back on my old self with this kind of thinking and shake my head.
        </p>
        <ul>
          <li><IoCheckmark style={{ color: 'red' }}/> Write On Your Business Card</li>
          <li><IoCheckmark style={{ color: 'red' }}/> Advertising Outdoors</li>
          <li><IoCheckmark style={{ color: 'red' }}/> Effective Advertising Pointers</li>
          <li><IoCheckmark style={{ color: 'red' }}/> Kook 2 Directory Add Url Free</li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutsec;
