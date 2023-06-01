import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import DataDisplay from "./DataDisplay";

function App() {
  return (
    <Provider store={store}>
      <DataDisplay />
    </Provider>
  );
}

export default App;
