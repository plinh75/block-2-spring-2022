import React from 'react'
import { useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {signup} from '../api/user'

type SignupInput = {
    email: string,
    password: string,
    username: string
}

const Signup = () => {
    const {register, handleSubmit, formState : { errors}} = useForm<SignupInput>()
    const navigate = useNavigate()
    const onSubmit :SubmitHandler<SignupInput> = data =>{
        signup(data)
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