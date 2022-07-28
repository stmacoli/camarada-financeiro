import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";

const ENDPOINT = "http://localhost:3000/entradas";

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [index, setIndex] = useState(41654)

  useEffect(() => {
    axios.get(ENDPOINT).then((response) => {
      console.log(response.data);
      setTableData(response.data);
    });
  }, []);

  const handleSubmit = (entrada: any) => {
    let newArray = [...tableData, entrada];
    setTableData(newArray);
    return "Sucesso!";
  };

  return (
    <div className="container">
      <h1>{index}</h1>
      <button onClick={() => setIndex(index + 1)}>+ 1</button>
      <Header> Camarada Financeiro </Header>
      <Form onSubmit={handleSubmit} />
      <Table data={tableData} />
    </div>
  );
};

export default App;
