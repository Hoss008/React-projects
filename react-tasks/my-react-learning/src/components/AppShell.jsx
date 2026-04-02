import { Link } from 'react-router-dom'
import './AppShell.css'

export default function AppShell({ app, children }) {
  return (
    <div className="shell">
      <nav className="shell-nav">
        <Link to="/" className="shell-back">← Back to Lab</Link>
        <div className="shell-app-name">
          <span>{app.emoji}</span>
          <span>{app.title}</span>
        </div>
        <div className="shell-tags">
          {app.tags.map(t => (
            <span key={t} className="shell-tag">{t}</span>
          ))}
        </div>
      </nav>
      <main className="shell-content">
        {children}
      </main>
    </div>
  )
}
