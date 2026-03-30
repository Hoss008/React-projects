import { Link, useParams } from "react-router-dom";
import { tasks } from "../data/tasks";
import ShopCartTask from "../tasks/shop-cart/ShopCartTask";

const migrationChecklist = [
  "Copy the needed components from your old app into this project.",
  "Move any CSS and assets used by that task.",
  "Import and render the migrated component for this route.",
  "Delete old duplicate setup when you confirm this route works.",
];

function TaskPage() {
  const { taskId } = useParams();
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return (
      <section className="panel">
        <h2>Task Not Found</h2>
        <p className="muted">No task is registered for this route yet.</p>
        <div className="actions">
          <Link className="btn" to="/">
            Back To Dashboard
          </Link>
        </div>
      </section>
    );
  }

  if (task.id === "shop-cart") {
    return (
      <section className="stack">
        <section className="panel">
          <span className="pill">{task.id}</span>
          <h2>{task.title}</h2>
          <p>{task.summary}</p>
          <p className="source">Source folder: {task.sourcePath}</p>
          <div className="actions">
            <Link className="btn" to="/">
              Back To Dashboard
            </Link>
          </div>
        </section>

        <ShopCartTask />
      </section>
    );
  }

  return (
    <section className="panel">
      <span className="pill">{task.id}</span>
      <h2>{task.title}</h2>
      <p>{task.summary}</p>
      <p className="source">Source folder: {task.sourcePath}</p>

      <h3>Migration Checklist</h3>
      <ol className="list">
        {migrationChecklist.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <div className="actions">
        <Link className="btn" to="/">
          Back To Dashboard
        </Link>
        <Link className="btn btn-secondary" to={`/tasks/${task.id}`}>
          Refresh Route
        </Link>
      </div>
    </section>
  );
}

export default TaskPage;
