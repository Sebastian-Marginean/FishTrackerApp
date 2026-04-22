# FishTracker Website

Site de prezentare separat pentru aplicatia FishTracker.

## Dezvoltare

```bash
npm install
npm run dev
```

## Windows CMD

In `cmd.exe` nu merge `rm -rf` si nici sintaxa `PATH="...:$PATH"`.

Pentru pornire curata din Command Prompt foloseste:

```bat
dev-clean.cmd
```

Pentru reinstalare din lockfile foloseste:

```bat
npm-ci.cmd
```

Daca vrei comenzi manuale in `cmd.exe`, echivalentele corecte sunt:

```bat
rmdir /s /q .next
set "PATH=C:\Program Files\nodejs;%PATH%"
npm.cmd run dev
```

## Link APK

Schimba URL-ul de download din `src/content/site.ts`.

## Continut editabil

- Textul principal, FAQ-ul, update notes si contactul se schimba din `src/content/site.ts`.
- Daca vrei screenshots reale, foloseste folderul `public/` si inlocuieste mockup-urile din `src/app/page.tsx`.

## Formular contact cu Resend

Pentru formularul din pagina `Contact`, configureaza aceste variabile de mediu:

```env
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=FishTracker <no-reply@domeniul-tau.ro>
CONTACT_TO_EMAIL=support@fishtracker.eu
```

Note:

- `RESEND_FROM_EMAIL` trebuie sa fie o adresa verificata in Resend.
- `CONTACT_TO_EMAIL` este optional; daca lipseste, formularul trimite la emailul configurat in `src/content/site.ts`.

## Deploy pe Vercel

1. urci proiectul intr-un repository Git
2. importi folderul `website` in Vercel
3. framework-ul este deja detectat ca Next.js prin `vercel.json`
4. rulezi deploy

## Verificare inainte de publicare

1. schimba `apkUrl` cu linkul real catre fisierul APK
2. schimba emailul de contact cu unul real
3. daca vrei imagini reale din aplicatie, inlocuieste mockup-urile actuale
4. ruleaza `npm run build`
