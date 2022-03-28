import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { signin } from '../api/user'
import { authenticated } from '../ultis/localStorage'

type SigninInput = {
  email: string,
  password: string
}

const Signin = () => {
  const { register, handleSubmit, formState:{ errors} } = useForm<SigninInput>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<SigninInput> = async data => {
    const { data: user } = await signin(data)
    authenticated(user, () => {
      navigate('/')
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" {...register('email')} />
      <input type="password" placeholder="mật khẩu" {...register('password')} />
      <button>đăng nhập</button>
    </form>
  )
}

export default Signin