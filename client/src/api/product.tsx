import instance from './instance';
import { ProductType } from '../types/product';
import { isAuthenticated } from '../ultis/localStorage';

const {token,user} = isAuthenticated()

export const list = () => {
    const url = `/product`;
    return instance.get(url)
}

export const add = (product:ProductType) => {
    const url = `product/${user._id}`
    return instance.post(url, product,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}

export const remove = (id:number) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}

export const read = (id:string|undefined) => {
    const url = `/product/${id}`;
    return instance.get(url)
}

export const update = (product:ProductType) => {
    const url = `product/${product.id}`;
    return instance.put(url, product)
}