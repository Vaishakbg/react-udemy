import React from "react";
import 'bulma/css/bulma.css';
import BookApp from "./components/BookApp/BookApp";
import { Provider } from "./context/books";

function App() {
  return (
    <Provider>
      <div>
        <BookApp />
      </div>
    </Provider>
  );
}

export default App;
