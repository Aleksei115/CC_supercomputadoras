import React from 'react'
import TableRegisters from '../components/TableRegisters'

export const ShowComputers = () => {
  return (
    <div className='w-100 h-[80%] d-flex justify-center flex-wrap'>
        <div className='w-100 h-fit '>
            <h2 className='text-center text-xl uppercase font-medium'>Registros</h2>
        </div>
        <div className='w-100 mt-[30px] flex justify-center'>
            <TableRegisters />
        </div>
    </div>
  )
}
