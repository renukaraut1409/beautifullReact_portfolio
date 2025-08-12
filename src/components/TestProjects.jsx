// src/components/TestProjects.jsx
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig"; // adjust path if needed
import { collection, getDocs } from "firebase/firestore";

const TestProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        const data = snapshot.docs.map((doc) => doc.data());
        console.log("Fetched projects from Firestore:", data);
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-4">Projects from Firebase</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <div className="mt-2">
              <a
                href={project.demoUrl}
                className="text-blue-400 hover:underline mr-4"
                target="_blank"
              >
                Demo
              </a>
              <a
                href={project.githubUrl}
                className="text-blue-400 hover:underline"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestProjects;
