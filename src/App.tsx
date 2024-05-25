import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./layout";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
