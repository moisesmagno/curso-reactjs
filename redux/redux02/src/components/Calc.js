import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as historyCalcsAction from "../actions/history-calc";

const Calc = props => {
  const [value, setValue] = useState({
    valor1: 0,
    valor2: 0,
    total: 0
  });

  const somarValores = async e => {
    e.preventDefault();

    let totalsoma = value.valor1 + value.valor2;

    await setValue({ ...value, total: totalsoma });

    props.add_history(
      `${value.valor1} + ${value.valor2} = ${value.valor1 + value.valor2}`
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Valor 2"
        onChange={e => {
          setValue({ ...value, valor1: parseInt(e.target.value) });
        }}
        value={value.valor1}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Valor 2"
        onChange={e => {
          setValue({ ...value, valor2: parseInt(e.target.value) });
        }}
        value={value.valor2}
      />
      <br />
      <br />
      <button onClick={somarValores}>Calcular</button>{" "}
      <span>Total: {value.total}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(historyCalcsAction, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Calc);
