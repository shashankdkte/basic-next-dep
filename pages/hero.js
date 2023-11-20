import styles from '../styles/Home.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}> 
      <div> 
        <h1 style={{fontSize:"4rem",padding:"2rem"}}>Boost On <span style={{color:"#222"}}>Strength</span></h1>
      </div>
      <div>
        <div className={styles.diamond}></div>
      </div>
      <div>
        <div className={styles.screen}></div>
      </div>
    </div>
  )
}

export default Hero