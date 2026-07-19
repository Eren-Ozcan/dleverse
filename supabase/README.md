# Global istatistikler kurulumu (Supabase)

"Bugün X kişi bildi" sayacı ve liderlik tablosu, ayrı bir Supabase projesi
gerektirir. Proje kurulana kadar bu bölümler uygulamada otomatik olarak
gizli kalır — hiçbir yerde uydurma sayı gösterilmez.

## Adımlar

1. https://supabase.com üzerinde ücretsiz bir proje oluştur.
2. Proje panelinde **SQL Editor** açıp `supabase/schema.sql` dosyasının
   içeriğini çalıştır. Bu, `daily_completions` tablosunu ve anonim
   erişim politikalarını kurar.
3. Proje ayarlarından **Project URL** ve **anon public key**'i kopyala.
4. Repo kökünde `.env.example`'ı `.env` olarak kopyala ve değerleri doldur:
   ```
   EXPO_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```
5. Dev sunucusunu yeniden başlat (`npm start`). `.env` zaten `.gitignore`'da,
   commit'lenmez.

## Veri modeli

`daily_completions` tablosu, her (paket, mod, gün, cihaz) için tek satır
tutar — cihaz kimliği hesap gerektirmeden AsyncStorage'da üretilir ve asla
UI'da gösterilmez, sadece sıralama/sayım için kullanılır. RLS politikaları
anonim `insert`/`update`/`select` izni verir; okunan veri sadece agregasyon
(sayaç, en iyi tahmin sayıları) için kullanılır.
