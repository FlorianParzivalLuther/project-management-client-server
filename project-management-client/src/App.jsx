// src/App.jsx

import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/HomePage"; // <== IMPORT
import ProjectDetailsPage from "./pages/ProjectDetailsPage";      //  <== IMPORT
import EditProjectPage from "./pages/EditProjectPage";  //  <== IMPORT
import ProjectListPage from "./pages/ProjectListPage";
import SignupPage from "./pages/SignupPage";  // <== IMPORT
import LoginPage from "./pages/LoginPage";  // <== IMPORT
import IsPrivate from "./components/IsPrivate";  // <== IMPORT
import IsAnon from "./components/IsAnon";  // <== IMPORT
 
function App() {
  return (
    <div className="App">
      <Navbar />
 
      <Routes>      
        <Route path="/" element={ <HomePage /> } />
 
        {/*   UPDATE THE BELOW ROUTES   */}
        <Route
          path="/projects"
          element={ <IsPrivate> <ProjectListPage /> </IsPrivate> } 
        />
 
        <Route
          path="/projects/:projectId"
          element={ <IsPrivate> <ProjectDetailsPage /> </IsPrivate> }
        />
 
        <Route
          path="/projects/edit/:projectId"
          element={ <IsPrivate> <EditProjectPage /> </IsPrivate> } 
        />
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
 
      </Routes>
    </div>
  );
}
 
export default App;
