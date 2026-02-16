const PROJECTS = [
  {
    title: 'SafeContractor',
    subtitle: 'Civic Tech Hackathon @ BU 2025',
    award: 'Best Overall + Best Scam Protection',
    bullets: [
      'Led frontend development in React + TypeScript, designing and implementing a responsive search interface for 70k+ contractor records',
      'Integrated backend APIs into a clean, user-facing verification workflow',
      'Collaborated closely with backend engineers to shape API responses and UI constraints under hackathon time pressure',
      'Helped deliver an AI-enhanced credential summary system to reduce contractor fraud risk',
    ],
  },
]

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-16 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Building Things
            </h2>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Applied Projects
            </p>
          </div>

          <div className="w-full max-w-3xl space-y-6">
            {PROJECTS.map((item) => (
              <div
                key={item.title}
                className="card-elevated rounded-lg p-8"
              >
                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.subtitle}
                </p>
                {item.award && (
                  <p
                    className="text-xs font-semibold mb-5"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {item.award}
                  </p>
                )}

                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  )
}
