import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";


const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "RANKING", uid: "rank" },
  { name: "NOMBRE", uid: "nombre" },
  { name: "PAÍS DE ORIGEN", uid: "pais"},
  { name: "NODOS", uid: "nodos" },
  { name: "# CORES", uid: "num_cores" },
  { name: "CANTIDAD RAM", uid: "num_ram_tb" },
  { name: "ALMACENAMIENTO", uid: "almacenamiento_tb" },
  { name: "TERAFLOPS", uid: "teraflops" },
  { name: "SISTEMA OPERATIVO", uid: "sistema_operativo" },
  { name: "ACCIONES", uid: "acciones" },
];

const TableRegisters = ({ dataComputers }) => {


    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];
    
        switch (columnKey) {
          case "acciones":
            return (
              <div className="relative flex items-center gap-2">
                <Tooltip content="Editar">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <EditIcon />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Eliminar">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <DeleteIcon />
                  </span>
                </Tooltip>
              </div>
            );
          default:
            return cellValue;
        }
    }, []);




    return (
        <div className="w-[80%]">
            <Table aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                    {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={dataComputers} emptyContent={"Sin datos para mostrar."}>
                    {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}


export default TableRegisters;
