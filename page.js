'use client'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User/>
      <User/>
    </main>
  )
}


const User=(props)=>{
  return(
    <div>
      <h2>I am Deb Developer</h2>
    </div>
  )
}


