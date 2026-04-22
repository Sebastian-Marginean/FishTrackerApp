# 🎣 FishTracker App — Setup Guide (Faza 1)

## Pas 1: Creează proiectul Expo

```bash
npx create-expo-app@latest FishTracker --template blank-typescript
cd FishTracker
```

## Pas 2: Instalează toate dependințele

```bash
npx expo install expo-location expo-camera expo-image-picker expo-notifications
npx expo install @react-native-async-storage/async-storage
npm install @supabase/supabase-js
npm install react-native-url-polyfill
npm install zustand
npm install react-native-mmkv
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
npm install react-native-dotenv
```

## Pas 3: Creează fișierul .env în rădăcina proiectului

```
EXPO_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI...
EXPO_PUBLIC_WEATHER_API_KEY=2f3a7c3e907a5f4bf7b3aa0cc2ae014f
```

> Găsești URL și Anon Key în Supabase Dashboard → Settings → API

## Pas 4: Copiază fișierele din acest proiect în structura ta

```
FishTracker/
├── .env
├── app.json
├── App.tsx                    ← înlocuiește cel existent
├── src/
│   ├── lib/
│   │   ├── supabase.ts        ← clientul Supabase
│   │   └── storage.ts         ← stocare offline MMKV
│   ├── store/
│   │   ├── authStore.ts       ← starea autentificării
│   │   └── sessionStore.ts    ← starea partidei active
│   ├── navigation/
│   │   └── AppNavigator.tsx   ← navigarea principală
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.tsx
│   │   │   └── RegisterScreen.tsx
│   │   ├── dashboard/
│   │   │   └── DashboardScreen.tsx
│   │   ├── locations/
│   │   │   └── LocationsScreen.tsx
│   │   ├── groups/
│   │   │   └── GroupsScreen.tsx
│   │   └── community/
│   │       └── CommunityScreen.tsx
│   ├── components/
│   │   ├── RodCard.tsx        ← cardul unei lansete
│   │   └── WeatherWidget.tsx  ← widgetul meteo
│   └── types/
│       └── index.ts           ← tipurile TypeScript
└── supabase/
    └── schema.sql             ← rulează în Supabase SQL Editor
```

## Pas 5: Rulează schema SQL în Supabase

- Deschide Supabase Dashboard → SQL Editor
- Copiază conținutul din `supabase/schema.sql`
- Click "Run"

## Pas 6: Pornește aplicația

```bash
npx expo start
```

Scanează QR code cu aplicația **Expo Go** de pe telefon.
