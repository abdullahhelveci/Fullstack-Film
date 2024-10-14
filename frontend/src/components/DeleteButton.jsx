import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'
import {toast} from 'react-toastify'

const DeleteButton = ({id}) => {

    const navigate = useNavigate()

    // filmi silmek için api isteği at
    const handleDelete = () => {
      api.delete(`/api/movies/${id}`).then(() =>{ 
        toast.warning('Film kaldırıldı')
        navigate('/')}).catch((err) => console.log(err))
    }

  return (
    <button onClick={handleDelete} className='bg-red-600 text-white p-2 hover:bg-red-500 rounded-lg'>
    <FaTrash />
  </button>
  )
}

export default DeleteButton