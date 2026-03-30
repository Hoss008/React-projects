import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>React Task Hub</h1>
        <p>
          One app, many tasks. Add a route instead of creating a new project.
        </p>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:taskId" element={<TaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
