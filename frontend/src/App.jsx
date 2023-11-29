import React, { useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import NavbarMenu from "./NavbarMenu";
import { ShowComputers } from "./pages/showComputers";
import { getAllComputers }  from "./api/computadoras.api.jsx"

export default function App() {

  const [showCreate, setShowCreate] = useState(false)

  useEffect(() => {
        
    function loadComputers(){
        const response = getAllComputers()
        console.log(response.data)
    }

    loadComputers();

}, [])



  return (
    <>
      <NavbarMenu setShowCreate={setShowCreate}/>
      {
        showCreate ?
          <></>
        :
          <>
            <ShowComputers />
          </>
      }

    </>
  );
}
