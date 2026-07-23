// Portfolio interactions — tab nav sync, footer year, and project rendering.

(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Projects: render from projects.json ---------- */
  renderProjects();

  async function renderProjects() {
    const mount = document.getElementById('project-cards');
    if (!mount) return;
    try {
      const res = await fetch('projects.json', { cache: 'no-cache' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const list = (data.projects || [])
        .filter((p) => p.visible !== false)
        // Featured first; otherwise preserve file order (stable sort).
        .sort((a, b) => (b.featured === true) - (a.featured === true));

      if (!list.length) {
        mount.innerHTML = '<p class="cards__empty">No projects to show yet.</p>';
        return;
      }
      mount.innerHTML = list.map(cardHTML).join('');
    } catch (err) {
      // Keep the page usable even if the fetch fails (e.g. opened via file://).
      const fb = document.getElementById('project-fallback');
      if (fb) fb.textContent = 'Projects unavailable — serve this site over HTTP to view them.';
      console.error('Failed to load projects.json:', err);
    }
  }

  function cardHTML(p) {
    const role = p.role
      ? `<span class="card__role">${esc(p.role)}</span>`
      : '';
    const tags = (p.tags || [])
      .map((t) => {
        const cls = ['blue', 'purple', 'green'].includes(t.color) ? ` tag--${t.color}` : '';
        return `<span class="tag${cls}">${esc(t.label)}</span>`;
      })
      .join('');
    const links = (p.links || [])
      .filter((l) => l && l.url && l.label)
      .map((l) => `<a class="card__link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`)
      .join('');

    return `
      <article class="card">
        <div class="card__head">
          <h3 class="card__title">${esc(p.title || 'Untitled')}</h3>
          ${role}
        </div>
        ${tags ? `<div class="tags">${tags}</div>` : ''}
        <p class="card__body">${esc(p.description || '')}</p>
        ${links ? `<div class="card__links">${links}</div>` : ''}
      </article>`;
  }

  // Escape untrusted strings before injecting as HTML.
  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
  }

  /* ---------- Tab navigation + scroll spy ---------- */
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const sections = tabs
    .map((t) => document.getElementById(t.dataset.tab))
    .filter(Boolean);

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => setActive(tab.dataset.tab));
  });

  function setActive(id) {
    tabs.forEach((t) => t.classList.toggle('is-active', t.dataset.tab === id));
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }
})();
