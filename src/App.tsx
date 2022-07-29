import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header/Header";
import Table, { TableItem } from "./components/Table/Table";
import Form from "./components/Form/Form";

const ENDPOINT = "http://localhost:3000/entradas";

type TableDataState = Array<TableItem>;

const App = () => {
  const [tableData, setTableData] = useState<TableDataState>([]);

  const handleReload = () => {
    axios.get(ENDPOINT).then((response) => {
      setTableData(response.data);
    });
  };

  useEffect(() => {
    handleReload();
  }, []);

  // promises assincronicidade

  const handleSubmit = (entrada: any) => {
    axios.post(ENDPOINT, entrada).then(() => {
     handleReload();
    });
    return "Sucesso!";
  };

  return (
    <div className="container">
      <Header> Camarada Financeiro </Header>
      <Form onSubmit={handleSubmit} />
      <Table data={tableData} />
    </div>
  );
};

export default App;
