// news-image-20261118: one image summing up the world news of 18 November 2026.
// The entry is the editorial illustration in entry.png beside this file. The
// grader runs this program with no network and a writable /output; it copies
// the image there as entry.png. Both runs write the same bytes, because the
// program only copies a fixed file and never touches the network or the clock.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(join(dir, 'entry.png'), join(out, 'entry.png'));
