import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>  
      <Login></Login>
      <Footer></Footer>
    </div>
  );
} 
export default App;