import { FC } from "react";

type TableItem = {
  nome: string;
  categoria: string;
  valor: number;
  data: string;
  id?: string
};

type TableRowProps = {
  nome: string;
  categoria: string;
  valor: number;
  data: string;  
}

const TableRow: FC<TableRowProps> = ({ nome, categoria, valor, data}) => {
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

const Table: FC<TableProps> = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow
            key={item.id}
              nome={item.nome}
              categoria={item.categoria}
              valor={item.valor}
              data={item.data}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
