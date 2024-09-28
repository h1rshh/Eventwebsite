import Link from 'next/link';
import styles from './Header.module.css';
import { IoTicketSharp } from 'react-icons/io5';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/speaker">Speaker</Link></li>
          <li><Link href="/schedule">Schedule</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <button className={styles.ticketButton}>
          <IoTicketSharp style={{ marginRight: '0.5rem' }} /> {/* Icon before text */}
          TICKET
        </button>
      </nav>
    </header>
  );
};

export default Header;
