import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter as BroswerRouter,
  Routes,
  Route,
}from "react-router-dom";

import "./style.scss"
function App() {
  return (
    <BroswerRouter>
      <Routes>
        <Route path= "/">
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BroswerRouter>
  );
}

export default App;
