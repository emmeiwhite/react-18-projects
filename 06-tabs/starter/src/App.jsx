import { useEffect, useState } from "react";
import axios from "axios";
import JobInfo from "./components/JobInfo";
import Loader from "./components/Loader";
import SideBar from "./components/SideBar";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentJobId, setCurrentJobId] = useState("");

  function handleCurrentJob(id) {
    console.log("Current Button id is:");
    console.log(id);
    setCurrentJobId(id);
  }

  async function fetchJobs() {
    try {
      const response = await axios(url);
      setJobs(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.msg);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  // if (isLoading) <Loader />; This doesn't work this way for some reason

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <section className="jobs-center">
      {/* 1. Sidebar button */}
      <SideBar
        jobs={jobs}
        handleCurrentJob={handleCurrentJob}
      />
      <JobInfo
        jobs={jobs}
        currentJobId={currentJobId}
      />
    </section>
  );
};
export default App;
