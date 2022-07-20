import Header from "./components/Header/Header";

import "./App.css";
import Table from "./components/Table/Table";
import Form from "./components/Form/Form";

const TABLE_MOCK_DATA = [
  {
    nome: "Mercado",
    categoria: "Casa",
    valor: 239.55,
    data: "20/10/2034",
    id:"1"
  },
  {
    nome: "Sex Shop",
    categoria: "Lazer",
    valor: 669.69,
    data: "20/10/2034",
    id:"2"
  },
  {
    nome: "Gibson Flying V",
    categoria: "Música",
    valor: 14239.35,
    data: "21/10/2034",
    id:"3"
  },
  {
    nome: "Estudos",
    categoria: "Investimentos",
    valor: 3239.55,
    data: "22/10/2034",
    id:"4"
  },
];

const App = () => {
  return (
    <div className="container">
      <Header> Camarada Financeiro </Header>
      <Table data={TABLE_MOCK_DATA} />
    </div>
  );
};

export default App;
