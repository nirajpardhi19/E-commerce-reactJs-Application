import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login(props) //props--info-setLoggedIn
{

const navigate = useNavigate()
 
    function pleaseLogin()
    {
        //Display Popup
        signInWithPopup(auth, provider)
        .then(function()
        {
            //It means the user is logged in 
           props.info(true)


          const userName = auth.currentUser.displayName;
          const email = auth.currentUser.email;
          console.log(userName, email)

          navigate("/home")
        })
        .catch(function(error)
        {
            console.log(error)
        })
    }
  return (
    <div style={{margin: 30}}>
     <button className="btn btn-outline-primary" onClick={pleaseLogin}>Login With Google</button>
    </div>
  )
}
