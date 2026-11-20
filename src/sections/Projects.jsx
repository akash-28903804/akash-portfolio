import './Projects.css';

const projects = [
  {
    id: 'todo-management',
    title: 'To-Do Management Application',
    status: 'Completed',
    visual: 'todo',
    description:
      'A task management application that allows users to register, log in, and manage their personal tasks.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
    ],
    features: [
      'User registration and login',
      'JWT-based authentication',
      'Create, update, and delete tasks',
      'Manage task statuses',
    ],
    githubUrl: null,
    liveDemoUrl: null,
  },
  {
    id: 'college-admission-guidance',
    title: 'Tamil Nadu College Admission Guidance System',
    status: 'In Progress',
    visual: 'college',
    description:
      'A web application in development to help students explore colleges and understand higher education opportunities in Tamil Nadu.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'College information',
      'District-based college discovery',
      'Course details',
      'College fee information',
      'Cutoff information',
    ],
    githubUrl: null,
    liveDemoUrl: null,
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    status: 'In Progress',
    visual: 'atm',
    description:
      'An ATM management application in development to explore basic banking operations and transaction management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'User authentication',
      'Balance inquiry',
      'Deposit and withdrawal',
      'Transaction management',
    ],
    githubUrl: null,
    liveDemoUrl: null,
  },
];

function ProjectIllustration({ title, visual }) {
  return (
    <div
      className={`projects__illustration projects__illustration--${visual}`}
      role="img"
      aria-label={`${title} interface illustration`}
    >
      <div className="projects__mock-window" aria-hidden="true">
        <div className="projects__mock-header">
          <span />
          <span />
          <span />
          <span className="projects__mock-title">
            {visual === 'todo'
              ? 'My tasks'
              : visual === 'college'
                ? 'College explorer'
                : 'Account overview'}
          </span>
        </div>

        {visual === 'todo' && (
          <div className="projects__todo-preview">
            {['Create task', 'Review task', 'Set status'].map((task, index) => (
              <div className="projects__todo-row" key={task}>
                <span className={index === 0 ? 'is-checked' : ''} />
                <span>{task}</span>
                <i />
              </div>
            ))}
          </div>
        )}

        {visual === 'college' && (
          <div className="projects__college-preview">
            <div className="projects__search-line">
              <span>Districts</span>
              <span />
            </div>
            <div className="projects__college-tiles">
              <span>Course info</span>
              <span>Fee details</span>
              <span>Cutoff info</span>
            </div>
          </div>
        )}

        {visual === 'atm' && (
          <div className="projects__atm-preview">
            <div className="projects__balance-panel">
              <span>Balance inquiry</span>
              <i />
            </div>
            <div className="projects__atm-actions">
              <span>Deposit</span>
              <span>Withdraw</span>
            </div>
            <div className="projects__transaction-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectAction({ label, url }) {
  if (url) {
    return (
      <a className="projects__action" href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <button
      className="projects__action"
      type="button"
      disabled
      aria-label={`${label} link not provided`}
      title="Add a project URL to enable this button"
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }) {
  const featureHeading =
    project.status === 'Completed' ? 'Key features' : 'Feature scope';

  return (
    <article className="projects__card">
      <ProjectIllustration title={project.title} visual={project.visual} />

      <div className="projects__card-content">
        <div className="projects__card-topline">
          <span
            className={`projects__status projects__status--${project.status
              .toLowerCase()
              .replace(' ', '-')}`}
          >
            {project.status}
          </span>
        </div>

        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__description">{project.description}</p>

        <ul className="projects__technologies" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li className="projects__technology" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        <div className="projects__features">
          <h4>{featureHeading}</h4>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="projects__actions">
          <ProjectAction label="GitHub" url={project.githubUrl} />
          <ProjectAction label="Live Demo" url={project.liveDemoUrl} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects__inner">
        <header className="projects__header">
          <p className="projects__eyebrow">SELECTED WORK</p>
          <h2 className="projects__title" id="projects-title">
            My <span>Projects</span>
          </h2>
          <p className="projects__intro">
            A selection of applications I’m building and have completed.
            Project links will be added when their URLs are available.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="projects__note">
          For projects marked In Progress, the feature list describes project
          scope and does not mean every item is already implemented.
        </p>
      </div>
    </section>
  );
}
