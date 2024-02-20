'use client'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <User/>
      <User/>
      {/* <User name="Sushma"/>
      <User name="Anu"/> */}
    </main>
  )
}


const User=(props)=>{
  return(
    <div>
      <h2>I am Deb Developer</h2>
      {/* <h2>User name is {props.name}</h2>
      <button onClick={()=>alert("Hello Web Developer")}>Click Me</button> */}
    </div>
  )
}


