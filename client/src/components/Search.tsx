import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <div>
            <input type="text" placeholder="Tìm kiếm..." className="italic pl-2 text-white bg-transparent border border-solid border-gray-600 rounded-sm focus:border-gray-300" />

        </div>
    )
}

export default Search