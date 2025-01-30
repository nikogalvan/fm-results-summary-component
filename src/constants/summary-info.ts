import { SummaryItem } from "../types";

const PATH = "./assets/images/";


export const SUMMARY_INFO: SummaryItem[] = [
  {
    id: crypto.randomUUID(),
    category: "Reaction",
    score: 80,
    icon: `${PATH}icon-reaction.svg`,
    color: "red",
  },
  {
    id: crypto.randomUUID(),
    category: "Memory",
    score: 92,
    icon: `${PATH}icon-memory.svg`,
    color: "yellow",
  },
  {
    id: crypto.randomUUID(),
    category: "Verbal",
    score: 61,
    icon: `${PATH}icon-verbal.svg`,
    color: "green",
  },
  {
    id: crypto.randomUUID(),
    category: "Visual",
    score: 72,
    icon: `${PATH}icon-visual.svg`,
    color: "blue",
  },
];
