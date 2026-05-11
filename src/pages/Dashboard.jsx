import ModuleCard from "../components/ModuleCard";
import PageHeader from "../components/PageHeader";

import modules from "../data/modules";

function Dashboard() {

  return (

    <section>

      <PageHeader
        title="Dashboard"
        description="Manage customer accounts, deposits, withdrawals, balance checks, and transaction records."
      />

      <div className="module-grid">

        {modules
          .filter(
            (module) =>
              module.title !== "Dashboard"
          )
          .map((module) => (

            <ModuleCard
              key={module.title}
              module={module}
            />

          ))}

      </div>

    </section>
  );
}

export default Dashboard;