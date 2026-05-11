import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import modules from "../data/modules";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="brand">
            <div className="brand-icon">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="brand-title">My Bank</p>
              <p className="brand-subtitle"> Portal</p>
            </div>
          </div>
          <button
            className="sidebar-close"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <NavLink
                key={module.title}
                to={module.path}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                <Icon size={19} />
                <span>{module.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {isSidebarOpen && (
        <button
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}

      <div className="content-shell">
        <header className="topbar">
          <div className="topbar-inner">
            <button
              className="sidebar-toggle"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              <Menu size={22} />
            </button>

            <div className="welcome-text">
              <p className="welcome-title">Welcome to My Bank </p>
              
            </div>

         <div className="topbar-actions">


        <NavLink
         to="/project-overview"
         className="top-link">
  Project Overview
</NavLink>

<NavLink
  to="/signup"
  className="status-pill"
>
  Signup
</NavLink>

 <NavLink
  to="/login"
  className="avatar"
>
  Login
</NavLink>

</div>

          </div>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
