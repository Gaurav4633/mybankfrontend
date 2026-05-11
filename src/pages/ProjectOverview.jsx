function ProjectOverview() {

  return (

    <section className="tech-stack-section">

      <div className="tech-card">

        <h1 className="main-heading">
          Technologies Used
          <h2 className="sub-heading">
            

          </h2>
        </h1>

        <div className="tech-grid">

          <div className="tech-box">
            <h2>Frontend </h2>

            <ul>
                
              <li>React.js</li>
              <li>Vite</li>
              <li>Axios</li>
              <li>React Router DOM</li>
              <li>CSS</li>
              <li>Frontend Deployed on <b>Cloudflare</b></li>
            </ul>
          </div>

          <div className="tech-box">
            <h2>Backend</h2>

            <ul>
              <li>Spring Boot</li>
              <li>Java</li>
              <li>Spring Data JPA</li>
              <li>Hibernate</li>
              <li>MySQL</li>
              <li>Backend Deployed on <b>AWScloud</b></li>
              <li>Data stored in MySQL: UserTable, TransactionTable, AccountTable</li>
            </ul>
          </div>

          <div className="tech-box">
            <h2>Cloud & Deployment</h2>

            <ul>
              <li>Cloudflare Pages</li>
              <li>AWS Elastic Beanstalk</li>
              <li>AWS RDS MySQL</li>
              <li>Docker</li>
            </ul>
          </div>

          <div className="tech-box">
            <h2>Features</h2>

            <ul>
              <li>Create Account</li>
              <li>Deposit Money</li>
              <li>Withdraw Money</li>
              <li>Account Information</li>
              <li>Transaction History</li>
              <li>Date & Time Tracking</li>
              <li>REST APIs</li>
              <li>Responsive Banking UI</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}

export default ProjectOverview;