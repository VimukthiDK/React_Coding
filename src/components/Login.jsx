import { useState } from "react";

function Login() {

    const [loginData,setLoginData] = useState({        
        userName:"",
        pass:"",
        cPass:"",
    
    });

    const [error,setError] = useState("");        

    const handleUserName = (e) => {
        setLoginData({...loginData, userName:e.target.value});

    }

    const handleNewPass = (e) => {
        setLoginData({...loginData, pass:e.target.value});

    }

    const handleComPass = (e) => {
        setLoginData({...loginData, cPass:e.target.value});

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (loginData.pass == loginData.cPass){
            console.log(loginData);
            setError("");

        }
        else{
            //console.log("Password does not match...!");
            setError("Password does not match...!");
        }
    }


    return ( 
    <>

    <h1> Sign Up </h1>
    <p style={{color:"red"}}>{error}</p>
        <form  onSubmit={handleSubmit}>
        <label>
            User Name : <input type="text" onChange={handleUserName} required/> 
        </label>

        <label>
            New Password : <input type="password"  onChange={handleNewPass} required/> 
        </label>    

        <label>
            Comfirm Password : <input type="password" onChange={handleComPass} required />  
        </label>

        <input type="submit"/>
        </form>
    </>
     );
}

export default Login;