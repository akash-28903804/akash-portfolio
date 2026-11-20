import './About.css';

const learningTopics = [
  'Java',
  'JavaScript',
  'C Programming',
  'Web Development',
  'React.js',
];

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__inner">
        <header className="about__header">
          <p className="about__eyebrow">MY JOURNEY</p>
          <h2 className="about__title" id="about-title">
            About <span>Me</span>
          </h2>
        </header>

        <div className="about__layout">
          <div className="about__story">
            <h3>A little about me</h3>
            <p>
              Hello! I'm Akash, an aspiring software developer with a strong
              interest in programming and web development.
            </p>
            <p>
              I completed my 12th standard in 2026 and started my technical
              learning journey at Freshkite. Currently, I am learning Java,
              JavaScript, C, and modern web development technologies.
            </p>
            <p>
              I enjoy solving programming problems, developing real-world
              applications, and continuously improving my technical knowledge.
            </p>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <p className="about__card-label">EDUCATION</p>
              <h3>12th Standard</h3>
              <p className="about__card-detail">Completed in 2026</p>
              <span className="about__tag">Computer Science Group</span>
            </article>

            <article className="about__card">
              <p className="about__card-label">LEARNING JOURNEY</p>
              <h3>Learning at Freshkite</h3>
              <ul className="about__topics">
                {learningTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>

            <article className="about__card about__card--goal">
              <p className="about__card-label">CAREER OBJECTIVE</p>
              <h3>What I'm working toward</h3>
              <p className="about__card-detail">
                My ambition is to become a skilled software developer and build
                innovative solutions.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
