import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Note from "./pages/note/Note";
import "./App.css";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={ <ProtectedRoute> <Home /> </ProtectedRoute> } />
            <Route path="/note" element={ <ProtectedRoute> <Note /> </ProtectedRoute> } />
            <Route path="/note/:id" element={ <ProtectedRoute> <Note /> </ProtectedRoute> } />
            <Route path="/note/nueva" element={<ProtectedRoute>  <Note /> </ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
