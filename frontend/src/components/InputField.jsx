import React from 'react'

const InputField = ({name, label, type='text'}) => {
  return (
    <div className="relative border border-gray-500 rounded-xl">
    <input type={type}  name={name} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " required />
    <label htmlFor={name} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{label}</label>
</div>
  )
}

export default InputField