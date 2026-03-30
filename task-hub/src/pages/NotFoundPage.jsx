import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="panel">
      <h2>Page Not Found</h2>
      <p className="muted">
        The route you entered does not exist in your task hub.
      </p>
      <div className="actions">
        <Link className="btn" to="/">
          Back To Dashboard
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
