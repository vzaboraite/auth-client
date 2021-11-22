import { Routes, Route } from "react-router-dom";
import UserRouter from "./pages/user/Router";

import "./styles/App.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserRouter />} />
    </Routes>
  );
}

export default App;
