import './Education.css';

const educationStages = [
  {
    type: 'academic',
    period: '2026',
    status: 'Completed',
    title: 'Higher Secondary Education',
    detail: '12th Standard',
    group: 'Computer Science Group',
  },
  {
    type: 'learning',
    period: '2026 – Present',
    status: 'Currently Learning',
    title: 'Freshkite',
    detail: 'Technical learning institution',
    topics: [
      'Java Programming',
      'JavaScript',
      'C Programming',
      'Web Development',
      'React.js',
    ],
  },
];

function EducationIcon({ type }) {
  if (type === 'academic') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11v5c3.6 2.7 8.4 2.7 12 0v-5m4-2v6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14" />
    </svg>
  );
}

export default function Education() {
  return (
    <section
      className="education"
      id="education"
      aria-labelledby="education-title"
    >
      <div className="education__inner">
        <header className="education__header">
          <p className="education__eyebrow">LEARNING &amp; GROWTH</p>
          <h2 className="education__title" id="education-title">
            My <span>Education</span>
          </h2>
          <p className="education__intro">
            The milestones and learning experiences shaping my path in
            technology.
          </p>
        </header>

        <ol className="education__timeline">
          {educationStages.map((stage) => (
            <li
              className={`education__item education__item--${stage.type}`}
              key={stage.title}
            >
              <div className="education__marker" aria-hidden="true">
                <EducationIcon type={stage.type} />
              </div>

              <article className="education__card">
                <header className="education__card-header">
                  <div>
                    <p className="education__period">{stage.period}</p>
                    <h3>{stage.title}</h3>
                  </div>
                  <span
                    className={`education__status education__status--${stage.type}`}
                  >
                    {stage.status}
                  </span>
                </header>

                <p className="education__detail">{stage.detail}</p>

                {stage.group && (
                  <p className="education__group">{stage.group}</p>
                )}

                {stage.topics && (
                  <ul className="education__topics">
                    {stage.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
