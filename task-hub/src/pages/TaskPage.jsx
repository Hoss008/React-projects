import { Link, useParams } from "react-router-dom";
import { tasks } from "../data/tasks";
import CardLibraryTask from "../tasks/card-library/CardLibraryTask";
import ConverterTask from "../tasks/currency-converter/Converter";
import EcommerceTask from "../tasks/ecommerce/EcommerceTask";
import PersonalCardTask from "../tasks/personal-card/PersonalCardTask";
import ShoppingCartBuilderTask from "../tasks/shopping-cart-builder/ShoppingCartBuilderTask";
import ShopCartTask from "../tasks/shop-cart/ShopCartTask";
import YtCourseViteTask from "../tasks/yt-course-vite/YtCourseViteTask";

const migrationChecklist = [
  "Copy the needed components from your old app into this project.",
  "Move any CSS and assets used by that task.",
  "Import and render the migrated component for this route.",
  "Delete old duplicate setup when you confirm this route works.",
];

function TaskPage() {
  const { taskId } = useParams();
  const task = tasks.find((item) => item.id === taskId);

  const migratedTaskComponents = {
    "card-library": <CardLibraryTask />,
    "currency-converter": <ConverterTask />,
    "ecommerce-frontend": <EcommerceTask />,
    "personal-card": <PersonalCardTask />,
    "shopping-cart-builder": <ShoppingCartBuilderTask />,
    "shop-cart": <ShopCartTask />,
    "yt-course-vite": <YtCourseViteTask />,
  };

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

  if (migratedTaskComponents[task.id]) {
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

        {migratedTaskComponents[task.id]}
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
