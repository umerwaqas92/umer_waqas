(function() {
  function setVal(selector, val) {
    const el = document.querySelector(selector);
    if (el) {
      el.value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }
    return false;
  }
  setVal('input[name="firstname"]', 'Umer');
  setVal('input[name="lastname"]', 'Waqas');
  setVal('input[name="email"]', 'um.waqas.khan@gmail.com');
  setVal('input[name="headline"]', 'Senior Full-Stack & AI Engineer | Next.js, Cursor, LLM Agents');
  setVal('input[name="phone"]', '3459347900');
  setVal('input[name="address"]', 'Islamabad, Pakistan');
  setVal('textarea[name="summary"]', 'Full-stack AI developer with 6+ years experience specializing in Next.js (App Router), TypeScript, tRPC, PostgreSQL, and autonomous LLM agents (Cursor, Claude Code, Vercel AI SDK).');
  setVal('textarea[name="cover_letter"]', 'Hi Acquisity Team,\n\nI build autonomous AI agents, RAG workflows, and modern web applications using Next.js (App Router), TypeScript, Postgres, and Vercel AI SDK. My daily workflow is entirely AI-native with Cursor and Claude Code, enabling rapid prototyping, high-quality production shipping, and greenfield product iteration.\n\nI would love to contribute to Acquisity’s autonomous sales/marketing agent infrastructure.\n\nBest,\nUmer Waqas');
})();
