// src/pages/ProjectListPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject"; //  <== IMPORT
import ProjectCard from "../components/ProjectCard"; //  <==  IMPORT

const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");
   
    // Send the token through the request "Authorization" Headers
    axios
      .get(
      `${API_URL}/api/projects`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />

      {/* Below: UPDATE */}
      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}

export default ProjectListPage;
