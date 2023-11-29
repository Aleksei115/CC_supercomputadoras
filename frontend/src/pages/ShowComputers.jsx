import React from 'react'
import TableRegisters from '../components/TableRegisters'
import {Card, Skeleton} from "@nextui-org/react";


export const ShowComputers = ({ dataComputers, loadingDataComputers, dateUpdated}) => {
  return (
    <div className='w-100 h-[80%] d-flex justify-center flex-wrap'>
        <div className='w-100 h-fit '>
            <h2 className='text-center text-xl uppercase font-medium'>Registros</h2>
        </div>
        <p className='flex justify-center items-end h-[50px] text-white italic'>
          <span className='mr-2'>Actualizado:</span> 
          {
            dateUpdated
          }
        </p>
        <div className='w-100 mt-[30px] flex justify-center'>
          {
            loadingDataComputers ?
              <Card className="w-[80%] space-y-5 p-4" radius="lg">
                <Skeleton className="rounded-lg">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-2/5 rounded-lg">  
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                  </Skeleton>
                </div>
              </Card>
            :
            <TableRegisters dataComputers={dataComputers}/>
          }
            
        </div>
    </div>
  )
}
