# Dleverse

A daily guessing game across many subjects. Each pack — F1 drivers, NBA
legends, chess champions, ancient civilizations, elements, mountains, and ~50
more — gives you one entity per day to identify. You guess a name, and every
attribute of your guess is scored against the answer: exact match, close, or
wrong. Narrow it down from there.

Built with Expo / React Native. Runs on Android, iOS and the web from the same
codebase.

## Game modes

- **Classic** — guess from the attribute grid alone.
- **Emoji** — a short emoji clue hints at the answer (`🐍🍎🍊`).
- **Sound** — a short audio clip (an instrument, a phrase, a voice sample).

Numeric and year fields support *near* matches: a guess within a per-field
range counts as partial rather than wrong, so a driver's debut year being three
seasons off still tells you something.

## Packs

54 packs live under `data/packs/`. Each is a single TypeScript file declaring
its fields, its entities, and a colour theme. The header comment of every pack
records where its content came from and, for image packs, the licensing
decision behind it — read that before adding entities to an existing pack.

Content is authored in Turkish as the canonical language and translated into
English, German, French, Spanish and Portuguese through each pack's `i18n`
block. Missing translations fall back to the canonical value rather than
breaking.

## Running

```sh
npm install
npm start          # Expo dev server
npm run android    # or: ios, web
```

`.env.example` lists the two environment variables
(`EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`). Neither is
required to play — see below.

## Global stats (optional)

The "X people solved it today" counter and the leaderboard need a separate
Supabase project. Until one is configured, those sections stay hidden in the
app — no invented numbers are ever shown. Setup steps are in
[`supabase/README.md`](supabase/README.md).

## Layout

| Path | What's in it |
|---|---|
| `app/` | Expo Router screens — pack list and the per-pack game |
| `engine/` | Guess scoring, daily selection, sharing, storage, localization |
| `data/packs/` | The 54 content packs plus their translations |
| `components/` | Guess grid, result panel, shared UI |
| `i18n/` | Interface strings |
| `supabase/` | Schema and setup for the optional global stats |

## License

MIT — see [LICENSE](LICENSE).
