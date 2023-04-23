import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Nav from "./components/Nav";
import Price from "./pages/Price";
import Register from "./pages/Register";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Price />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
