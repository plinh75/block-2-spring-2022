import React from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

type SignupForm = {
    email: string,
    password: string,
    username: string
}

type SignupProps = {
    onSignup: (user: SignupForm) => void
}

const Signup = (props: SignupProps) => {
    const {register, handleSubmit, formState : { errors}} = useForm<SignupForm>()
    const navigate = useNavigate()
    const onSubmit :SubmitHandler<SignupForm> = (dataSignup) =>{
        props.onSignup(dataSignup)
        navigate("/signin")
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('email')} placeholder="email"/>
            <input type="password" {...register('password')} placeholder="password"/>
            <input type="text" {...register('username')} placeholder="username"/>
            <button>đăng kí</button>
        </form>
    </div>
  )
}

export default Signup