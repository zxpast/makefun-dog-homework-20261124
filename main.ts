// The Dog Ate My Homework: Funniest Excuse — make.fun entry.
//
// One line, in the dog's own voice, after being caught eating the
// homework. The joke is dog logic, not a human joke told by a dog:
// the kid already blamed the dog ("the dog ate it"), so the dog ate
// the homework to make the kid's story true — and turns the accusation
// around. The twist lands in the last words: the kid is the liar,
// not the dog. The dog believes it has done nothing wrong.
//
// Design notes (from the winning-pattern playbook):
// - Twist in the final words ("You're the liar here, not me").
// - Specific + vivid: the teacher, the story, the accusation.
// - No stock lines: no cat, no taste of paper, no "good boy".
// - One line only, no second sentence explaining the joke.
// - Concrete nouns (teacher, story) + a loss verb (ate) + a reframe
//   in the second half: the dog reframes itself from culprit to
//   the one fixing the kid's lie.
//
// Fully deterministic: one fixed string, no clock, no Math.random,
// no network, Node 22 standard library only. Same bytes every run.
import * as fs from "node:fs";

const LINE =
  "You told your teacher the dog ate it, so I ate it \u2014 I was just making your story true. You\u2019re the liar here, not me.";

// Self-check against the competition gate before writing: the entry
// must be UTF-8 text of 1 to 200 characters, a single line, and not
// only whitespace. Fail loudly instead of shipping a bad artifact.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, gate needs 1-200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", LINE, "utf8");
