import React from "react";
import { connect } from "react-redux";

const History = props => {
  return (
    <div>
      <h4>Histório de cálaculos:</h4>
      <ul>
        {props.historys.map(history => (
          <li key={history.id}>{history.history}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  historys: state.historys
});

export default connect(
  mapStateToProps,
  null
)(History);
