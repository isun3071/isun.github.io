const RESEARCH = [
  {
    title: 'The Dissonance Test: What Can\'t Be Faked?',
    subtitle: 'SecureWorld Financial Services 2025',
    category: 'Conference Talk',
    bullets: [
      'Behavioral hiring control designed to detect fake IT workers and workforce infiltration',
      'Converts threat intelligence into deployable hiring‑gate safeguards',
      'Presented to senior leaders from major US financial institutions',
    ],
  },
  {
    title: 'How Two Interview Questions Can Stop APTs and Seed Security Culture',
    subtitle: 'Medium / LinkedIn',
    category: 'Article',
    bullets: [
      'Introduces cognitive‑dissonance‑based interview techniques',
      'Shows how simple conversational controls beat traditional awareness slides',
      'Practical framework any hiring manager can deploy immediately',
    ],
    link: '#', // placeholder — replace with real URL
  },
]

export default function Research() {
  return (
    <>
      <section id="research" className="py-16 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              Public Work
            </h2>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Research &amp; Talks
            </p>
          </div>

          <div className="w-full max-w-3xl space-y-6">
            {RESEARCH.map((item) => (
              <div
                key={item.title}
                className="card-elevated rounded-lg p-8"
              >
                {/* Tag */}
                <span
                  className="inline-block px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold rounded-full mb-5"
                  style={{
                    backgroundColor: 'var(--color-accent-muted)',
                    color: 'var(--color-accent)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {item.category}
                </span>

                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-xs font-medium mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.subtitle}
                </p>

                <ul className="space-y-2.5 mb-5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {item.link && (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider hover:underline"
                    style={{ color: 'var(--color-accent)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Article
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  )
}
