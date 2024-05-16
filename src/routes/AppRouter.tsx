import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";

function AppRouter() {
  return (
    <Routes>
      {ROUTES.map((item, i) => {
        return <Route key={i} path={item.path} Component={item.component} />;
      })}
    </Routes>
  );
}

export default AppRouter;
