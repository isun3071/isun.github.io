const FOCUS_AREAS = [
  {
    title: 'Adversary Simulation',
    bullets: [
        "Operate an enterprise-style Active Directory lab (domain controller, endpoints, real daily driver)",
        "Execute real offensive techniques: enumeration, lateral movement, Kerberos abuse, web exploitation",
        "Keep defenses live (Defender, AV, Sysmon, Wazuh) and validate detection + hardening through repeated attack cycles"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 0 12 2.714ZM12 9v3.75m0 0v.008" />
      </svg>
    ),
  },
  {
    title: 'Human‑Layer Defense',
    bullets: [
      "Creator of the Dissonance Test, a behavioral control that surfaces deception before credentials are issued",
      "Uses open-ended questioning to trigger cognitive dissonance in deceptive actors while leaving real actors mostly unaffected",
      "Designed to be universal and usable without specialized behavioral training"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21C6.27 21 4.067 20.38 2.143 19.233A4.126 4.126 0 0 1 6.77 14.11M15 19.128a9.956 9.956 0 0 0-2.457-3.016M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Practical Security Controls',
    bullets: [
      "Take threat intelligence on APTs, social engineering, etc. and convert it into everyday workflow mitigations",
      "Build hiring-gate and onboarding checks that integrate with access review and operational processes",
      "Emphasize low-cost controls that scale beyond technical mitigations"
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
]

export default function FocusAreas() {
  return (
    <>
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              What I Do
            </h2>
            <p className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              Core Focus Areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area.title}
                className="card-elevated rounded-lg p-8"
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: 'var(--color-accent-muted)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {area.icon}
                </div>
                <h3 className="text-base font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  {area.title}
                </h3>
                <br />
                <ul className="space-y-4">
                  {area.bullets.map((bullet, i) => (
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
