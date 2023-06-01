import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ItemList from "./ItemList";

function App() {
  return (
    <Provider store={store}>
      <ItemList />
    </Provider>
  );
}

export default App;
