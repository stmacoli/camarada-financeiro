type TableItem = {
    nome: string,
    categoria: string,
    valor: number,
    data: string
}
type TableProps = {
    data: TableItem[]
}

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
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
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
