/**
 * Basic endpoint smoke tests — checks that every route returns HTTP 200.
 * Run after `npm run build && npm start` (server must be up on PORT or 3000).
 */

const BASE = `http://localhost:${process.env.PORT ?? 3000}`;

const routes = [
  "/",
  "/about",
  "/blog",
  "/cv",
  "/blog/migrating-from-make-to-bazel",
  "/blog/maxheapq-publishing-python-package",
  "/blog/event-driven-architecture-in-telecom",
];

let passed = 0;
let failed = 0;

for (const route of routes) {
  const url = `${BASE}${route}`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      console.log(`  PASS  ${res.status}  ${route}`);
      passed++;
    } else {
      console.error(`  FAIL  ${res.status}  ${route}`);
      failed++;
    }
  } catch (err) {
    console.error(`  ERROR       ${route}  —  ${err.message}`);
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
