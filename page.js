'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  // const apple=()=>{
  //   alert("Fruit")
  // }

  // const apple=(item)=>{
  //   alert(item)
  // }

  const [name, setName]=useState("Sushma")
  const apple=()=>{
    
    setName("Anu")
  }

  const InnerComp = () => {
    return (
      <h1>Inner Component</h1>
    )
  }
  return (
    <main className={styles.main}>
      <h1>Events , Functions & state {name}</h1>
            {/* <button onClick={()=>alert("Hello Web Developer")}>Click Me</button> */}
      {/* <button onClick={apple}>Click Me</button>  // error */}
      {/* <button onClick={()=>apple("Red")}>Click Me</button> */}
      <button onClick={()=>apple()}>Click Me</button>
      {/* <InnerComp/> */}
      {InnerComp()}
    </main>
  )
}




