import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

type Inputs ={
    name: string,
    price: number
}

type ProductAddProps = {
    name: string,
    onAdd:(product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
    const navigate = useNavigate()
    const OnSubmit : SubmitHandler<Inputs> = (dataInput) => {
        props.onAdd(dataInput)
        navigate("/") //chuyển trang
    }
  return (
    <div>
        <form onSubmit={handleSubmit(OnSubmit)}>
            <input type="text" {...register('name')} placeholder="tên sp"/>
            <input type="number" {...register('price')} placeholder="giá sp" />
            <button>thêm</button>
        </form>
    </div>
  )
}

export default ProductAdd