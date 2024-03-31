import React, {useState} from 'react'
import '../styles/SignIn.css'
import axios from 'axios'

export default function Signin(){

    // Create 2 states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleSignIn() {
        const url = 'http://localhost:8000/connect.php'; // Replace with your actual PHP endpoint
        const data = { user: username, pass: password }; // Your data object


        const form = new FormData();

        for (const key in data) {
            form.append(key, data[key]);
        }


        axios.post(url, form).then((res)=>{console.log(res.data)})

        // await fetch(url, {
        //     method: 'POST',
        //     body: form
        // }).then((res) =>{console.log(res.data)})
      
        
       
      }



    return(
        <>
            <div className="form">
                <div className='signin'>Sign In</div>
                <form method="post">
                    <div className='userdes'>
                        <label>Username: </label>
                        <input type="text" name="user" id="usernamebox" onChange={(e) => {setUsername(e.target.value)}} />
                    </div>
                    <div className='passdes'>
                        <label>Password: </label>
                        <input type="password" name="pass" id="passwordbox" onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <div className='remme'>
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <div className="rem">Remember me</div>
                    </div>
                    <input type="submit" value="Submit" id="sign" color="white" onClick={handleSignIn}/>
                    
                </form>

            </div>
        </>
    );
}