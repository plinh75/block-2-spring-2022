import React from 'react'

type Props = {}

const Slogan = (props: Props) => {
    return (
        <div
            className="bg-center text-2xl md:text-[38px] uppercase text-gray-100 text-center mb-6 py-10 bg-pink-400"
        >
            Không có gì <span className="text-gray-300">gọi là</span> đã có
            <span className="text-gray-300">quá nhiều</span> son môi cả
        </div>
  )
}

export default Slogan