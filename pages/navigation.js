import Link from "next/link"
import styles from "../styles/Home.module.css"

const Navigation = () => {
  return (
    <div className={styles.main_navigation}>

    <div className={styles.logo_container}>
      <div className={styles.logo}></div>
      <p>OMNIWEAR</p>
      </div>
      
      <div className={styles.nav_links}>
        <Link  href="/about">OVERVIEW</Link>
        <Link  href="/">REPORTS</Link>
        <Link  href="/">TRACKING</Link>
      </div>
      <div className={styles.profile_container}>
        <img src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random()*100 + 1)}.jpg`} alt="" />
      </div>
    </div>
  )
}

export default Navigation