import React from 'react'
import Nav from '../components/Nav'
import Search from '../components/Search'
import Logo from './Logo'
import Info from './Info'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <div className="hidden md:block z-[999] bg-black h-11 fixed top-0 left-0 w-full py-3">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Search />
            </div>
            <div className="flex items-center gap-2">
              < Info />
            </div>
          </div>
        </div>
      </div>
      <header id="header" className="hidden lg:block mt-[44px]">
        <div className="container">
          <Nav />
        </div>
      </header>
    </div>
  )
}

export default Header