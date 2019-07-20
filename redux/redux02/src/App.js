import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import Calc from "./components/Calc";
import History from "./components/History";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Calc />
        <History />
      </div>
    </Provider>
  );
}

export default App;
