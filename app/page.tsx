export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Game Development Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Analyze and Rate Custom Puzzle Difficulty Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Submit any grid, logic, or word puzzle and get instant difficulty scores — solution time estimates, branching factors, and hint requirements — powered by real solving algorithms.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { title: 'Solver Engine', desc: 'Runs backtracking & constraint propagation to measure true solve complexity.' },
          { title: 'Pattern Analysis', desc: 'Detects logical patterns and rates required deduction depth.' },
          { title: 'Standardized Scores', desc: 'Outputs Easy / Medium / Hard / Expert ratings with numeric metrics.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-[#58a6ff] font-semibold text-base mb-2">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited puzzle submissions',
              'Grid, logic & word puzzle support',
              'Full difficulty metrics report',
              'API access for integrations',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What puzzle types are supported?',
              a: 'Grid-based puzzles (Sudoku, nonograms, mazes), logic puzzles (Einstein riddles, constraint problems), and word games (crosswords, word searches).'
            },
            {
              q: 'How is difficulty calculated?',
              a: 'Our solver engine runs backtracking and constraint propagation algorithms, measuring branching factor, solution path length, and required hint count to produce a calibrated difficulty score.'
            },
            {
              q: 'Can I integrate this into my own app?',
              a: 'Yes. Pro subscribers get full API access with JSON responses, making it easy to embed difficulty ratings directly into your puzzle app or CMS.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Puzzle Difficulty Calculator. All rights reserved.
      </footer>
    </main>
  )
}
