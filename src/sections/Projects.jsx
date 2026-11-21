import './Projects.css';

const projects = [
  {
    id: 'todo-management',
    title: 'Todo Application',
    status: 'Completed',
    visual: 'todo',
    description:
      'A full-stack Todo Application that allows users to register, log in, and manage their personal tasks. Users can create, update, delete, and track tasks based on their status.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'JavaScript',
      'CSS',
    ],
    features: [
      'User registration and login',
      'JWT-based authentication',
      'Create, update, and delete tasks',
      'Manage task statuses',
    ],
    githubUrl: 'https://github.com/akash-28903804/Todo-application',
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
      <a
        className="projects__action"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} (opens in a new tab)`}
      >
        {label === 'View on GitHub' && (
          <svg
            className="projects__github-icon"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.57.1.78-.24.78-.54v-2.1c-3.18.69-3.85-1.35-3.85-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.54-.29-5.21-1.27-5.21-5.65 0-1.25.44-2.27 1.17-3.07-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.12 1.17A10.8 10.8 0 0 1 12 5.03c.97 0 1.93.13 2.84.38 2.16-1.48 3.11-1.17 3.11-1.17.62 1.57.23 2.73.12 3.02.73.8 1.16 1.82 1.16 3.07 0 4.39-2.67 5.36-5.22 5.64.41.36.78 1.07.78 2.16v3.05c0 .3.2.65.79.54A11.3 11.3 0 0 0 12 .7Z" />
          </svg>
        )}
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
          <ProjectAction
            label={project.githubUrl ? 'View on GitHub' : 'GitHub'}
            url={project.githubUrl}
          />
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
