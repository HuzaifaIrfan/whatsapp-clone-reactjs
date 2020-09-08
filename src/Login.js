import React from 'react'

import { Button } from '@material-ui/core'

import './Login.css'

import {auth, provider} from './firebase'

import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'


function Login() {

    const [{}, dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider).then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }
            )


        }).catch(
            (error)=>{
                return alert(error.message)
            }
        )
    }

    return (
        <div className="login">
            <div className="login__container">

                <img
                    src="/logo.png"
                    alt="logo"
                />

                <div className="login__text">
                    <h1>Sign In to Whatsapp Clone</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>


            </div>
            
        </div>
    )
}

export default Login
