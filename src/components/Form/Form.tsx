import React, { FC, useState } from "react";

/* const TableRow: FC<TableRowProps> = ({ nome, categoria, valor, data}) => { */
//teste

type FormProps = {
  onSubmit: (entrada: any) => string;
};


const Form: FC<FormProps> = ({onSubmit}) => {
  const [data, setData] = useState("");
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let entrada = {
      data,
      nome,
      categoria,
      valor,
      id: Math.random()
    }
    onSubmit(entrada)
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div>
        <label>Data</label>
        <div>
          {/* CASO DÊ MTO TRABALHO, PODEMOS MUDAR ESSE TYPE PARA TEXT */}
          <input
            type="text"
            onChange={(event) => setData(event.target.value)}
            value={data}
            placeholder="Selecionar"
          />
        </div>
      </div>
      <div>
        <label>Nome da Entrada</label>
        <div>
          <input
            type="text"
            onChange={(event) => setNome(event.target.value)}
            value={nome}
            placeholder="Dispensa do Mercado"
          />
        </div>
      </div>
      <div>
        <label>Categoria</label>
        <div>
          <input
            type="text"
            onChange={(event) => setCategoria(event.target.value)}
            value={categoria}
            placeholder="Propheta Pizzaria"
          />
        </div>
      </div>

      <div>
        <label>Valor</label>
        <div>
          <input
            type="number"
            onChange={(event) => setValor(Number(event.target.value))}
            placeholder="R$"
          />
        </div>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
