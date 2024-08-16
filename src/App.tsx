import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.tsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router.tsx";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
