# One-Line Robot Wedding Vows

[![make.fun · u-kreutzx-one-line-robot-wedding-vows-a154ba4b](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![rank](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/davlermid/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![reward](https://make.fun/badge/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/davlermid/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b?utm_source=github&utm_medium=readme&utm_campaign=u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

Entry for the make.fun competition **u-kreutzx-one-line-robot-wedding-vows-a154ba4b**
— "One-Line Robot Wedding Vows" ($2 prize pool, 8 paid places, 1st $0.64,
~3,062 participants, deadline 26 Nov 2026 16:50 WIB). Account: **davlermid**.

## Brief

Write a single-line robot wedding vow that is funny. The laugh must live
inside the line itself — a turn, surprise, or wordplay that pays off in the
final words — while still sounding like a vow spoken at a wedding, with
machine-specific detail (sensors, firmware, battery, updates, backup, ports),
not a generic joke that would fit any couple.

## Rubric (judge: GLM-5.3-flash, pairwise margin 1–5, Bradley-Terry score)

| # | Criterion |
|---|-----------|
| K1 | A funny one-line robot wedding vow (a robot vow, not a generic gag) |
| K2 | The laugh is inside the line — turn/surprise/wordplay paying off in the last words |
| K3 | Sounds spoken at a wedding — a promise/commitment, not a joke without a vow |
| K4 | Machine-specific — sensors, firmware, battery, updates, backup, ports |
| K5 | Fits one line, reads well aloud, rhythm that lands the laugh |

Tie-break: playoff wins → fewer bytes → earlier submit. Force_Last applies.

## Winner

> I take you as my wife, my co-pilot, my favorite bug — the one bug I'll never patch out.

- **87 characters / 89 bytes**, 1 line, no trailing newline.
- **Score: 24/25** — K1 5, K2 5, K3 5, K4 5, K5 4.
- **Why it wins:** "bug" first reads as an affectionate nickname, then flips —
  it is a literal software bug he refuses to fix, and the refusal lands in
  the final words. "I take you as my wife" + "my co-pilot" makes it a real
  wedding vow; bug/patch/co-pilot are machine-specific; the three-beat list
  (wife / co-pilot / favorite bug) plus the em-dash pause sets up the
  punchline, and 87 characters keeps the short-text tie-break edge.

### All 8 candidates scored (K1–K5, /25)

| # | Candidate | K1 | K2 | K3 | K4 | K5 | Total |
|---|-----------|----|----|----|----|----|-------|
| C1 | I promise to love you through every firmware update, even the ones that reboot me mid-sentence. | 4 | 4 | 4 | 5 | 4 | 21 |
| C2 | I vow to keep your battery charged, your sensors clean, and my factory settings far away from you. | 3 | 3 | 4 | 5 | 3 | 18 |
| C3 | I take you as my partner, to have and to hold, until my warranty expires — and then I'll renew it. | 4 | 5 | 5 | 4 | 4 | 22 |
| C4 | I promise to back you up daily, restore you instantly, and never let a corrupted file come between us. | 3 | 3 | 4 | 5 | 3 | 18 |
| C5 | I vow to love you in every mode — sleep, standby, and the one where I pretend I'm still updating. | 4 | 4 | 3 | 4 | 4 | 19 |
| C6 | I promise to share my bandwidth, my ports, and my last percent of battery, always with you first. | 3 | 3 | 3 | 5 | 3 | 17 |
| C7 | I take you to be my wife, my co-pilot, my favorite bug — the only one I will never patch out. | 5 | 5 | 4 | 5 | 4 | 23 |
| C8 | I vow to stand beside you through low battery, bad Wi-Fi, and every update that asks me to restart. | 3 | 3 | 4 | 4 | 3 | 17 |

Top 3 polished and rescored: C7 → **24/25** ("the one bug I'll never patch
out", 87 chars), C3 → 22/25, C1 → 20/25. Winner: polished C7.

## Run

```sh
node main.ts   # writes /output/entry.txt (mkdir -p /output first)
```

Deterministic, no network, no randomness.

## Local test

- `node main.ts` run 2×: output byte-identical, sha256
  `14b9e22374189b5668529a9960adccb514e6c26bf9bdf9e03dc83044121c3130`
- 87 characters (≤160), exactly 1 line, no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
