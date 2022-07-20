import { FC } from "react"

type TableItem  = {
  nome?: string;
  categoria?: string;
  valor?: number;
  data?: string;
};

const TableRow : FC<TableItem> = ({nome, categoria, valor, data}) => {
  return (
    
    <tr>
      <th>{data}</th>
      <td>{nome}</td>
      <td>{categoria}</td>
      <td>{valor}</td>
    </tr>
  );
};


type TableProps = {
  data: TableItem[];
};

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <TableRow nome="burguer king" categoria="Refeição" data="20/10/2022" valor={169.69}/>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
