import Image from 'next/image'; // Import the Image component
import styles from './Hero.module.css';
import heroImage from './hero_img.png'; // Ensure this is correct

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroText}>
        Change Your Mind <br />
        To Become Success
      </h1>
      <Image
        src={heroImage}
        alt="Hero Image"
        className={styles.heroImage}
        layout="responsive" // Ensures the image is responsive
        width={1920} // Set an appropriate width
        height={1080} // Set an appropriate height
      />
    </div>
  );
};

export default Hero;
