(function () {
  const d = PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const tag = (text, color) => el("span", `tag tag-${color || "default"}`, text);
  const TYPE_COLORS = { Research: "blue", Consulting: "orange", Analysis: "green" };

  document.title = `${d.name} · Portfolio`;
  $("crumb").textContent = `${d.name} / Portfolio`;
  $("page-icon").textContent = d.initials;
  $("name").textContent = d.name;
  $("headline").textContent = d.headline;
  $("summary").textContent = d.summary;

  d.properties.forEach((p) => {
    const row = el("div", "prop");
    const value = el("div", "prop-value");
    if (p.tags) p.tags.forEach((t) => value.appendChild(tag(t, "gray")));
    else if (p.status) {
      const s = el("span", "status");
      s.append(el("span", "dot"), document.createTextNode(p.status));
      value.appendChild(s);
    } else value.textContent = p.text;
    row.append(el("div", "prop-label", p.label), value);
    $("props").appendChild(row);
  });

  d.highlights.forEach((h) => {
    const box = el("div", "highlight");
    box.append(el("strong", null, h.value), el("span", null, h.label));
    $("highlights").appendChild(box);
  });

  d.services.forEach((s) => {
    const box = el("div", "service");
    const links = el("div", "service-links");
    s.evidence.forEach((title) => {
      const i = d.projects.findIndex((p) => p.title === title);
      if (i < 0) return;
      const b = el("button", "evidence", `↗ ${title}`);
      b.type = "button";
      b.addEventListener("click", () => openPeek(i));
      links.appendChild(b);
    });
    box.append(el("h4", null, s.title), el("p", "muted small", s.text), links);
    $("services-list").appendChild(box);
  });

  const types = ["All", ...new Set(d.projects.map((p) => p.type))];
  let active = "All";
  const renderGallery = () => {
    const gallery = $("gallery");
    gallery.innerHTML = "";
    d.projects
      .map((p, i) => ({ p, i }))
      .filter(({ p }) => active === "All" || p.type === active)
      .forEach(({ p, i }) => {
        const card = el("button", "card");
        card.type = "button";
        const band = el("div", `card-band band-${TYPE_COLORS[p.type] || "gray"}`);
        band.appendChild(el("span", null, p.metric));
        const body = el("div", "card-body");
        const tags = el("div", "tags");
        tags.appendChild(tag(p.type, TYPE_COLORS[p.type]));
        p.tags.forEach((t) => tags.appendChild(tag(t, "gray")));
        body.append(el("h4", null, p.title), el("p", "muted small", p.org), tags);
        card.append(band, body);
        card.addEventListener("click", () => openPeek(i));
        gallery.appendChild(card);
      });
  };
  types.forEach((t) => {
    const b = el("button", "view-tab", t);
    b.type = "button";
    if (t === active) b.classList.add("active");
    b.addEventListener("click", () => {
      active = t;
      document.querySelectorAll(".view-tab").forEach((x) => x.classList.toggle("active", x === b));
      renderGallery();
    });
    $("filters").appendChild(b);
  });
  renderGallery();

  const peek = $("peek");
  const scrim = $("scrim");
  function openPeek(i) {
    const p = d.projects[i];
    const body = $("peek-body");
    body.innerHTML = "";
    const tags = el("div", "tags");
    tags.appendChild(tag(p.type, TYPE_COLORS[p.type]));
    p.tags.forEach((t) => tags.appendChild(tag(t, "gray")));
    body.append(el("h2", "peek-title", p.title), el("p", "muted", p.org), tags);
    const metric = el("div", "callout");
    metric.append(el("div", "callout-mark", "#"), el("p", null, p.metric));
    body.appendChild(metric);
    const section = (title, content) => {
      body.appendChild(el("h3", "sub", title));
      if (Array.isArray(content)) {
        const ul = el("ul", "bullets");
        content.forEach((c) => ul.appendChild(el("li", null, c)));
        body.appendChild(ul);
      } else body.appendChild(el("p", null, content));
    };
    section("The question", p.problem);
    section("Approach", p.approach);
    section("Findings & outcomes", p.findings);
    if (p.link) {
      const a = el("a", "btn", "Read the full report");
      a.href = p.link;
      a.target = "_blank";
      a.rel = "noopener";
      body.appendChild(a);
    }
    peek.classList.add("open");
    scrim.classList.add("open");
    peek.setAttribute("aria-hidden", "false");
    peek.scrollTop = 0;
  }
  const closePeek = () => {
    peek.classList.remove("open");
    scrim.classList.remove("open");
    peek.setAttribute("aria-hidden", "true");
  };
  $("peek-close").addEventListener("click", closePeek);
  scrim.addEventListener("click", closePeek);
  document.addEventListener("keydown", (e) => e.key === "Escape" && closePeek());

  d.experience.forEach((job, idx) => {
    const det = el("details", "toggle");
    if (idx === 0) det.open = true;
    const sum = el("summary");
    const left = el("span", "toggle-title");
    left.append(el("strong", null, job.role), document.createTextNode(` · ${job.org}`));
    sum.append(left, el("span", "muted small", `${job.period} · ${job.place}`));
    const ul = el("ul", "bullets");
    job.points.forEach((pt) => ul.appendChild(el("li", null, pt)));
    det.append(sum, ul);
    $("experience-list").appendChild(det);
  });

  d.skills.forEach((g) => {
    const row = el("div", "prop");
    const value = el("div", "prop-value");
    g.items.forEach((s) => value.appendChild(tag(s, g.color)));
    row.append(el("div", "prop-label", g.group), value);
    $("skills-list").appendChild(row);
  });

  d.education.forEach((e) => {
    const row = el("div", "edu");
    const left = el("div");
    left.append(el("strong", null, e.degree), el("div", "muted small", `${e.org} · ${e.note}`));
    row.append(left, el("span", "muted small", e.period));
    $("education-list").appendChild(row);
  });

  d.certifications.forEach((c) => $("cert-list").appendChild(el("li", null, c)));
  $("languages").textContent = d.languages.join(" · ");

  const contacts = [
    { label: "Email", text: d.email, href: `mailto:${d.email}` },
    { label: "LinkedIn", text: "View profile", href: d.linkedin },
  ];
  if (d.resumeUrl) contacts.push({ label: "Resume", text: "Download PDF", href: d.resumeUrl });
  contacts.forEach((c) => {
    const row = el("div", "prop");
    const a = el("a", "link", c.text);
    a.href = c.href;
    if (!c.href.startsWith("mailto")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    const value = el("div", "prop-value");
    value.appendChild(a);
    row.append(el("div", "prop-label", c.label), value);
    $("contact-list").appendChild(row);
  });
  $("footer").textContent = `© ${new Date().getFullYear()} ${d.name}`;

  const root = document.documentElement;
  const toggle = $("theme-toggle");
  const setTheme = (t) => {
    root.dataset.theme = t;
    toggle.textContent = t === "dark" ? "Light mode" : "Dark mode";
    localStorage.setItem("theme", t);
  };
  setTheme(localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  toggle.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));
})();
