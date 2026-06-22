export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "migrating-from-make-to-bazel",
    title: "Migrating a Large C++ Codebase from Make to Bazel",
    date: "2025-03-10",
    description:
      "Lessons learned from leading a build system migration at scale — what worked, what broke, and why reproducibility matters.",
    tags: ["C++", "Bazel", "Build Systems"],
    content: `
Migrating a build system is one of those projects that sounds straightforward until you're knee-deep in it.

## Why we migrated

Our Make-based build had grown organically over years — it worked, but builds were slow, non-reproducible across machines, and nearly impossible to parallelize cleanly. Bazel promised hermeticity, remote caching, and fast incremental builds.

## The plan

We started by auditing all existing targets and grouping them by dependency layer. The key insight: **don't big-bang migrate**. We ran both build systems in parallel for several months, which let us validate Bazel outputs against Make outputs for correctness.

## Starlark is deceptively simple

Writing Bazel rules in Starlark (a Python dialect) felt familiar but had sharp edges around depsets, transitions, and platform constraints. Cross-platform configurations — targeting different hardware platforms — required careful use of \`config_setting\` and \`select()\`.

## What improved

- Build times dropped significantly thanks to remote cache hits
- Developers got consistent builds regardless of their local environment
- CI became faster and more reliable

## What to watch out for

- Third-party dependencies need careful wrapping (especially for proprietary libraries)
- Hermetic builds will surface implicit dependencies you didn't know existed
- Invest in a good onboarding guide — Bazel has a learning curve

The migration was worth it. If you're considering one, start small, measure everything, and be patient with the tooling ecosystem.
    `,
  },
  {
    slug: "maxheapq-publishing-python-package",
    title: "Publishing My First Python Package to PyPI",
    date: "2025-01-20",
    description:
      "A walkthrough of building MAXHEAPQ — a max binary heap library — and the surprisingly interesting process of getting it onto PyPI.",
    tags: ["Python", "Open Source", "Data Structures"],
    content: `
I built [MAXHEAPQ](https://github.com/snowAvocado) as a hands-on way to learn Python packaging. Python's built-in \`heapq\` only provides a min-heap, so a max-heap requires negating values — MAXHEAPQ wraps this cleanly.

## The data structure

A binary max-heap is a complete binary tree where each parent is ≥ its children. The two core operations:

- **Push**: insert at the end, then sift up — O(log n)
- **Pop**: swap root with last, remove last, then sift down — O(log n)

Peeking at the max is O(1) since it's always at index 0.

## Packaging with \`pyproject.toml\`

Modern Python packaging uses \`pyproject.toml\` instead of the old \`setup.py\`. Key sections:

\`\`\`toml
[build-system]
requires = ["setuptools", "wheel"]
build-backend = "setuptools.backends.legacy:build"

[project]
name = "maxheapq"
version = "0.1.0"
description = "A max binary heap implementation"
\`\`\`

## Publishing

\`\`\`bash
python -m build
twine upload dist/*
\`\`\`

That's it. The hardest part was choosing a unique package name on PyPI.

## What I learned

Even a small library teaches you a lot: writing clear docs, handling edge cases, semantic versioning, and the importance of a good README. Worth doing as a learning exercise for any developer.
    `,
  },
  {
    slug: "event-driven-architecture-in-telecom",
    title: "Event-Driven Architecture in Telecom Software",
    date: "2024-11-05",
    description:
      "How actor models and message passing help manage complexity in large-scale baseband software systems.",
    tags: ["Architecture", "C++", "Telecom"],
    content: `
Telecom baseband software has to be fast, reliable, and highly concurrent. Event-driven architecture (EDA) with actor models is a natural fit — and it shaped how I think about system design.

## Why actors?

In a traditional threading model, shared mutable state leads to locks, deadlocks, and race conditions. The actor model sidesteps this: each actor owns its state exclusively and communicates only via messages. No shared memory, no locks.

In C++, this often means a lightweight message queue per component and a scheduler that dispatches messages to the right handler.

## Message passing in practice

Each message is a strongly typed struct (often serialized with Protocol Buffers for interoperability). Actors subscribe to message types they care about — this decoupling means you can swap implementations without touching consumers.

## Async without async/await

Unlike modern JavaScript or Rust, our C++ codebase predated widespread \`coroutine\` support. We modeled async operations as state machines — each actor held its current state and transitioned on incoming messages. Verbose, but explicit and testable.

## Lessons

- **Small actors are better actors.** An actor that does one thing is easy to test in isolation.
- **Message schemas are API contracts.** Treat breaking changes to message types like API version bumps.
- **Observability is hard.** Distributed message flows are tough to trace — invest early in logging and correlation IDs.

EDA isn't a silver bullet, but for high-throughput, concurrent telecom workloads, it's proven extremely durable.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
