import React from 'react'
import Logo from '../components/Logo'

type Props = {}

const Nav = (props: Props) => {
    return (
        <div>
            <nav className="flex justify-between items-center">
                <Logo />
                <ul className="flex items-center uppercase">
                    <li className="py-8 px-4">
                        <a href="#" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a]">Trang chủ</a>
                    </li>
                    <li className="py-8 px-4">
                        <a href="/product" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a]">Son môi</a>
                    </li>
                    <li className="py-8 px-4">
                        <a href="/#/about" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a]">
                            Tuyển đại lý, cộng tác viên
                        </a>
                    </li>
                    <li className="py-8 px-4">
                        <a href="/#/contact" className="text-[#334d5e] transition duration-300 hover:text-[#b4073a]">Liên hệ</a>
                    </li>
                    <li className="py-8 px-4">
                        <a className="text-[#334d5e] transition duration-300 hover:text-[#b4073a]">

                            <span id="account-email">
                            </span>

                        </a>
                    </li>
                </ul>
                <a className="text-black text-3xl relative pt-[6px] pr-[6px]">
                    <i className="fa-solid fa-cart-shopping" />
                    <span className="absolute top-0 right-0 text-white text-base bg-pink-400 rounded-[50%] w-5 h-5 text-center hover:text-[#b4073a]">0</span>
                </a>
            </nav>
        </div>
    )
}

export default Nav