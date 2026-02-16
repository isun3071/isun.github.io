export default function About() {
  return (
    <>
      <section id="about" className="py-16 px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-[240px_1fr] gap-12 items-start">
          {/* Left — avatar */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/profilepicture.jpg"
              alt="Ian Sun"
              className="w-48 h-48 rounded-xl object-cover"
              style={{
                border: '1px solid var(--color-border)',
              }}
            />
          </div>

          {/* Right — bio */}
          <div>
            <h2
              className="text-[11px] uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              About
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Ian Sun
            </h3>
            <br />

            <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>                    
                <p>I’m a cybersecurity practitioner and Computer Science student at Boston University (BA/MS). My work centers on adversary simulation and the human layer of security.</p>
                <br />
                <p>In 2025, I presented the Dissonance Test at SecureWorld Financial Services, a behavioral hiring control designed to surface deception before access is granted. Its purpose is simple: move workforce risk mitigation upstream, before credentials are issued.</p>
                <br />  
                <p>I build and operate enterprise-style lab environments centered on Windows Server and Active Directory. I test offensive techniques including enumeration, lateral movement, Kerberos abuse, and web application vulnerabilities against live defenses with AV and EDR enabled, then harden and validate remediations.</p>
                <br />
                <p>Alongside lab research, I support production IT systems at a 30,000+ student university and previously at a managed service provider, gaining exposure to infrastructure and operational risk at scale.</p>
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
              <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'var(--color-accent)' }}>
                Looking for
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Red team and security consulting roles
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider" />
    </>
  )
}
