import React, { useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import NavbarMenu from "./NavbarMenu";
import { ShowComputers } from "./pages/showComputers";
import { getAllComputers }  from "./api/computadoras.api.jsx"

const options = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

export default function App() {

  const [dateUpdated, setDateUpdated] = useState(new Date().toLocaleDateString('es-MX',options))
  const [showCreate, setShowCreate] = useState(false)
  const [dataComputers, setDataComputers] = useState([])
  const [loadingDataComputers, setLoadingDataComputers] = useState(false)


  useEffect(() => {
        
    function loadComputers (){
      setLoadingDataComputers(true)
      setDateUpdated(new Date().toLocaleDateString('es-MX',options))
      getAllComputers()
        .then((response)=>{
          setDataComputers(response.data)
        })
        .catch((err)=>{
          console.error("Peticion con error",err)
        })
        .finally(()=>{
          setLoadingDataComputers(false)
        })
      

    }

    loadComputers();
    
    var intervalRequest = setInterval(loadComputers, 30*1000);

    return () =>{
      clearInterval(intervalRequest)
    }

}, [])


  return (
    <>
      <NavbarMenu setShowCreate={setShowCreate}/>
      {
        showCreate ?
          <></>
        :
          <>
            <ShowComputers dataComputers={dataComputers} loadingDataComputers={loadingDataComputers} dateUpdated={dateUpdated}/>
          </>
      }

    </>
  );
}
