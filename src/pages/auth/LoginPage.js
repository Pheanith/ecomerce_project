import { useState } from "react"


const LoginPage = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    const onLogin = () => {

        const staticUsername = "Sa"
        const staticPassword = "123"

        // if username and password is corrected will login to MainLayout
        // how to compare data get from input with data in database
        if(username == staticUsername && password == staticPassword){
            // when login give it value 1 so it won't null
            localStorage.setItem("isLogin",'1')
            // link to another page with route
            window.location.href = "/"
        } else {
            alert("Wrong")
        }
        
    }

    return (
        <div>
            <h2>LoginPage</h2>
            <input 
                placeholder="username" 
                // how to get value from user input in js
                // store it temporary in setUsername
                onChange={(event)=>{
                    setUsername(event.target.value)
                }}
            />
            <input 
                placeholder="password" 
                onChange={(event)=>{
                    setPassword(event.target.value)
                }}
            />
            <br />
            <button onClick={onLogin}>Login</button>
            <button>Register</button>
        </div>
    );
}
export default LoginPage;