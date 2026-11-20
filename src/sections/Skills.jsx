import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    accent: 'violet',
    skills: [
      {
        name: 'Java',
        icon: 'J',
        description: 'A general-purpose language used to build applications.',
        status: 'Currently learning',
      },
      {
        name: 'JavaScript',
        icon: 'JS',
        description: 'Adds logic and interactivity to web applications.',
        status: 'Currently learning',
      },
      {
        name: 'C',
        icon: 'C',
        description: 'A foundational language for learning programming concepts.',
        status: 'Currently learning',
      },
    ],
  },
  {
    title: 'Frontend Development',
    accent: 'blue',
    skills: [
      {
        name: 'HTML5',
        icon: '5',
        description: 'Markup used to structure web content.',
      },
      {
        name: 'CSS3',
        icon: '3',
        description: 'Styles that control layout, color, and typography.',
      },
      {
        name: 'React.js',
        icon: 'R',
        description: 'A JavaScript library for building user interfaces.',
        status: 'Currently learning',
      },
    ],
  },
  {
    title: 'Backend & Database',
    accent: 'cyan',
    skills: [
      {
        name: 'Node.js',
        icon: 'N',
        description: 'A JavaScript runtime for server-side applications.',
      },
      {
        name: 'Express.js',
        icon: 'Ex',
        description: 'A framework for building web servers and APIs.',
      },
      {
        name: 'MongoDB',
        icon: 'DB',
        description: 'A document database for storing application data.',
      },
    ],
  },
  {
    title: 'Tools & Concepts',
    accent: 'pink',
    skills: [
      {
        name: 'Git',
        icon: 'git',
        description: 'Version control for tracking changes to code.',
      },
      {
        name: 'GitHub',
        icon: 'GH',
        description: 'A platform for hosting and collaborating on code.',
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        icon: 'OOP',
        description: 'A programming approach organized around objects.',
      },
      {
        name: 'Data Structures and Algorithms (DSA)',
        icon: 'DSA',
        description: 'Ways to organize data and plan operations.',
      },
      {
        name: 'Problem Solving',
        icon: 'PS',
        description: 'Breaking challenges into steps and testing solutions.',
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="skills__inner">
        <header className="skills__header">
          <p className="skills__eyebrow">WHAT I'M LEARNING</p>
          <h2 className="skills__title" id="skills-title">
            Technical <span>Skills</span>
          </h2>
          <p className="skills__intro">
            Technologies and concepts I’m studying and exploring as I grow as a
            developer. Learning badges mark topics currently in active study.
          </p>
        </header>

        <div className="skills__categories">
          {skillCategories.map(({ title, accent, skills }) => (
            <section
              className={`skills__category skills__category--${accent}`}
              key={title}
              aria-labelledby={`skills-${accent}-title`}
            >
              <h3 className="skills__category-title" id={`skills-${accent}-title`}>
                {title}
              </h3>
              <ul className="skills__list">
                {skills.map(({ name, icon, description, status }) => (
                  <li className="skills__list-item" key={name}>
                    <article className="skills__card">
                      <span className="skills__icon" aria-hidden="true">
                        {icon}
                      </span>
                      <div className="skills__card-content">
                        <div className="skills__card-heading">
                          <h4>{name}</h4>
                          {status && (
                            <span className="skills__status">{status}</span>
                          )}
                        </div>
                        <p>{description}</p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
