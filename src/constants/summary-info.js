const PATH = "/assets/images";

export const SUMMARY_INFO = [
  {
    id: crypto.randomUUID(),
    category: "Reaction",
    score: 80,
    icon: `${PATH}/icon-reaction.svg`,
    color: "red",
  },
  {
    id: crypto.randomUUID(),
    category: "Memory",
    score: 92,
    icon: `${PATH}/icon-memory.svg`,
  },
  {
    id: crypto.randomUUID(),
    category: "Verbal",
    score: 61,
    icon: `${PATH}/icon-verbal.svg`,
  },
  {
    id: crypto.randomUUID(),
    category: "Visual",
    score: 72,
    icon: `${PATH}/icon-visual.svg`,
  },
];
