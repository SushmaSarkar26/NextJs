"use client"   // router hook state
import Link from "next/link";
import { useRouter } from "next/navigation"
 
const Login =()=>{
    const router = useRouter();  // router hook
    const navigate =(page) => {
        router.push("/login/" + page)
    }
    return(
        <div>
            <h1>Login Page</h1>
            <Link href="/">Go to Home Page</Link>
            <br/> <br/>
            {/* <button onClick={()=>router.push("/login/loginstudent")}>Go to Student Login Page</button> */}
            <button onClick={()=>navigate("/login/loginstudent")}>Go to Student Login Page</button>
            <br/> <br/>
            <button onClick={()=>navigate("/login/loginteacher")}>Go to Teacher Login Page</button>
        </div>
    )
}


export default Login;