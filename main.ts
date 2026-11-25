// One-Line Robot Wedding Vows — make.fun entry
// Competition: u-kreutzx-one-line-robot-wedding-vows-a154ba4b
// Account: davlermid
//
// WINNER (87 chars / 89 bytes, 1 line, no trailing newline):
//   I take you as my wife, my co-pilot, my favorite bug — the one bug I'll never patch out.
//
// SCORES (rubric K1–K5, 1–5 each, /25) — 8 candidates, judged before writing:
//   C1 firmware-update reboot .......... 4+4+4+5+4 = 21
//   C2 battery/sensors/factory settings . 3+3+4+5+3 = 18
//   C3 warranty renew .................. 4+5+5+4+4 = 22
//   C4 backup/restore corrupted file .... 3+3+4+5+3 = 18
//   C5 sleep/standby/updating modes ..... 4+4+3+4+4 = 19
//   C6 bandwidth/ports/last percent ..... 3+3+3+5+3 = 17
//   C7 favorite bug, never patch out ... 5+5+4+5+4 = 23  <- winner (pre-polish)
//   C8 low battery/bad Wi-Fi/restart .... 3+3+4+4+3 = 17
// Top 3 polished and rescored:
//   C7 polished: 5+5+5+5+4 = 24  (shortened "the only one I will" -> "the one bug I'll")
//   C3 polished: 4+5+5+4+4 = 22
//   C1 polished: 4+4+4+4+4 = 20
//
// WHY IT WINS:
//   - K1 funny + unmistakably a robot vow: "bug" / "patch out" only works for a machine.
//   - K2 the laugh lands in the last words: "bug" first reads as affectionate
//     nickname, then flips — it is a literal software bug he refuses to fix.
//   - K3 a real vow: "I take you as my wife" + "my co-pilot" is a wedding promise,
//     not a joke stapled onto a ceremony.
//   - K4 machine-specific throughout: co-pilot, bug, patch — no human couple
//     would say this.
//   - K5 one breath, three-beat list (wife / co-pilot / favorite bug), then the
//     em-dash pause sets up the punchline; 87 chars / 89 bytes keeps the
//     tie-break edge (fewer bytes wins ties).
//
// Deterministic, no network, no randomness: writes exactly one line, no
// trailing newline, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I take you as my wife, my co-pilot, my favorite bug \u2014 the one bug I'll never patch out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
