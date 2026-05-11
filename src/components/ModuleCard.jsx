import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ModuleCard({ module }) {
  const Icon = module.icon;

  return (
    <article className="module-card">
      <div className="module-icon">
        <Icon size={24} />
      </div>

      <h3 className="module-title">{module.title}</h3>
      <p className="module-description">{module.description}</p>

      <Link to={module.path} className="module-button">
        Open Module
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

export default ModuleCard;
