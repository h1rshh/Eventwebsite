import React from 'react';
import styles from './Mainbody.module.css'; // Import CSS module for styling
import Countdown from './Countdown'; // Import the Countdown component

const Mainbody = () => {
  return (
    <div className={styles.mainBodyContainer}>
      <div className={styles.textContainer}>
        <p>Conference Date</p>
        <h1 className={styles.eventTitle}>
          Count Every Second
          <br />
          Until the Event
        </h1>
      </div>
      <Countdown /> {/* Replace the button with the Countdown component */}
    </div>
  );
};

export default Mainbody;
