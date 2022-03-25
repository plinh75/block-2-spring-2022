import instance from './instance'

export const signup = (user:any) => {
    const url = `users`
    return instance.post(url, user)
}

