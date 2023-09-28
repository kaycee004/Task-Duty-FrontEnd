import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import MyTasks from "./pages/MyTasks";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NavBar1 from "./components/NavBar1";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {
 const baseURL = "https://omega-tron.onrender.com"

  return (
    <>
      <Router>
        <Toaster position="top-right"/>
        <NavBar1 />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task" element={<MyTasks baseURL={baseURL}/>} />
          <Route path="/new" element={<NewTask baseURL={baseURL}/>} />
          <Route path="/edit/:id" element={<EditTask/>} baseURL={baseURL} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
