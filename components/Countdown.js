"use client";
import React, { useEffect, useState } from 'react';
import styles from './Countdown.module.css'; // Create a CSS module for styling

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Determine the next birthday date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    let yyyy = today.getFullYear();
    let nextYear = yyyy + 1;
    const dayMonth = '09/30/';
    let birthday = dayMonth + yyyy;

    today = mm + '/' + dd + '/' + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    const countDown = new Date(birthday).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      setTime({
        days: Math.floor(distance / day),
        hours: Math.floor((distance % day) / hour),
        minutes: Math.floor((distance % hour) / minute),
        seconds: Math.floor((distance % minute) / second),
      });

      if (distance < 0) {
        setMessage("It's my birthday!");
        clearInterval(interval);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <div id="countdown" className={styles.countdownBox}>
        <ul className={styles.countdownList}>
          <li className={styles.timeBox}>
            <span className={styles.countdownNumber}>{time.days}</span>
            <div>days</div>
          </li>
          <li className={styles.timeBox}>
            <span className={styles.countdownNumber}>{time.hours}</span>
            <div>hours</div>
          </li>
          <li className={styles.timeBox}>
            <span className={styles.countdownNumber}>{time.minutes}</span>
            <div>minutes</div>
          </li>
          <li className={styles.timeBox}>
            <span className={styles.countdownNumber}>{time.seconds}</span>
            <div>seconds</div>
          </li>
        </ul>
      </div>
      {message && (
        <div id="content" className={styles.emoji}>
          <span>🥳</span>
          <span>🎉</span>
          <span>🎂</span>
        </div>
      )}
    </div>
  );
};

export default Countdown;
