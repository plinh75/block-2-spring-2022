import React from 'react'

type Props = {}

const Info = (props: Props) => {
    return (
        <div>
            <span>
                <a className="text-white" href="signin">
                    Signin</a>
                |
            </span>
            <span>
                <a className="text-white" href="signup">
                    Signup</a>
                |
            </span>
            <span>
                <a className="text-white" id="logout">
                    Logout</a>
            </span>
            <span>
                <a className="text-white" target="_blank" href="#" title="Shop son môi trên Facebook">
                    <i className="fa-brands fa-facebook-square" />
                </a>
            </span>
            <span>
                <a className="text-white" target="_blank" href="#" title="Shop son môi trên Instagram">
                    <i className="fa-brands fa-instagram" />
                </a>
            </span>
        </div>
    )
}

export default Info