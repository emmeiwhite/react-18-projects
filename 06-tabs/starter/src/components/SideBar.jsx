export default function SideBar({ jobs, handleCurrentJob }) {
  console.log(jobs);
  return (
    <section className="btn-container">
      {jobs.map((job) => {
        return (
          <button
            key={job.id}
            className="job-btn"
            onClick={() => handleCurrentJob(job.id)}
          >
            {job.company}
          </button>
        );
      })}
    </section>
  );
}
