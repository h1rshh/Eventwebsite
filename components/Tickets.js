import React from 'react';
import styles from './Tickets.module.css';

const Tickets = () => {
  return (
    <div className={styles.container}>
      <img
        src="https://media.istockphoto.com/id/1172044327/photo/business-conference-background.jpg?s=612x612&w=0&k=20&c=zN_oPd13Tbs7SAkw6zz4-yhASacoTXOdoSWJcYVg2B8="
        alt="Conference"
        className={styles.fullWidthImage}
      />
      <div className={styles.priceCards}>
        {/* 1 Day Pass */}
        <div className={styles.priceCard}>
          <h3>1 Day Pass</h3>
          <div className={styles.price}>₹5000</div>
          <p>One Day Conference Ticket</p>
          <p>Coffee-break</p>
          <p>Lunch and Networking</p>
          <p>Keynote talk</p>
          <p>Talk to the Editors Session</p>
        </div>

        {/* Full Pass - Premium */}
        <div className={`${styles.priceCard} ${styles.premiumCard}`}>
          <h3>Full Pass</h3>
          <div className={styles.price}>₹15000</div>
          <p>One Day Conference Ticket</p>
          <p>Coffee-break</p>
          <p>Lunch and Networking</p>
          <p>Keynote talk</p>
          <p>Talk to the Editors Session</p>
          <p>Lunch and Networking</p>
          <p>Keynote talk</p>
        </div>

        {/* Group Pass */}
        <div className={styles.priceCard}>
          <h3>Group Pass</h3>
          <div className={styles.price}>₹12000</div>
          <p>One Day Conference Ticket</p>
          <p>Coffee-break</p>
          <p>Lunch and Networking</p>
          <p>Keynote talk</p>
          <p>Talk to the Editors Session</p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
