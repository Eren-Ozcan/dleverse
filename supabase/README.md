# Global stats setup (Supabase)

The "X people solved it today" counter and the leaderboard need a separate
Supabase project. Until one is set up, those sections stay hidden in the app
automatically — no invented numbers are shown anywhere.

## Steps

1. Create a free project at https://supabase.com.
2. In the project dashboard open the **SQL Editor** and run the contents of
   `supabase/schema.sql`. This creates the `daily_completions` table and the
   anonymous access policies.
3. From the project settings, copy the **Project URL** and the
   **anon public key**.
4. In the repo root, copy `.env.example` to `.env` and fill in the values:
   ```
   EXPO_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```
5. Restart the dev server (`npm start`). `.env` is already in `.gitignore` and
   is not committed.

## Data model

The `daily_completions` table keeps one row per (pack, mode, day, device) — the
device id is generated in AsyncStorage without requiring an account, is never
shown in the UI, and is only used for ranking/counting. The RLS policies grant
anonymous `insert`/`update`/`select`; the data that is read back is used only
for aggregation (the counter, best-guess counts).
