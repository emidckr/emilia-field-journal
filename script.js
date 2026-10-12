/* =========================================================
   Emilia's Field Journal: script.js (the behaviour)

   TO ADD A NEW GUEST SESSION: add one object to SESSIONS
   below. The nav tab, the home swatch, the index row and
   the full session page (learnings + games) are all built
   from it. Game types available: "order", "match", "quiz".
   ========================================================= */

const SESSIONS = [
  {
    id: "launchlab",
    no: "01",
    title: "Vibe Coding",
    titleHtml: "Vibe <em>Coding</em>",
    speaker: "LaunchLab",
    people: "Yibo, Nirvan & Rishabh",
    date: "9 Oct 2026",
    color: "#9BB7D4",
    hex: "9BB7D4",
    tools: "Claude Design, Claude Code, GitHub, Vercel, Supabase",
    quote: "Bad model or bad prompt?",
    lede: "LaunchLab showed how to go from an idea to a <em>live website</em> without writing the code yourself: design it, hand it to an AI that builds it, store it on GitHub, and let Vercel put it online.",
    keepers: [
      { tag: "Design", color: "#9BB7D4", title: "Design the front end first",
        text: "<b>Claude Design</b> builds the visual shell from a description, no code needed. When it looks right, open <b>Share</b> and pick <b>Handoff to Claude Code</b>. Find that button before you start." },
      { tag: "Prompt", color: "#E9B9C0", title: "Prompt like a brief",
        text: "“Create a website for my course” gets a generic result. A good prompt gives a <b>role, goal, audience, pages, design style and the output</b> you expect, and asks for a site that is easy to extend." },
      { tag: "Build", color: "#F4ECC2", title: "Claude Code builds it",
        text: "An <b>agentic, terminal-based</b> coding tool. It reads the whole project, runs commands and debugs. It can run <b>routines</b>, <b>refactor</b> code without changing what it does, and keep <b>session context</b>." },
      { tag: "Store", color: "#C9A6D8", title: "GitHub stores the code",
        text: "A <b>repository</b> holds every file and its history. <b>Commit</b> saves a snapshot locally; <b>push</b> sends it to GitHub. On a team, open a <b>pull request</b> so others review before you <b>merge</b>." },
      { tag: "Deploy", color: "#B3264B", title: "Vercel puts it online",
        text: "Connect the repo once. Every <b>push</b> rebuilds the live site, and every <b>pull request</b> gets its own preview link. GitHub stores code; Vercel turns it into a website. tiiny.host is the drag-and-drop option." },
      { tag: "Backend", color: "#7FB59A", title: "A plain site forgets everyone",
        text: "A static site can’t remember users or show live data. <b>Supabase</b> adds sign-up, log-in and a database. Logging in is just an API call that hands your browser a <b>token</b>." }
    ],
    files: [
      { file: "index.html", text: "The words and structure: every heading, button and paragraph." },
      { file: "styles.css", text: "The look: colours, fonts, spacing, phone vs laptop." },
      { file: "script.js", text: "The behaviour: what happens on click, type or submit." }
    ],
    games: [
      {
        type: "order", label: "Ship it",
        title: "Ship <em>it</em>",
        intro: "Put the vibe-coding workflow in the right order. Tap the next step each time.",
        steps: [
          "Describe the site in a detailed prompt in Claude Design",
          "Share → Handoff to Claude Code",
          "Claude Code builds the real files",
          "Commit, then push the project to GitHub",
          "Vercel builds it and gives you a live public link"
        ]
      },
      {
        type: "match", label: "Git memory",
        title: "Git <em>memory</em>",
        intro: "Flip two cards at a time. Match each Git term to what it does.",
        pairs: [
          ["Fork", "Your own copy of someone else’s repo on your GitHub account"],
          ["Clone", "Copy a repo from GitHub down onto your computer"],
          ["Commit", "Save a snapshot with a note, locally only"],
          ["Push", "Send your saved commits up to GitHub"],
          ["Pull request", "Propose changes for teammates to review"],
          ["Merge", "Combine approved changes into the main project"]
        ]
      },
      {
        type: "quiz", label: "Quick fire",
        title: "Quick <em>fire</em>",
        intro: "Ten questions from the session. Each answer comes with the reason.",
        questions: [
          { q: "You want to change the text on your main button. Which file do you open?",
            opts: ["index.html", "styles.css", "script.js", "README.md"], a: 0,
            why: "<b>index.html</b> holds the words and structure people read." },
          { q: "Now you want that button to be orange.",
            opts: ["index.html", "styles.css", "script.js", "package.json"], a: 1,
            why: "<b>styles.css</b> is the look: colours, fonts and spacing." },
          { q: "And you want it to do something when clicked.",
            opts: ["styles.css", "index.html", "script.js", "The repo name"], a: 2,
            why: "<b>script.js</b> is the behaviour: clicks, typing, submitting." },
          { q: "You saved a snapshot of your changes with a note, but it isn’t on GitHub yet. What did you do?",
            opts: ["Push", "Commit", "Merge", "Fork"], a: 1,
            why: "A <b>commit</b> saves locally. You still need to <b>push</b> to send it to GitHub." },
          { q: "You’re on a team and want teammates to review your changes before they go in.",
            opts: ["Push straight to main", "Open a pull request", "Clone the repo", "Delete the branch"], a: 1,
            why: "A <b>pull request</b> asks for review and discussion before anything is merged." },
          { q: "Which tool turns your repository into a live website at a public link?",
            opts: ["GitHub", "Claude Design", "Vercel", "Supabase"], a: 2,
            why: "GitHub stores the code. <b>Vercel</b> reads the repo, builds the site and hosts it." },
          { q: "Where do you find “Handoff to Claude Code” in Claude Design?",
            opts: ["In the Share menu, top right", "In the browser settings", "On GitHub", "In Vercel’s dashboard"], a: 0,
            why: "It sits in the <b>Share</b> menu’s export options, and it’s easy to miss." },
          { q: "Your Wordle clone should remember players and their saved games. What do you add?",
            opts: ["A bigger styles.css", "Supabase", "A second GitHub repo", "Nothing, sites remember by default"], a: 1,
            why: "A static site forgets everyone. <b>Supabase</b> adds authentication and a database." },
          { q: "After you log in, what does the site hand your browser so it stops asking for your password?",
            opts: ["A token", "A pull request", "A commit", "A new repo"], a: 0,
            why: "A <b>token</b> is a temporary sticker that says who you are. Logging out throws it away." },
          { q: "Which prompt will get the better website?",
            opts: ["“Create a modern website for my course.”",
                   "A brief with role, goal, audience, pages, design style and expected output",
                   "“Make it nice.”",
                   "Just paste the course title"], a: 1,
            why: "The session’s rule: <b>bad model or bad prompt?</b> Specific briefs get specific results." }
        ]
      }
    ]
  }
  // Next guest session goes here: { id: "...", no: "02", ... }
];


const UPCOMING = 2;   // empty swatches shown after the real sessions
const PLACEHOLDER_COLORS = ["var(--butter)", "var(--blush)", "var(--sceptre)"];
const NUMBER_WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const STICKER_FILES = ["dice", "fish-1", "fish-2", "fish-3", "flower", "kiwi-1", "kiwi-2", "lips", "raspberries", "star"].map(n => `assets/cursor/${n}.png`);

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pad = (n) => String(n).padStart(2, "0");
// "9 Oct 2026" -> "0910", used in the Pantone-style code
const dateCode = (d) => { const [day, mon] = d.split(" "); const m = MONTHS.indexOf((mon || "").slice(0, 3).toLowerCase()); return pad(day) + (m < 0 ? "00" : pad(m + 1)); };

/* ---------------- build the shared pieces ---------------- */
function buildNav() {
  const ul = $("#navLinks");
  ul.innerHTML = `<li><a href="#home" data-route="home" data-cursor="Home">Contents</a></li>` +
    SESSIONS.map(s => `<li><a href="#${s.id}" data-route="${s.id}" data-cursor="Open"><span class="num">${s.no}</span>${s.speaker}</a></li>`).join("") +
    `<li><span><span class="num">${pad(SESSIONS.length + 1)}</span>Soon</span></li>`;
}

function buildFan() {
  const tilts = [-3.5, 2.5, -1.8, 3.2, -2.6];
  const cards = SESSIONS.map(s => ({ ...s, soon: false, code: `${s.no}-${dateCode(s.date)} TPM` }));
  for (let i = 0; i < UPCOMING; i++) {
    const n = pad(SESSIONS.length + i + 1);
    cards.push({ no: n, title: "To be announced", speaker: "Guest speaker", date: "Coming soon", color: PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length], hex: "—", soon: true, code: `${n}-0000 TCX` });
  }
  $("#fan").innerHTML = cards.map((c, i) => {
    const tag = c.soon ? "div" : "a";
    const href = c.soon ? "" : ` href="#${c.id}" data-cursor="Play"`;
    const sticker = c.soon ? "" : `<img class="sticker-tag" src="${STICKER_FILES[(i * 3 + 8) % STICKER_FILES.length]}" alt="">`;
    return `<${tag} class="swatch${c.soon ? " soon" : ""}"${href} style="--c:${c.color};--r:${tilts[i % tilts.length]}deg" data-reveal>
      ${sticker}<div class="chip ht"></div>
      <div class="info">
        <span class="brandline">PANTONE</span>
        <span class="code">${c.code}</span>
        <span class="name">${c.title}</span>
        <span class="meta">${c.speaker} · ${c.date}<br>HEX ${c.hex}</span>
      </div></${tag}>`;
  }).join("");
}

function buildRows() {
  const rows = SESSIONS.map(s => `<li data-reveal><a class="row" href="#${s.id}" data-cursor="Play" data-preview="${s.color}|${s.speaker} · ${s.no}">
      <span class="n">${s.no}</span><span class="t">${s.title}</span><span class="s">${s.speaker}</span><span class="d">${s.date}</span><span class="go">3 games →</span></a></li>`);
  for (let i = 0; i < UPCOMING; i++) {
    const n = pad(SESSIONS.length + i + 1);
    rows.push(`<li data-reveal><div class="row is-soon"><span class="n">${n}</span><span class="t">To be announced</span><span class="s">Guest speaker</span><span class="d">Soon</span><span class="go">Locked</span></div></li>`);
  }
  $("#rows").innerHTML = rows.join("");
}

function buildMarquee() {
  const fill = (el, words) => { const run = words.map(w => `<span>${w}</span><i>✦</i>`).join(""); el.innerHTML = run + run; };
  fill($("#marquee"), ["Vibe coding", "Claude Design", "Claude Code", "GitHub", "Vercel", "Supabase", "Group D", "More sessions soon"]);
  fill($("#marquee2"), ["Issue #01", "field journal", "Group D", "pick a swatch", "ESSEC MMD", "play the games"]);
}

/* ---------------- session pages: a magazine spread ---------------- */
function buildSession(s) {
  const sec = document.createElement("section");
  sec.className = "page session";
  sec.dataset.page = s.id;
  sec.hidden = true;
  const slices = Array.from({ length: 7 }, (_, i) => `<div class="slice" style="--i:${i}"></div>`).join("");
  const [t1, ...tRest] = s.titleHtml.split(" ");
  const word = NUMBER_WORDS[parseInt(s.no, 10)] || s.no;
  sec.innerHTML = `
    <section class="block paper spread-block">
      <div class="spread">
        <article class="pg pg-l">
          <span class="folio pixel">p. 004</span>
          <span class="run pixel">Emilia's Field Journal</span>
          <p class="eyebrow pixel">Session ${s.no} · ${s.date} · Guest: ${s.speaker}</p>
          <p class="kicker display">Session <em>${word}</em></p>
          <h1 class="display mask enter s-title"><span class="line"><span>${t1}</span></span><span class="line"><span>${tRest.join(" ")}</span></span></h1>
          <p class="speaker">With <b>${s.people}</b> from ${s.speaker}.</p>
          <div class="slices" aria-hidden="true">${slices}</div>
        </article>
        <article class="pg pg-r">
          <span class="folio pixel">p. 005</span>
          <span class="run pixel">Issue #01 · ${s.speaker}</span>
          <figure class="polaroid pol-s1" aria-hidden="true"><span class="tape"></span><div class="pol-img cerulean-bg"><img src="assets/cursor/lips.png" alt=""></div><figcaption class="pixel">fig. 03</figcaption></figure>
          <div class="pink" data-reveal>
            ${s.quote ? `<p class="vquote pixel">“${s.quote}”</p>` : ""}
            <div>
              <p class="lede">${s.lede}</p>
              <dl class="facts">
                <div><dt>Speakers</dt><dd>${s.people}</dd></div>
                <div><dt>From</dt><dd>${s.speaker}</dd></div>
                <div><dt>Date</dt><dd>${s.date}</dd></div>
                <div><dt>Tools</dt><dd>${s.tools}</dd></div>
              </dl>
            </div>
          </div>
          <figure class="polaroid pol-s2" aria-hidden="true"><span class="tape"></span><div class="pol-img butter-bg"><img src="assets/cursor/star.png" alt=""></div><figcaption class="pixel">fig. 04</figcaption></figure>
        </article>
      </div>
    </section>

    <section class="block sceptre keepers">
      <span class="folio pixel">p. 006</span>
      <div class="sec-head">
        <h2 class="display mask" data-reveal><span class="line"><span>The</span></span><span class="line"><span><em>keepers.</em></span></span></h2>
        <p data-reveal>The main learning points from the session, one swatch each.</p>
      </div>
      <ol class="keeper-list">
        ${s.keepers.map((k, i) => `<li class="keeper" data-reveal>
          <span class="k-tag pixel"><i class="k-chip"></i>${pad(i + 1)} — ${k.tag}</span>
          <h3>${k.title}</h3><p>${k.text}</p></li>`).join("")}
      </ol>
      ${s.files ? `<aside class="files-box" data-reveal><span class="tape"></span>
        <p class="pixel small" style="margin:0 0 10px">${pad(s.keepers.length + 1)} — Files</p>
        <h3>Three files to <em>remember</em></h3>
        <div class="trio">${s.files.map(f => `<div><code>${f.file}</code><span>${f.text}</span></div>`).join("")}</div></aside>` : ""}
    </section>

    <section class="block cerulean games" id="${s.id}-games">
      <span class="folio pixel">p. 007</span>
      <div class="sec-head">
        <h2 class="display mask" data-reveal><span class="line"><span>Now</span></span><span class="line"><span><em>play.</em></span></span></h2>
        <p data-reveal>Three short games. Your best scores stay in this browser.</p>
      </div>
      <div class="game-tabs" role="tablist">
        ${s.games.map((g, i) => `<button class="game-tab" role="tab" aria-selected="${i === 0}" data-game="${i}" data-cursor="Play"><span class="pixel">${["I", "II", "III", "IV"][i]}</span>${g.label}</button>`).join("")}
      </div>
      <div class="stage" role="tabpanel"></div>
    </section>

    <nav class="block butter s-next">
      <span class="folio pixel">p. 008</span>
      <p>More sessions will appear here as the term goes on.</p>
      <a class="btn" href="#home" data-cursor="Home">Back to the index</a>
    </nav>`;
  $("#sessionPages").appendChild(sec);

  const stage = $(".stage", sec);
  const tabs = $$(".game-tab", sec);
  const open = (i) => {
    tabs.forEach((t, j) => t.setAttribute("aria-selected", String(i === j)));
    const g = s.games[i];
    const key = `ej-best-${s.id}-${i}`;
    ({ order: gameOrder, match: gameMatch, quiz: gameQuiz })[g.type](stage, g, key);
  };
  tabs.forEach((t, i) => t.addEventListener("click", () => open(i)));
  open(0);
}

/* ---------------- games ---------------- */
function head(g, scoreHtml) {
  return `<div class="stage-top"><div><h3>${g.title}</h3><p>${g.intro}</p></div><div class="score">${scoreHtml}</div></div>`;
}
function doneCard(stage, big, line, replay) {
  const box = document.createElement("div");
  box.className = "done-card";
  box.innerHTML = `<div class="big">${big}</div><p>${line}</p><div class="stage-actions"><button class="btn" data-cursor="Again">Play again</button></div>`;
  stage.querySelector(".stage-body").replaceChildren(box);
  box.querySelector("button").addEventListener("click", replay);
  burst(innerWidth / 2, innerHeight / 2, 18);
}

function gameOrder(stage, g, key) {
  let placed = 0, mistakes = 0;
  const best = store.get(key);
  const pool = shuffle(g.steps.map((t, i) => ({ t, i })));
  stage.innerHTML = head(g, `<span>Mistakes <b id="om">0</b></span><span>Best <b>${best == null ? "—" : best + " mistakes"}</b></span>`) +
    `<div class="stage-body"><div class="order">
      <div><h4>Steps, shuffled</h4><ul class="pool">${pool.map(p => `<li><button class="card-btn" data-i="${p.i}" data-cursor="Pick">${p.t}</button></li>`).join("")}</ul></div>
      <div><h4>Your workflow</h4><ol class="slots">${g.steps.map((_, i) => `<li class="slot"><span class="pixel">${i + 1}</span><span></span></li>`).join("")}</ol></div>
    </div></div>`;
  const slots = $$(".slot", stage);
  $$(".card-btn", stage).forEach(b => b.addEventListener("click", (e) => {
    if (+b.dataset.i === placed) {
      const slot = slots[placed];
      slot.classList.add("filled");
      slot.lastElementChild.textContent = b.textContent;
      b.parentElement.remove();
      burst(e.clientX, e.clientY, 6);
      placed++;
      if (placed === g.steps.length) {
        const prev = store.get(key);
        if (prev == null || mistakes < prev) store.set(key, mistakes);
        setTimeout(() => doneCard(stage, mistakes === 0 ? "Shipped<em>.</em>" : `${mistakes}<em> slip${mistakes > 1 ? "s" : ""}</em>`,
          mistakes === 0 ? "A clean run from prompt to live link." : "Design, hand off, build, push, deploy. Try for a clean run.",
          () => gameOrder(stage, g, key)), 500);
      }
    } else {
      mistakes++;
      $("#om", stage).textContent = mistakes;
      b.classList.remove("wrong"); void b.offsetWidth; b.classList.add("wrong");
    }
  }));
}

function gameMatch(stage, g, key) {
  let moves = 0, found = 0, open = [], lock = false;
  const best = store.get(key);
  const cards = shuffle(g.pairs.flatMap((p, i) => [{ i, text: p[0], term: true }, { i, text: p[1], term: false }]));
  stage.innerHTML = head(g, `<span>Moves <b id="mm">0</b></span><span>Pairs <b id="mp">0/${g.pairs.length}</b></span><span>Best <b>${best == null ? "—" : best + " moves"}</b></span>`) +
    `<div class="stage-body"><div class="match"><div class="match-grid">${cards.map((c, n) => `
      <button class="mcard" data-i="${c.i}" data-n="${n}" aria-label="Hidden card" data-cursor="Flip">
        <span class="face back"><span>✦</span></span>
        <span class="face front${c.term ? " term" : ""}">${c.text}</span>
      </button>`).join("")}</div></div></div>`;
  $$(".mcard", stage).forEach(b => b.addEventListener("click", (e) => {
    if (lock || b.classList.contains("flipped") || b.classList.contains("done")) return;
    b.classList.add("flipped");
    b.setAttribute("aria-label", b.querySelector(".front").textContent);
    open.push(b);
    if (open.length < 2) return;
    moves++;
    $("#mm", stage).textContent = moves;
    const [a, c] = open;
    if (a.dataset.i === c.dataset.i) {
      a.classList.add("done"); c.classList.add("done");
      open = []; found++;
      $("#mp", stage).textContent = `${found}/${g.pairs.length}`;
      burst(e.clientX, e.clientY, 7);
      if (found === g.pairs.length) {
        const prev = store.get(key);
        if (prev == null || moves < prev) store.set(key, moves);
        setTimeout(() => doneCard(stage, `${moves}<em> moves</em>`,
          moves === g.pairs.length ? "A perfect game. Fork, clone, commit, push, PR, merge." : moves <= g.pairs.length + 2 ? "Near-perfect memory. Fork, clone, commit, push, PR, merge." : "All pairs found. A perfect game takes 6 moves.",
          () => gameMatch(stage, g, key)), 700);
      }
    } else {
      lock = true;
      setTimeout(() => { a.classList.remove("flipped"); c.classList.remove("flipped"); a.setAttribute("aria-label", "Hidden card"); c.setAttribute("aria-label", "Hidden card"); open = []; lock = false; }, 950);
    }
  }));
}

function gameQuiz(stage, g, key) {
  let idx = 0, score = 0;
  const results = [];
  const best = store.get(key);
  stage.innerHTML = head(g, `<span>Score <b id="qs">0</b>/${g.questions.length}</span><span>Best <b>${best == null ? "—" : best + "/" + g.questions.length}</b></span>`) +
    `<div class="stage-body"><div class="quiz"></div></div>`;
  const box = $(".quiz", stage);
  const render = () => {
    const q = g.questions[idx];
    box.innerHTML = `<div class="progress">${g.questions.map((_, i) => `<i class="${results[i] === true ? "ok" : results[i] === false ? "no" : i === idx ? "now" : ""}"></i>`).join("")}</div>
      <p class="pixel" style="font-size:.66rem;color:rgba(244,239,230,.6);margin:0 0 10px">Question ${idx + 1} of ${g.questions.length}</p>
      <p class="q">${q.q}</p>
      <div class="opts">${q.opts.map((o, i) => `<button class="opt" data-i="${i}" data-cursor="Pick">${o}</button>`).join("")}</div>`;
    $$(".opt", box).forEach(b => b.addEventListener("click", (e) => {
      const pick = +b.dataset.i, right = pick === q.a;
      $$(".opt", box).forEach((o, i) => { o.disabled = true; if (i === q.a) o.classList.add("ok"); });
      if (!right) b.classList.add("no"); else { score++; burst(e.clientX, e.clientY, 6); }
      results[idx] = right;
      $("#qs", stage).textContent = score;
      $$(".progress i", box)[idx].className = right ? "ok" : "no";
      const ex = document.createElement("div");
      ex.innerHTML = `<p class="explain">${right ? "<b>Right.</b> " : "<b>Not quite.</b> "}${q.why}</p>
        <div class="stage-actions"><button class="btn" data-cursor="Next">${idx < g.questions.length - 1 ? "Next question" : "See my score"}</button></div>`;
      box.appendChild(ex);
      const next = ex.querySelector("button");
      next.focus({ preventScroll: true });
      next.addEventListener("click", () => {
        idx++;
        if (idx < g.questions.length) return render();
        const prev = store.get(key);
        if (prev == null || score > prev) store.set(key, score);
        doneCard(stage, `${score}<em>/${g.questions.length}</em>`,
          score === g.questions.length ? "Full marks. Ready to vibe-code the final project." : score >= 7 ? "Strong. Replay to catch the ones you missed." : "Re-read the keepers above, then try again.",
          () => gameQuiz(stage, g, key));
      });
    }));
  };
  render();
}

/* ---------------- scroll reveals ---------------- */
// Content is visible by default. Only blocks still below the fold get hidden,
// then slide in (staggered) as they scroll into view.
const revealer = ("IntersectionObserver" in window) ? new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.remove("pre"); revealer.unobserve(e.target); } });
}, { rootMargin: "0px 0px -8% 0px" }) : null;

function armReveals(root) {
  $$(".mask", root).forEach(m => $$(".line > span", m).forEach((sp, i) => sp.style.setProperty("--li", i)));
  if (reduceMotion || !revealer) return;
  const seen = new Map();
  $$("[data-reveal]", root).forEach(el => {
    const p = el.parentElement, i = seen.get(p) || 0;
    seen.set(p, i + 1);
    el.style.setProperty("--d", `${Math.min(i, 6) * 90}ms`);
    if (el.getBoundingClientRect().top > innerHeight * .92) { el.classList.add("pre"); revealer.observe(el); }
  });
}

/* ---------------- routing + page transitions ---------------- */
let current = null;
function routeFromHash() {
  const id = location.hash.slice(1);
  if (id === "sessions") return "home";
  return SESSIONS.some(s => s.id === id) ? id : "home";
}
function show(route) {
  $$(".page").forEach(p => {
    const on = p.dataset.page === route;
    p.hidden = !on;
    p.classList.remove("is-entering");
    if (on) { void p.offsetWidth; p.classList.add("is-entering"); }
  });
  $$("#navLinks a").forEach(a => a.dataset.route === route ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  const s = SESSIONS.find(x => x.id === route);
  document.title = s ? `${s.speaker}: ${s.title} · Emilia` : "Emilia's Field Journal";
  current = route;
}
function go() {
  const route = routeFromHash();
  const wantsSessions = location.hash === "#sessions";
  if (route === current) {
    if (wantsSessions) $("#sessions").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    return;
  }
  const page = () => $(`.page[data-page="${route}"]`);
  if (current === null || reduceMotion) {
    const first = current === null;
    show(route);
    if (!first) scrollTo(0, 0);
    if (wantsSessions) $("#sessions").scrollIntoView();
    armReveals(page());
    return;
  }
  const a = $(".wipe-a"), b = $(".wipe-b");
  const s = SESSIONS.find(x => x.id === route);
  $(".wipe-label", b).textContent = s ? `Issue #01 — Session ${s.no} → ${s.speaker}` : "Issue #01 — ← Contents";
  const opts = { duration: 640, easing: "cubic-bezier(.7,0,.2,1)", fill: "forwards" };
  const up = [{ transform: "translateY(100%)" }, { transform: "translateY(0)" }];
  const away = [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }];
  a.animate(up, opts);
  b.animate(up, { ...opts, delay: 110 }).finished
    .then(() => {
      show(route);
      if (wantsSessions) $("#sessions").scrollIntoView(); else scrollTo(0, 0);
      armReveals(page());
      return new Promise(r => setTimeout(r, 160));
    })
    .then(() => { b.animate(away, opts); return a.animate(away, { ...opts, delay: 90 }).finished; });
}

/* ---------------- sticker cursor trail ---------------- */
// One cut-out every ~80px of mouse travel, in shuffled order, slapped down
// with a pop, then gone after ~0.9s. Max 12 on screen. Mouse only.
const trail = $(".trail");
const stickerImgs = STICKER_FILES.map(src => { const im = new Image(); im.decoding = "async"; im.src = src; return im; });
let bag = [];
const nextSticker = () => { if (!bag.length) bag = shuffle(stickerImgs.map((_, i) => i)); return stickerImgs[bag.pop()]; };

function slap(x, y) {
  if (reduceMotion) return;
  while (trail.childElementCount >= 12) trail.firstElementChild.remove();
  const src = nextSticker();
  const el = document.createElement("img");
  el.className = "sticker";
  el.alt = "";
  el.src = src.src;
  el.style.width = (70 + Math.random() * 40).toFixed(0) + "px";
  trail.appendChild(el);
  const r = (Math.random() * 40 - 20).toFixed(1);
  const at = `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${r}deg)`;
  el.animate([
    { transform: `${at} scale(.4)`, opacity: 0 },
    { transform: `${at} scale(1.14)`, opacity: 1, offset: .13 },
    { transform: `${at} scale(.97)`, opacity: 1, offset: .22 },
    { transform: `${at} scale(1)`, opacity: 1, offset: .3 },
    { transform: `${at} scale(1)`, opacity: 1, offset: .72 },
    { transform: `${at} scale(.55)`, opacity: 0 }
  ], { duration: 1250, easing: "cubic-bezier(.22,.8,.3,1)", fill: "forwards" }).finished.then(() => el.remove(), () => {});
}
// small celebration used by the games: a few stickers around the click
function burst(x, y, n) {
  const k = Math.min(n, 4);
  for (let i = 0; i < k; i++) setTimeout(() => slap(x + (Math.random() - .5) * 140, y + (Math.random() - .5) * 90), i * 70);
}

if (finePointer && !reduceMotion) {
  let lx = null, ly = null, travel = 0;
  addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    if (lx !== null) travel += Math.hypot(e.clientX - lx, e.clientY - ly);
    lx = e.clientX; ly = e.clientY;
    if (travel >= 80) { travel = 0; slap(e.clientX, e.clientY); }
  }, { passive: true });
}

/* ---------------- custom cursor ---------------- */
function initCursor() {
  if (!finePointer || reduceMotion) return;
  document.body.classList.add("has-cursor");
  const cur = $(".cursor"), dot = $(".cursor-dot"), ring = $(".cursor-ring"), label = $(".cursor-label");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px)`; }, { passive: true });
  (function loop() { rx += (mx - rx) * .18; ry += (my - ry) * .18; ring.style.transform = `translate(${rx}px, ${ry}px)`; requestAnimationFrame(loop); })();
  document.addEventListener("pointerover", (e) => {
    const t = e.target.closest("a, button");
    if (t && !t.disabled) { cur.classList.add("hover"); label.textContent = t.dataset.cursor || "Open"; }
  });
  document.addEventListener("pointerout", (e) => { if (e.target.closest("a, button")) cur.classList.remove("hover"); });
  document.addEventListener("pointerleave", () => cur.style.opacity = 0);
  document.addEventListener("pointerenter", () => cur.style.opacity = 1);
}

/* ---------------- small motions ---------------- */
function initRotator() {
  const words = ["guest talks", "vibe coding", "platform tools", "good ideas"];
  const rot = $("#rot");
  let i = 0;
  if (reduceMotion) return;
  setInterval(() => {
    const old = rot.firstElementChild;
    i = (i + 1) % words.length;
    const nw = document.createElement("span");
    nw.textContent = words[i];
    nw.className = "in";
    old.className = "out";
    rot.appendChild(nw);
    setTimeout(() => old.remove(), 620);
  }, 2400);
}
function initRowPreview() {
  const pv = $("#rowPreview");
  if (!finePointer) return;
  let x = 0, y = 0, px = 0, py = 0;
  $$("#rows a.row").forEach(r => {
    r.addEventListener("pointerenter", () => {
      const [c, t] = r.dataset.preview.split("|");
      pv.firstElementChild.style.background = c;
      pv.lastElementChild.textContent = t;
      pv.classList.add("on");
    });
    r.addEventListener("pointerleave", () => pv.classList.remove("on"));
  });
  addEventListener("pointermove", (e) => { x = e.clientX + 120; y = e.clientY - 20; }, { passive: true });
  (function loop() { px += (x - px) * .15; py += (y - py) * .15; pv.style.left = px + "px"; pv.style.top = py + "px"; requestAnimationFrame(loop); })();
}

/* ---------------- pool-water background ---------------- */
// The satin photo is drawn through a small WebGL shader: the image ripples like a
// pool floor seen through moving water, and a net of sunlit caustic lines (butter
// yellow from the palette) drifts across it. Falls back to the CSS drift version
// when WebGL is missing or the visitor prefers reduced motion.
function initWater() {
  if (reduceMotion) return;
  const host = $(".satin");
  const cv = document.createElement("canvas");
  cv.className = "satin-gl";
  const gl = cv.getContext("webgl", { alpha: false, antialias: false, depth: false, powerPreference: "low-power" });
  if (!gl) return;
  const vs = "attribute vec2 a;void main(){gl_Position=vec4(a,0.0,1.0);}";
  const fs = `precision mediump float;
uniform sampler2D u_tex; uniform vec2 u_res; uniform vec2 u_img; uniform float u_t;
#define TAU 6.28318530718
float caustic(vec2 uv, float time){
  vec2 p = uv * TAU - 250.0;
  vec2 i = p; float c = 1.0; float inten = 0.005;
  for (int n = 0; n < 5; n++) {
    float t = time * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(t - i.x) + sin(t + i.y), sin(t - i.y) + cos(t + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + t) / inten), p.y / (cos(i.y + t) / inten)));
  }
  c /= 5.0;
  c = 1.17 - pow(c, 1.4);
  return clamp(pow(abs(c), 8.0), 0.0, 1.0);
}
void main(){
  vec2 frag = gl_FragCoord.xy;
  vec2 st = frag / u_res;
  float aspect = u_res.x / u_res.y;
  vec2 q = vec2(st.x * aspect, st.y);
  float t = u_t;
  // cover-fit the photo, zoomed in a little so its edges never show
  vec2 r = u_res / u_img; float s = max(r.x, r.y);
  vec2 uv = (frag - 0.5 * u_res) / (u_img * s);
  uv = uv * 0.82 + 0.5; uv.y = 1.0 - uv.y;
  uv += vec2(sin(t * 0.07), cos(t * 0.05)) * 0.025;
  // pool-surface wobble
  vec2 w = vec2(sin(q.y * 9.0 + t * 1.1) + sin((q.x + q.y) * 6.0 - t * 0.8),
                cos(q.x * 8.0 - t * 0.9) + sin((q.x - q.y) * 7.0 + t * 0.6));
  uv += w * 0.0065;
  vec3 col = texture2D(u_tex, uv).rgb;
  // sunlit caustics
  float c = caustic(q * 2.0 + w * 0.05, t * 0.6);
  float c2 = caustic(q * 2.0 + w * 0.05 + 0.004, t * 0.6 + 0.05);
  vec3 butter = vec3(0.957, 0.925, 0.761);
  col = mix(col, butter, c * 0.62);
  col += butter * c2 * 0.12;
  gl_FragColor = vec4(col, 1.0);
}`;
  const sh = (type, src) => { const o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o); return gl.getShaderParameter(o, gl.COMPILE_STATUS) ? o : null; };
  const v = sh(gl.VERTEX_SHADER, vs), f = sh(gl.FRAGMENT_SHADER, fs);
  if (!v || !f) return;
  const prog = gl.createProgram();
  gl.attachShader(prog, v); gl.attachShader(prog, f); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "a");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uRes = gl.getUniformLocation(prog, "u_res"), uImg = gl.getUniformLocation(prog, "u_img"), uT = gl.getUniformLocation(prog, "u_t");

  const img = new Image();
  img.decoding = "async";
  img.src = "assets/bg/satin.webp";
  img.onload = () => {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
    gl.uniform2f(uImg, img.naturalWidth, img.naturalHeight);
    host.insertBefore(cv, host.firstChild);
    host.classList.add("gl");
    const resize = () => {
      // rendered below screen resolution: the photo is soft anyway and it keeps the GPU cool
      const k = Math.min(devicePixelRatio || 1, 1.5) * .6;
      cv.width = Math.max(1, Math.round(innerWidth * k));
      cv.height = Math.max(1, Math.round(innerHeight * k));
      gl.viewport(0, 0, cv.width, cv.height);
      gl.uniform2f(uRes, cv.width, cv.height);
    };
    resize();
    addEventListener("resize", resize);
    const start = performance.now();
    (function frame(now) {
      gl.uniform1f(uT, (now - start) / 1000 * .55);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestAnimationFrame(frame);
    })(start);
  };
}

/* ---------------- boot ---------------- */
buildNav();
buildFan();
buildRows();
buildMarquee();
SESSIONS.forEach(buildSession);
initWater();
initCursor();
initRotator();
initRowPreview();
addEventListener("hashchange", go);
go();
