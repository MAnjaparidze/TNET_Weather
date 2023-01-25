import React from 'react'

type Props = {}

function SearchBar({ }: Props) {
  return (
    <>
      <input className='bg-transparent outline-none text-white w-full' type='text' placeholder='Search for Cities' />
    </>
  )
}

export default SearchBar;