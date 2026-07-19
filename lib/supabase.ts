import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

/**
 * Supabase projesi henüz bağlanmadıysa null döner. Bu durumda global
 * sayaç/liderlik tablosu özellikleri sessizce gizlenir — asla uydurma
 * veri gösterilmez. Kurulum için supabase/README.md'ye bak.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured ? createClient(url!, anonKey!) : null;
