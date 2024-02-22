import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import User from "./components/User.jsx";
import Admin from "./components/Admin.jsx";
import Nav from "./components/Nav.jsx";
import Manage from "./components/Manage.jsx";
import RedirectHandler from "./components/RedirectHandler.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import RoleSelector from "./components/RoleSelector.jsx";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <RoleSelector />
        <Nav />
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage"
            element={
              <ProtectedRoute>
                <Manage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <RedirectHandler>
                <Home />
              </RedirectHandler>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
