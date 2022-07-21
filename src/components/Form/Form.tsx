const Form = () => {
  return (
    <form>
      <div>
        <label>Nome da Entrada</label>
        <div>
          <input type="text" placeholder="Dispensa do Mercado" />
        </div>
      </div>

      <div>
        <label>Valor</label>
        <div>
          <input type="number" placeholder="R$" />
        </div>
      </div>

      <div>
        <label>Categorias</label>
        <select>
          <option selected>Expandir</option>
          <option value="1">Mercado</option>
          <option value="2">Lazer</option>
          <option value="3">Música</option>
        </select>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
