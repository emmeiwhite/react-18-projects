import Duties from "./Duties";

export default function JobInfo({ jobs, currentJobId }) {
  const currentIndex = jobs.findIndex((job) => job.id === currentJobId);
  console.log(currentIndex);
  const { company, dates, duties, title, id } = jobs[currentIndex];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>

      <Duties duties={duties} />
    </article>
  );
}
