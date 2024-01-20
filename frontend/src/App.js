import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
function App() {
  return (
    <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
    </Layout>
  )
}

export default App;
