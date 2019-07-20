import React, { useState } from "react";

const Calc = props => {
  const [value, setValue] = useState(0);

  const somarValores = e => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Valor 2"
        onChange={e => {
          setValue({ valor1: e.target.value });
        }}
        value={value.valor}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Valor 2"
        onChange={e => {
          setValue({ valor2: e.target.value });
        }}
        value={value.valor2}
      />
      <br />
      <br />
      <button onClick={somarValores}>Calcular</button> <span>Total: 10</span>
    </div>
  );
};

export default Calc;
