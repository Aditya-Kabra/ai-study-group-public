const stats = [
  ['16', 'months running'],
  ['52', 'meetups'],
  ['1,000+', 'members'],
  ['500+', 'projects'],
];

const whatsappGroupUrl = 'https://chat.whatsapp.com/JpmfVsApG5KCtUCdHtGoFd';

export const dynamic = 'force-static';

const sessions = [
  {
    number: '01',
    title: 'Build and share',
    count: 'About 20 sessions',
    description: 'Choose a project and build for two hours. Everyone gets one minute at the end to show what they made and explain what they learned.',
    note: 'Any tool. Any project. No prerequisites.',
  },
  {
    number: '02',
    title: 'Themed build sessions',
    count: 'About 15 sessions',
    description: 'Everyone works in one shared area, so people can compare approaches and help each other as they build.',
    note: 'We have covered finance, education, art, games, AI agents, RAG, and MCP.',
  },
  {
    number: '03',
    title: 'Guided walkthroughs',
    count: 'About 10 sessions',
    description: 'A practitioner shows how they built something, and then everyone uses the same ideas in a project of their own.',
    note: 'Past guides have covered n8n, FastHTML, Git, GCP, tldraw, Indian LLMs, and go to market work.',
  },
  {
    number: '04',
    title: 'Hackathons and team builds',
    count: '4 sessions',
    description: 'Domain experts work with builders. Each team chooses an idea, makes a prototype, and puts it in front of a person who may use it.',
    note: 'Teams decide whether to improve the idea, ship it, or stop working on it.',
  },
  {
    number: '05',
    title: 'Family and beginner workshops',
    count: '3 sessions',
    description: 'People from age 8 to 80 make AI art, storybooks, songs, games, and study tools. No coding or laptop experience is required.',
    note: 'Parents and children can build together.',
  },
  {
    number: '06',
    title: 'Online sessions',
    count: 'About 8 sessions',
    description: 'People outside Pune can join our online sessions. We also meet online when the cafe cannot hold the group.',
    note: 'Sessions include FastHTML lessons and project showcases.',
  },
];

const topics = [
  ['Make a prototype', 'Claude Artifacts, Gemini Canvas, AI Studio, NotebookLM, Napkin, Gamma, Playlab, and Google Gems'],
  ['Code with an agent', 'Claude Code, Antigravity, Codex, Cursor, Replit, Lovable, v0, and Gemini CLI'],
  ['Build agents and automation', 'n8n, Zapier, CrewAI, LangChain, LangGraph, LlamaIndex, Autogen, Google ADK, MCP, and Agent Skills'],
  ['Put it online', 'FastHTML, MonsterUI, Gradio, Hugging Face Spaces, Vercel, Netlify, Cloudflare, GCP, Datasette, and Git'],
  ['Improve the output', 'Prompting, function calling, RAG, error analysis, evals, context management, and LLM as judge'],
  ['Make creative work', 'Suno, Veo, Nano Banana, Three.js, storybooks, poetry, comics, and generative art'],
  ['Find people who will use it', 'Deployment, portfolios, writing, positioning, finding first users, and revenue'],
];

const timeline = [
  ['May to June 2025', 'Can I make something?', 'Four to ten people joined each session to make their first chatbots and interactive prototypes.'],
  ['July to August 2025', 'I can write working code.', 'The group moved into function calling, FastHTML, Cursor, n8n, MCP, and the first AI agents.'],
  ['September to November 2025', 'How do I ship this?', 'Sessions covered deployment, cost, and reliability. A cross domain hackathon brought 44 builders and experts together.'],
  ['December 2025 to February 2026', 'Can an agent do the work?', 'People explored skills, OpenClaw, and RAG. Family workshops and a session with a psychologist brought new kinds of builders into the room.'],
  ['March to August 2026', 'Is it useful, and who is it for?', 'The group started testing output, measuring errors, finding users, and turning prototypes into products.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AI Study Group home">
          <span className="brand-mark" aria-hidden="true">AI</span>
          <span>Study Group</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="https://aistudygroup.aipune.org/events" target="_blank" rel="noreferrer">Previous Events</a>
          <a href="https://ai-study-group.solveit.pub/" target="_blank" rel="noreferrer">Our story</a>
          <a className="nav-cta" href="https://aistudygroup.aipune.org/next" target="_blank" rel="noreferrer">Upcoming Meetup</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Pune, India / Since May 2025</p>
          <h1>16 months,<br /><em>52 meetups,</em><br />one cafe.</h1>
          <p className="hero-intro">
            Bring a laptop and something you want to try. You will leave with
            something that works, or something that broke in a useful way.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#sessions">See what we do</a>
            <a className="text-link" href={whatsappGroupUrl} target="_blank" rel="noreferrer">Join us <span aria-hidden="true">↘</span></a>
          </div>
        </div>

        <div className="hero-art" aria-label="A note from an AI Study Group meetup">
          <div className="sun" aria-hidden="true" />
          <article className="meetup-card">
            <div className="card-topline">
              <span>Saturday build session</span>
              <span>#052</span>
            </div>
            <p className="card-date">23 AUG</p>
            <h2>We build.<br />Then share.</h2>
            <div className="card-rule" />
            <p>Aeka&apos;s Coffee, Baner</p>
            <p>2 hours of making<br />1 minute to share</p>
            <span className="card-stamp">NO<br />SLIDES</span>
          </article>
          <span className="scribble scribble-one" aria-hidden="true">✦</span>
          <span className="scribble scribble-two" aria-hidden="true">↗</span>
        </div>
      </section>

      <section className="stats" aria-label="AI Study Group in numbers">
        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="manifesto" aria-label="How our meetups work">
        <p>We do not run talks or slides.</p>
        <p>You bring a laptop and a question. The group helps you build an answer.</p>
      </section>

      <section className="content-section sessions-section" id="sessions">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Six ways to spend a session</h2>
          <p>Most weekends are open build sessions. We also make room for shared topics, guided lessons, team projects, families, and people outside Pune.</p>
        </div>
        <div className="session-grid">
          {sessions.map((session) => (
            <article className="session-card" key={session.number}>
              <div className="session-meta">
                <span>{session.number}</span>
                <span>{session.count}</span>
              </div>
              <h3>{session.title}</h3>
              <p>{session.description}</p>
              <p className="session-note">{session.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="topics-section">
        <div className="section-heading section-heading-light">
          <p className="eyebrow">What we have covered</p>
          <h2>From a blank page to a working product</h2>
          <p>The tools change, but the work follows the same path. People make an idea, improve it, publish it, and find out whether someone will use it.</p>
        </div>
        <div className="topic-list">
          {topics.map(([title, tools], index) => (
            <article className="topic-row" key={title}>
              <span className="topic-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{tools}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section story-section" id="story">
        <div className="section-heading story-heading">
          <p className="eyebrow">How the group changed</p>
          <h2>People kept asking harder questions.</h2>
          <p>The first sessions were about making anything at all. Sixteen months later, people test whether their work is accurate, useful, and ready for a paying user.</p>
        </div>
        <div className="timeline">
          {timeline.map(([date, title, body], index) => (
            <article className="timeline-item" key={date}>
              <div className="timeline-marker"><span>{index + 1}</span></div>
              <p className="timeline-date">{date}</p>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="people-section">
        <div>
          <p className="eyebrow">Who comes along</p>
          <h2>People with different jobs build in the same room.</h2>
        </div>
        <div className="people-copy">
          <p>AI engineers sit beside people who have never opened a terminal. Founders, marketers, analysts, designers, researchers, teachers, psychologists, students, and children all take part.</p>
          <blockquote>“If you get stuck, ask the person next to you. They may have solved the same problem last month.”</blockquote>
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="join-sun" aria-hidden="true" />
        <p className="eyebrow">Join the next session</p>
        <h2>Bring a laptop.<br />Order a coffee.<br />Build something.</h2>
        <p>Sessions are free. We meet almost every weekend at Aeka&apos;s Coffee in Baner, Pune, and we also run online sessions.</p>
        <a className="button button-light" href={whatsappGroupUrl} target="_blank" rel="noreferrer">Join us <span aria-hidden="true">↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">AI</span><span>Study Group</span></a>
        <p>Made by people who learn by making things.</p>
        <p>Pune, India</p>
      </footer>
    </main>
  );
}
