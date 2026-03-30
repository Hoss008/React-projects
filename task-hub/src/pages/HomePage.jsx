import { Link } from "react-router-dom";
import { tasks } from "../data/tasks";

function HomePage() {
  return (
    <section className="stack">
      <div className="panel">
        <h2>Your Tasks</h2>
        <p className="muted">
          Open any route now, then migrate that task into this same app when you
          are ready.
        </p>

        <div className="task-grid">
          {tasks.map((task) => (
            <article key={task.id} className="task-card">
              <span className="pill">/tasks/{task.id}</span>
              <h3>{task.title}</h3>
              <p>{task.summary}</p>
              <div className="actions">
                <Link className="btn" to={`/tasks/${task.id}`}>
                  Open Route
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="panel">
        <h2>Add A New Task Fast</h2>
        <ol className="list">
          <li>
            Add a new object in src/data/tasks.js with id, title, and source
            path.
          </li>
          <li>
            Create your task component file under src/tasks/ or src/pages/.
          </li>
          <li>Render that component in TaskPage for the matching id.</li>
        </ol>
      </div>
    </section>
  );
}

export default HomePage;
