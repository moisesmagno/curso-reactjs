import React from "react";

const Calc = props => {
  return (
    <div>
      <input type="text" placeholder="Valor 1" />
      <br />
      <br />
      <input type="text" placeholder="Valor 2" />
      <br />
      <br />
      <button>Calcular</button> <span>Total: 10</span>
    </div>
  );
};

export default Calc;
