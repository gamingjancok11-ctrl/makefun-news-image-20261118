// news-image-20261118: one image summing up the world news of 18 November 2026.
// The entry is the editorial illustration in entry.png beside this file. The
// grader runs this program with no network and a writable /output; it copies
// the image there as entry.png. Both runs write the same bytes, because the
// program only copies a fixed file and never touches the network or the clock.
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const src = join(dir, 'entry.png');
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Fail fast with a clear message instead of a raw ENOENT stack trace.
if (!existsSync(src)) {
  console.error(`news-image-20261118: missing input file: ${src}`);
  process.exit(1);
}
const expectedSize = statSync(src).size;
mkdirSync(out, { recursive: true });
const dest = join(out, 'entry.png');
copyFileSync(src, dest);

// Verify the copy landed whole; a truncated write must not pass silently.
if (statSync(dest).size !== expectedSize) {
  console.error(`news-image-20261118: incomplete copy: ${dest} is ${statSync(dest).size} bytes, expected ${expectedSize}`);
  process.exit(1);
}
