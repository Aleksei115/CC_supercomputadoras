import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { AcmeLogo } from "./components/AcmeLogo.jsx";

const navbar_links = [
    {
        
    }
]


export default function NavbarMenu({ setShowCreate }) {
  return (
    <div className="w-full h-[80px]">
        <Navbar>
            <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">SUPER-COMPUTADORAS</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem className="lg:flex">
                <Button as={Link} color="secondary" variant="flat" onClick={()=>{setShowCreate(false)}}>
                    Ver Registros
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button as={Link} color="primary" variant="flat" onClick={()=>{setShowCreate(true)}}>
                    Agregar Registros
                </Button>
            </NavbarItem>
            </NavbarContent>
        </Navbar>
    </div>
  );
}
