import Link from 'next/link';
import Navigation from './navigation';
import Hero from './hero';
import Floating from './floating';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Navigation />
      <Hero />
      <Floating/>
    </div>
  )
}

export default HomePage