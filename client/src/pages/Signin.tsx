import React from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {signin} from '../api/user'

type SigninInput = {
  email: string,
  password: string
}

const Signin = () => {
  const {register, handleSubmit, formState} = useForm<SigninInput>()
  const navigate = useNavigate()
  
  return (
    <form>
      <input type="email" placeholder="email" {...register('email') } />
      <input type="password" placeholder="mật khẩu" {...register('password') } />
      <button>đăng nhập</button>
    </form>
  )
}

export default Signin