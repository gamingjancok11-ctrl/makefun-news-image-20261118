# World news, 18 November 2026 — in one image

Entry for the make.fun competition `news-image-20261118`: sum up the world's
news of Wednesday 18 November 2026 in a single image.

## The image

`entry.png` (1024×1024, PNG) is a four-panel flat editorial illustration with
a date header, one short label per panel, and a bottom ticker carrying a fifth
story. The base illustration was generated, and all text (date, panel labels,
ticker) was rendered programmatically on top of it, so every word is crisp and
legible — no model-generated lettering.

## The five stories (as reported on 18 November 2026)

1. **U.S. strikes Iran's Qeshm Island** — US fighter jets struck a
   Revolutionary Guard missile launch site on Qeshm Island in the Strait of
   Hormuz; Iran then fired drones at US forces in Kuwait and Bahrain
   (Reuters, AFP, Just Security).
2. **Crimea Bridge partly destroyed** — Ukrainian drones and missiles struck
   the Kerch Bridge for a second day; part of a span collapsed into the strait
   (multiple outlets).
3. **Xi, Putin & Trump meet in Shenzhen** — Xi Jinping greeted Donald Trump on
   the tarmac as the APEC leaders' meeting opened; Xi and Vladimir Putin met
   ahead of Thursday's trilateral talks (ABC News, AFP).
4. **Cyclone Akvan nears India** — the storm strengthened in the Bay of
   Bengal, with landfall forecast on India's Andhra Pradesh coast on Friday
   20 November as a very severe cyclonic storm (India Meteorological
   Department).
5. **Peltola wins Alaska** — Democrat Mary Peltola defeated Republican
   incumbent Dan Sullivan, giving Democrats a projected 56–44 majority in the
   incoming US Senate (Associated Press).

## How it runs

`main.ts` (Node, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (`/output/entry.png` in the grader). No
network, no dependencies, deterministic: every run writes the same bytes.

Test locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
