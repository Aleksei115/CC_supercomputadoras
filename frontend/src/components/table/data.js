import React from "react";

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

const users = [
  {
    id: 1,
    nombre: "prueba1",
    nodos: 5,
    num_cores: 11,
    num_ram_tb: "1223.000",
    almacenamiento_tb: "3232.000",
    teraflops: "0.006",
    sistema_operativo: "fad",
    rank: 0,
    pais: 1,
  },
];

export { columns, users };
