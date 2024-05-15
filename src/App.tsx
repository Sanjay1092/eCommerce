import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <h2 className="text-sm text-red-200">E-Commerce</h2>
    </Provider>
  );
}

export default App;
