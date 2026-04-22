export type DictionaryLanguage = 'ro' | 'en';

export type PreviewStep = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
};

type Dictionary = {
  nav: {
    home: string;
    preview: string;
    contact: string;
  };
  controls: {
      theme: string;
      dark: string;
      light: string;
      language: string;
    };
    footer: {
      description: string;
    };
    home: {
      status: string;
      version: string;
      tagline: string;
      description: string;
      apkLabel: string;
      microcopy: string;
      previewTag: string;
      heroSecondaryCta: string;
      installTag: string;
      previewTitle: string;
      previewText: string;
      installTitle: string;
      installText: string;
      downloadNow: string;
      faqTitle: string;
      updatesTag: string;
      updatesTitle: string;
      contactTag: string;
      contactTitle: string;
      contactText: string;
      emailLabel: string;
      launchTag: string;
      bottomTitle: string;
      bottomText: string;
      bottomCta: string;
      stats: Array<{ value: string; label: string }>;
      highlights: string[];
      featureColumns: Array<{ title: string; text: string }>;
      gallery: Array<{
        id: string;
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
        badges: string[];
      }>;
      sections: Array<{ eyebrow: string; title: string; text: string }>;
      installSteps: string[];
      faqs: Array<{ question: string; answer: string }>;
      releaseNotes: Array<{ version: string; title: string; notes: string[] }>;
    };
    preview: {
      tag: string;
      title: string;
      intro: string;
      stepLabel: string;
      steps: PreviewStep[];
    };
    contact: {
      tag: string;
      title: string;
      intro: string;
      emailLabel: string;
      note: string;
      form: {
        title: string;
        description: string;
        name: string;
        email: string;
        subject: string;
        message: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        subjectPlaceholder: string;
        messagePlaceholder: string;
        submit: string;
        sending: string;
        sendingFeedback: string;
        success: string;
        genericError: string;
      };
      api: {
        missingFields: string;
        missingConfig: string;
        missingFromEmail: string;
        success: string;
        requestFailed: string;
        inboxSubjectPrefix: string;
        inboxHeading: string;
        inboxName: string;
        inboxEmail: string;
        inboxSubject: string;
        inboxMessage: string;
        confirmationSubject: string;
        confirmationGreeting: string;
        confirmationBody: string;
        confirmationSubjectLabel: string;
        confirmationReply: string;
        confirmationSignature: string;
      };
    };
  };

  export const siteDictionary: Record<DictionaryLanguage, Dictionary> = {
    ro: {
      nav: {
        home: 'Acasa',
        preview: 'Preview',
        contact: 'Contact',
      },
      controls: {
        theme: 'Tema',
        dark: 'Dark',
        light: 'Light',
        language: 'Limba',
      },
      footer: {
        description: 'Aplicatie pentru pescari, cu focus pe partida activa, organizare si comunitate.',
      },
      home: {
        status: 'Disponibil acum',
        version: 'Android APK',
        tagline: 'Jurnalul digital pentru pescari care vor ordine, control si comunitate.',
        description:
          'FishTracker reuneste intr-o singura aplicatie partida activa, capturile, apele salvate, grupurile private si comunitatea, intr-o experienta rapida si usor de folosit direct de pe telefon.',
        apkLabel: 'Descarca APK pentru Android',
        microcopy: 'Aplicatie pentru pescuit sportiv si comunitate',
        previewTag: 'Preview',
        heroSecondaryCta: 'Vezi prezentarea',
        installTag: 'Instalare',
        previewTitle: 'Ecrane inspirate direct din aplicatia reala',
        previewText:
          'Mai jos sunt cateva ecrane direct din aplicatie, ca sa se vada mai clar cum arata FishTracker in utilizare.',
        installTitle: 'Descarca FishTracker pentru Android',
        installText:
          'FishTracker poate fi instalat rapid pe Android, astfel incat utilizatorii sa ajunga imediat in aplicatie si sa inceapa sa o foloseasca.',
        downloadNow: 'Descarca acum APK-ul',
        faqTitle: 'Intrebari frecvente',
        updatesTag: 'Actualizari',
        updatesTitle: 'Noutati si repere importante',
        contactTag: 'Contact',
        contactTitle: 'Suport, intrebari si colaborari',
        contactText:
          'Daca ai intrebari despre aplicatie, colaborari sau solicitari legate de FishTracker, poti lua legatura direct prin email.',
        emailLabel: 'Email',
        launchTag: 'Lansare',
        bottomTitle: 'Descopera FishTracker si instaleaza aplicatia.',
        bottomText:
          'Tot ce ai nevoie este intr-un singur loc: prezentarea aplicatiei, ecranele principale si accesul direct la descarcarea versiunii Android.',
        bottomCta: 'Mergi la download',
        stats: [
          { value: 'All-in-one', label: 'partide, capturi, ape, grupuri si comunitate' },
          { value: 'RO + EN', label: 'interfata disponibila in romana si engleza' },
          { value: 'Android', label: 'instalare rapida prin APK' },
        ],
        highlights: [
          'Pornesti rapid o partida si urmaresti fiecare lanseta',
          'Inregistrezi capturi, greutati, locatii si istoric relevant',
          'Ramai conectat prin grupuri, chat si clasament lunar',
        ],
        featureColumns: [
          {
            title: 'Partida sub control',
            text: 'Vezi rapid ce lansete sunt active, ce montura folosesti si ce capturi ai deja salvate.',
          },
          {
            title: 'Date care chiar te ajuta',
            text: 'Capturile, apele si istoricul sesiunilor sunt aranjate clar, ca sa observi imediat ce merge.',
          },
          {
            title: 'Comunitate activa',
            text: 'Chat-ul global, grupurile private si anunturile admin tin aplicatia utila si dupa partida.',
          },
        ],
        gallery: [
          {
            id: 'session',
            title: 'Dashboard de partida',
            description:
              'Dashboard-ul principal aduna intr-un singur loc partida activa, conditiile meteo, speciile recomandate si controlul fiecarei lansete.',
            imageSrc: '/app-preview/prima-pagina.jpeg',
            imageAlt: 'Dashboard FishTracker cu meteo si lansete active',
            badges: ['Partida activa', 'Meteo', 'Lansete'],
          },
          {
            id: 'waters',
            title: 'Ape si locatii',
            description:
              'Ecranul pentru ape si locatii pastreaza toate lacurile importante la indemana, cu cautare rapida si detalii clare pentru fiecare punct salvat.',
            imageSrc: '/app-preview/ecran-ape.jpeg',
            imageAlt: 'Ecranul FishTracker pentru ape si locatii',
            badges: ['Ape', 'Coordonate', 'Editare'],
          },
          {
            id: 'groups',
            title: 'Grupuri private',
            description:
              'Zona de grupuri private este construita pentru echipe mici si prieteni, cu acces rapid la grup, cod de invitatie si organizare simpla.',
            imageSrc: '/app-preview/ecran-grupuri.jpeg',
            imageAlt: 'Ecranul FishTracker pentru grupuri private',
            badges: ['Grupuri', 'Jurnal', 'Cod invitatie'],
          },
          {
            id: 'community',
            title: 'Comunitate',
            description:
              'Comunitatea aduce chat-ul global direct in aplicatie, astfel incat discutiile, intrebarile si mesajele utile sa fie usor de urmarit.',
            imageSrc: '/app-preview/ecran-comunitate-chat.jpeg',
            imageAlt: 'Ecranul FishTracker pentru comunitate si chat global',
            badges: ['Chat global', 'Mesaje', 'Comunitate'],
          },
          {
            id: 'leaderboard',
            title: 'Clasament lunar',
            description:
              'Clasamentul lunar scoate in evidenta pescarii activi si face progresul vizibil prin topuri clare si comparatii usor de parcurs.',
            imageSrc: '/app-preview/ecran-clasament-cei-mai-multi-pesti.jpeg',
            imageAlt: 'Ecranul FishTracker pentru clasamentul lunar',
            badges: ['Top pescari', 'Greutate', 'Luna curenta'],
          },
          {
            id: 'profile',
            title: 'Profilul meu',
            description:
              'Profilul meu aduna intr-un singur ecran identitatea utilizatorului, statisticile personale si setarile esentiale ale aplicatiei.',
            imageSrc: '/app-preview/ecran-profil.jpeg',
            imageAlt: 'Ecranul FishTracker pentru profilul utilizatorului',
            badges: ['Profil', 'Statistici', 'Setari'],
          },
        ],
        sections: [
          {
            eyebrow: 'Partide',
            title: 'Stii mereu unde esti in sesiune',
            text: 'Montura, nada, capturile si istoricul raman intr-un flux simplu, fara notite imprastiate.',
          },
          {
            eyebrow: 'Locatii',
            title: 'Iti organizezi apele fara efort',
            text: 'Salvezi locatii, editezi detalii utile si revii rapid la punctele care conteaza.',
          },
          {
            eyebrow: 'Comunitate',
            title: 'Ramane utila si dupa ce termini partida',
            text: 'Comunitatea, grupurile private si clasamentul lunar mentin aplicatia relevanta pe termen lung.',
          },
        ],
        installSteps: [
          'Descarci fisierul APK de pe acest site.',
          'Permiti instalarea daca telefonul cere confirmare pentru surse externe.',
          'Deschizi aplicatia si iti creezi contul in cateva secunde.',
        ],
        faqs: [
          {
            question: 'Cum instalez aplicatia pe Android?',
            answer: 'Descarci APK-ul, confirmi instalarea pe telefon si intri direct in aplicatie.',
          },
          {
            question: 'Aplicatia functioneaza doar pentru pescuit individual?',
            answer:
              'Nu. FishTracker este util atat pentru pescuit individual, cat si pentru grupuri, cluburi sau echipe mici.',
          },
          {
            question: 'Pot actualiza usor cand apare o versiune noua?',
            answer:
              'Da. Versiunile noi pot fi publicate rapid, astfel incat utilizatorii sa aiba acces imediat la cea mai recenta varianta.',
          },
        ],
        releaseNotes: [
          {
            version: 'v1.0.0',
            title: 'Lansarea aplicatiei',
            notes: [
              'Dashboard central pentru partida activa si gestionarea rapida a lansetelor.',
              'Capturi, ape si grupuri private integrate intr-o singura aplicatie.',
              'Comunitate, clasament lunar si anunturi globale disponibile din prima versiune.',
            ],
          },
          {
            version: 'Prezenta online',
            title: 'Pagina oficiala FishTracker',
            notes: [
              'Prezentare clara a aplicatiei si a functionalitatilor principale.',
              'Acces direct la descarcarea versiunii Android din pagina oficiala.',
              'Sectiuni vizuale construite in jurul ecranelor reale din aplicatie.',
            ],
          },
        ],
      },
      preview: {
        tag: 'Preview',
        title: 'Preview si pasi de folosire',
        intro:
          'Aici gasesti un ghid vizual al aplicatiei, cu ecranele importante si explicatii scurte pentru fiecare pas relevant din FishTracker.',
        stepLabel: 'Pasul',
        steps: [
          {
            title: 'Creeaza cont',
            imageSrc: '/app-preview/creeaza-cont.jpeg',
            imageAlt: 'Ecranul de creare cont din FishTracker',
            text: 'De aici incepe totul. Completezi datele necesare, iti creezi contul si poti intra direct in aplicatie pentru a incepe propriul jurnal de pescuit.',
          },
          {
            title: 'Autentificare',
            imageSrc: '/app-preview/autentificare.jpeg',
            imageAlt: 'Ecranul de autentificare din FishTracker',
            text: 'Autentificarea este simpla si rapida. Intri in contul tau si revii imediat la sesiunile, grupurile si capturile deja salvate.',
          },
          {
            title: 'Dashboard de partida',
            imageSrc: '/app-preview/prima-pagina.jpeg',
            imageAlt: 'Dashboard-ul principal din FishTracker',
            text: 'Dashboard-ul este ecranul principal al aplicatiei. Aici vezi partida activa, conditiile meteo, speciile recomandate si tot ce tine de gestionarea lansetelor.',
          },
          {
            title: 'Istoric partide',
            imageSrc: '/app-preview/ecran-istoric-partide.jpeg',
            imageAlt: 'Ecranul de istoric partide din FishTracker',
            text: 'In istoricul partidelor gasesti sesiunile salvate, cu detalii despre durata, capturi, greutate si nade folosite. Te ajuta sa vezi mai usor ce a functionat in timp.',
          },
          {
            title: 'Ape si locatii',
            imageSrc: '/app-preview/ecran-ape.jpeg',
            imageAlt: 'Ecranul pentru ape si locatii din FishTracker',
            text: 'Aici vezi toate apele salvate si le poti cauta rapid. Ecranul te ajuta sa pastrezi locatiile importante intr-un singur loc, gata pentru partidele urmatoare.',
          },
          {
            title: 'Creezi o apa noua',
            imageSrc: '/app-preview/ecran-ape-explicit.jpeg',
            imageAlt: 'Ecranul pentru creare apa noua in FishTracker',
            text: 'Aici creezi o apa noua. Poti seta numele, tipul apei, descrierea, coordonatele si pozitia exacta pe harta, astfel incat locatia sa fie salvata corect.',
          },
          {
            title: 'Grupuri private',
            imageSrc: '/app-preview/ecran-grupuri.jpeg',
            imageAlt: 'Ecranul grupurilor private din FishTracker',
            text: 'Aici iti vezi grupurile private si poti crea altele noi. Este punctul din care incepe organizarea pescuitului cu prietenii sau cu echipa ta.',
          },
          {
            title: 'Detalii grup',
            imageSrc: '/app-preview/ecran-grupuri-explicit.jpeg',
            imageAlt: 'Ecranul de detalii pentru un grup privat din FishTracker',
            text: 'In interiorul unui grup poti vedea jurnalul, statisticile, membrii si chatul. Tot aici gasesti codul de invitatie si istoricul capturilor din acel grup.',
          },
          {
            title: 'Comunitate - chat global',
            imageSrc: '/app-preview/ecran-comunitate-chat.jpeg',
            imageAlt: 'Ecranul de chat global din comunitatea FishTracker',
            text: 'Aici vezi conversatiile din comunitate si poti vorbi direct cu ceilalti utilizatori. Este un spatiu util pentru discutii rapide, intrebari si schimb de informatii intre pescari.',
          },
          {
            title: 'Clasament - greutate totala',
            imageSrc: '/app-preview/ecran-clasament-cel-cea-mai-mare-cantitate.jpeg',
            imageAlt: 'Clasamentul FishTracker dupa greutatea totala',
            text: 'Acest clasament arata cine are cea mai mare greutate cumulata. Te ajuta sa compari rezultatele pe termen mai lung, nu doar o singura captura.',
          },
          {
            title: 'Clasament - cel mai mare peste',
            imageSrc: '/app-preview/ecran-clasament-cel-mai-mare-peste.jpeg',
            imageAlt: 'Clasamentul FishTracker pentru cel mai mare peste',
            text: 'Aici vezi topul dupa captura maxima. Este util atunci cand vrei sa urmaresti cine a prins cel mai mare peste din perioada respectiva.',
          },
          {
            title: 'Clasament - cei mai multi pesti',
            imageSrc: '/app-preview/ecran-clasament-cei-mai-multi-pesti.jpeg',
            imageAlt: 'Clasamentul FishTracker pentru cei mai multi pesti',
            text: 'Acest ecran pune accent pe numarul total de pesti prinsi. Este util pentru a vedea activitatea constanta si progresul real al fiecarui pescar.',
          },
          {
            title: 'Mesaje private',
            imageSrc: '/app-preview/ecran-mesaje-private.jpeg',
            imageAlt: 'Ecranul de mesaje private din FishTracker',
            text: 'Mesajele private sunt pentru conversatii directe intre utilizatori. Aici poti comunica simplu si rapid, separat de chatul global.',
          },
          {
            title: 'Profilul meu',
            imageSrc: '/app-preview/ecran-profil.jpeg',
            imageAlt: 'Ecranul profilului din FishTracker',
            text: 'In profilul tau gasesti datele personale, statisticile si setarile importante. Poti schimba informatii precum username, nume afisat, bio, tema si limba aplicatiei.',
          },
        ],
      },
      contact: {
        tag: 'Contact',
        title: 'Contact FishTracker',
        intro:
          'Pentru intrebari, suport sau colaborari, poti trimite direct un email folosind adresa de mai jos.',
        emailLabel: 'Email',
        note: 'Pentru intrebari, colaborari sau suport, ne poti contacta direct prin email.',
        form: {
          title: 'Trimite un mesaj',
          description: 'Completeaza formularul de mai jos si mesajul va ajunge direct pe email.',
          name: 'Nume',
          email: 'Email',
          subject: 'Subiect',
          message: 'Mesaj',
          namePlaceholder: 'Numele tau',
          emailPlaceholder: 'adresa@email.com',
          subjectPlaceholder: 'Despre ce vrei sa vorbim',
          messagePlaceholder: 'Scrie mesajul tau aici',
          submit: 'Trimite mesajul',
          sending: 'Se trimite...',
          sendingFeedback: 'Se trimite mesajul...',
          success: 'Mesajul a fost trimis cu succes.',
          genericError: 'Mesajul nu a putut fi trimis.',
        },
        api: {
          missingFields: 'Toate campurile sunt obligatorii.',
          missingConfig: 'Lipseste configurarea pentru trimiterea emailurilor.',
          missingFromEmail: 'Lipseste adresa de expeditor pentru Resend.',
          success: 'Mesajul a fost trimis cu succes.',
          requestFailed: 'A aparut o problema la trimiterea mesajului.',
          inboxSubjectPrefix: 'FishTracker contact',
          inboxHeading: 'Mesaj nou din formularul FishTracker',
          inboxName: 'Nume',
          inboxEmail: 'Email',
          inboxSubject: 'Subiect',
          inboxMessage: 'Mesaj',
          confirmationSubject: 'Am primit mesajul tau - FishTracker',
          confirmationGreeting: 'Salut',
          confirmationBody: 'Am primit mesajul tau si revenim cat mai curand posibil.',
          confirmationSubjectLabel: 'Subiect',
          confirmationReply: 'Daca ai completari, ne poti scrie direct la',
          confirmationSignature: 'Echipa FishTracker',
        },
      },
    },
    en: {
      nav: {
        home: 'Home',
        preview: 'Preview',
        contact: 'Contact',
      },
      controls: {
        theme: 'Theme',
        dark: 'Dark',
        light: 'Light',
        language: 'Language',
      },
      footer: {
        description: 'Fishing app focused on active sessions, organization and community.',
      },
      home: {
        status: 'Available now',
        version: 'Android APK',
        tagline: 'The digital journal for anglers who want order, control and community.',
        description:
          'FishTracker brings the active session, catches, saved waters, private groups and community together in one app, in a fast experience that is easy to use directly from your phone.',
        apkLabel: 'Download APK for Android',
        microcopy: 'Fishing app for sport fishing and community',
        previewTag: 'Preview',
        heroSecondaryCta: 'See preview',
        installTag: 'Install',
        previewTitle: 'Screens taken directly from the real app',
        previewText:
          'Below you can see several screens from the app so it is easier to understand how FishTracker looks in real use.',
        installTitle: 'Download FishTracker for Android',
        installText:
          'FishTracker can be installed quickly on Android so users can get into the app right away and start using it.',
        downloadNow: 'Download the APK now',
        faqTitle: 'Frequently asked questions',
        updatesTag: 'Updates',
        updatesTitle: 'Updates and important milestones',
        contactTag: 'Contact',
        contactTitle: 'Support, questions and partnerships',
        contactText:
          'If you have questions about the app, partnership ideas or FishTracker-related requests, you can reach us directly by email.',
        emailLabel: 'Email',
        launchTag: 'Launch',
        bottomTitle: 'Discover FishTracker and install the app.',
        bottomText:
          'Everything you need is in one place: the app presentation, the main screens and direct access to the Android download.',
        bottomCta: 'Go to download',
        stats: [
          { value: 'All-in-one', label: 'sessions, catches, waters, groups and community' },
          { value: 'RO + EN', label: 'interface available in Romanian and English' },
          { value: 'Android', label: 'quick installation via APK' },
        ],
        highlights: [
          'Start a fishing session quickly and track every rod',
          'Record catches, weights, locations and useful history',
          'Stay connected through groups, chat and the monthly leaderboard',
        ],
        featureColumns: [
          {
            title: 'Session under control',
            text: 'See active rods, the rig you use and the catches already saved at a glance.',
          },
          {
            title: 'Data that actually helps',
            text: 'Catches, waters and session history are organized clearly so you can spot what works faster.',
          },
          {
            title: 'Active community',
            text: 'Global chat, private groups and admin announcements keep the app useful even after the trip ends.',
          },
        ],
        gallery: [
          {
            id: 'session',
            title: 'Session dashboard',
            description:
              'The main dashboard brings together the active session, weather conditions, recommended species and control for each rod.',
            imageSrc: '/app-preview/prima-pagina.jpeg',
            imageAlt: 'FishTracker dashboard with weather and active rods',
            badges: ['Active session', 'Weather', 'Rods'],
          },
          {
            id: 'waters',
            title: 'Waters and locations',
            description:
              'The waters and locations screen keeps important lakes close at hand, with quick search and clear details for every saved point.',
            imageSrc: '/app-preview/ecran-ape.jpeg',
            imageAlt: 'FishTracker screen for waters and locations',
            badges: ['Waters', 'Coordinates', 'Edit'],
          },
          {
            id: 'groups',
            title: 'Private groups',
            description:
              'The private groups area is built for small teams and friends, with quick access to the group, invite code and simple organization.',
            imageSrc: '/app-preview/ecran-grupuri.jpeg',
            imageAlt: 'FishTracker screen for private groups',
            badges: ['Groups', 'Journal', 'Invite code'],
          },
          {
            id: 'community',
            title: 'Community',
            description:
              'The community section brings global chat into the app so discussions, questions and useful messages are easy to follow.',
            imageSrc: '/app-preview/ecran-comunitate-chat.jpeg',
            imageAlt: 'FishTracker screen for community and global chat',
            badges: ['Global chat', 'Messages', 'Community'],
          },
          {
            id: 'leaderboard',
            title: 'Monthly leaderboard',
            description:
              'The monthly leaderboard highlights active anglers and makes progress easy to track through clear rankings and comparisons.',
            imageSrc: '/app-preview/ecran-clasament-cei-mai-multi-pesti.jpeg',
            imageAlt: 'FishTracker screen for monthly leaderboard',
            badges: ['Top anglers', 'Weight', 'Current month'],
          },
          {
            id: 'profile',
            title: 'My profile',
            description:
              'My profile brings together the user identity, personal statistics and the main app settings in one place.',
            imageSrc: '/app-preview/ecran-profil.jpeg',
            imageAlt: 'FishTracker screen for user profile',
            badges: ['Profile', 'Stats', 'Settings'],
          },
        ],
        sections: [
          {
            eyebrow: 'Sessions',
            title: 'You always know where you are in a trip',
            text: 'Rig, bait, catches and history stay in one simple flow, without scattered notes.',
          },
          {
            eyebrow: 'Locations',
            title: 'Organize your waters without effort',
            text: 'Save locations, edit useful details and quickly return to the spots that matter.',
          },
          {
            eyebrow: 'Community',
            title: 'It stays useful after the trip ends',
            text: 'Community, private groups and the monthly leaderboard keep the app relevant long term.',
          },
        ],
        installSteps: [
          'Download the APK file from this website.',
          'Allow installation if your phone asks for confirmation for external sources.',
          'Open the app and create your account in a few seconds.',
        ],
        faqs: [
          {
            question: 'How do I install the app on Android?',
            answer: 'Download the APK, confirm the installation on your phone and open the app.',
          },
          {
            question: 'Is the app only for solo fishing?',
            answer: 'No. FishTracker is useful for both solo fishing and for groups, clubs or small teams.',
          },
          {
            question: 'Can I update easily when a new version is released?',
            answer: 'Yes. New versions can be published quickly so users can access the latest build right away.',
          },
        ],
        releaseNotes: [
          {
            version: 'v1.0.0',
            title: 'App launch',
            notes: [
              'Central dashboard for the active session and quick rod management.',
              'Catches, waters and private groups integrated into one app.',
              'Community, monthly leaderboard and global announcements available from the first version.',
            ],
          },
          {
            version: 'Online presence',
            title: 'Official FishTracker website',
            notes: [
              'Clear presentation of the app and its main features.',
              'Direct access to the Android version download from the official page.',
              'Visual sections built around real screens from the application.',
            ],
          },
        ],
      },
      preview: {
        tag: 'Preview',
        title: 'Preview and usage steps',
        intro:
          'Here you can find a visual guide to the app, with important screens and short explanations for each relevant step in FishTracker.',
        stepLabel: 'Step',
        steps: [
          {
            title: 'Create account',
            imageSrc: '/app-preview/creeaza-cont.jpeg',
            imageAlt: 'FishTracker create account screen',
            text: 'This is where everything starts. You fill in the required details, create your account and can enter the app right away to start your own fishing journal.',
          },
          {
            title: 'Sign in',
            imageSrc: '/app-preview/autentificare.jpeg',
            imageAlt: 'FishTracker sign in screen',
            text: 'Signing in is simple and fast. You access your account and immediately return to your saved sessions, groups and catches.',
          },
          {
            title: 'Session dashboard',
            imageSrc: '/app-preview/prima-pagina.jpeg',
            imageAlt: 'FishTracker main dashboard',
            text: 'The dashboard is the main screen of the app. Here you can see the active session, weather conditions, recommended species and everything related to rod management.',
          },
          {
            title: 'Session history',
            imageSrc: '/app-preview/ecran-istoric-partide.jpeg',
            imageAlt: 'FishTracker session history screen',
            text: 'In the session history you can find saved trips with details about duration, catches, weight and bait used. It helps you understand more easily what worked over time.',
          },
          {
            title: 'Waters and locations',
            imageSrc: '/app-preview/ecran-ape.jpeg',
            imageAlt: 'FishTracker waters and locations screen',
            text: 'Here you can see all saved waters and search through them quickly. This screen helps you keep important locations in one place, ready for future sessions.',
          },
          {
            title: 'Create a new water',
            imageSrc: '/app-preview/ecran-ape-explicit.jpeg',
            imageAlt: 'FishTracker create new water screen',
            text: 'Here you create a new water entry. You can set the name, water type, description, coordinates and the exact position on the map so the location is saved correctly.',
          },
          {
            title: 'Private groups',
            imageSrc: '/app-preview/ecran-grupuri.jpeg',
            imageAlt: 'FishTracker private groups screen',
            text: 'Here you can see your private groups and create new ones. This is the starting point for organizing fishing trips with friends or with your team.',
          },
          {
            title: 'Group details',
            imageSrc: '/app-preview/ecran-grupuri-explicit.jpeg',
            imageAlt: 'FishTracker private group details screen',
            text: 'Inside a group you can see the journal, statistics, members and chat. This is also where you find the invite code and the catch history for that group.',
          },
          {
            title: 'Community - global chat',
            imageSrc: '/app-preview/ecran-comunitate-chat.jpeg',
            imageAlt: 'FishTracker community global chat screen',
            text: 'Here you can follow community conversations and talk directly with other users. It is useful for quick discussions, questions and information exchange between anglers.',
          },
          {
            title: 'Leaderboard - total weight',
            imageSrc: '/app-preview/ecran-clasament-cel-cea-mai-mare-cantitate.jpeg',
            imageAlt: 'FishTracker leaderboard by total weight',
            text: 'This leaderboard shows who has accumulated the highest total weight. It helps you compare results over a longer period, not just a single catch.',
          },
          {
            title: 'Leaderboard - biggest fish',
            imageSrc: '/app-preview/ecran-clasament-cel-mai-mare-peste.jpeg',
            imageAlt: 'FishTracker leaderboard for biggest fish',
            text: 'Here you see the ranking by maximum catch. It is useful when you want to track who caught the biggest fish in the selected period.',
          },
          {
            title: 'Leaderboard - most fish',
            imageSrc: '/app-preview/ecran-clasament-cei-mai-multi-pesti.jpeg',
            imageAlt: 'FishTracker leaderboard for most fish',
            text: 'This screen focuses on the total number of fish caught. It is useful for seeing steady activity and the real progress of each angler.',
          },
          {
            title: 'Private messages',
            imageSrc: '/app-preview/ecran-mesaje-private.jpeg',
            imageAlt: 'FishTracker private messages screen',
            text: 'Private messages are meant for direct conversations between users. Here you can communicate simply and quickly, separate from the global chat.',
          },
          {
            title: 'My profile',
            imageSrc: '/app-preview/ecran-profil.jpeg',
            imageAlt: 'FishTracker profile screen',
            text: 'In your profile you can find personal details, statistics and important settings. You can change information such as username, display name, bio, theme and app language.',
          },
        ],
      },
      contact: {
        tag: 'Contact',
        title: 'Contact FishTracker',
        intro:
          'For questions, support or partnerships, you can send an email directly using the address below.',
        emailLabel: 'Email',
        note: 'For questions, partnerships or support, you can contact us directly by email.',
        form: {
          title: 'Send a message',
          description: 'Fill in the form below and your message will go directly to our email inbox.',
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          namePlaceholder: 'Your name',
          emailPlaceholder: 'email@example.com',
          subjectPlaceholder: 'What would you like to discuss',
          messagePlaceholder: 'Write your message here',
          submit: 'Send message',
          sending: 'Sending...',
          sendingFeedback: 'Sending message...',
          success: 'Your message was sent successfully.',
          genericError: 'The message could not be sent.',
        },
        api: {
          missingFields: 'All fields are required.',
          missingConfig: 'Email sending configuration is missing.',
          missingFromEmail: 'The Resend sender address is missing.',
          success: 'Your message was sent successfully.',
          requestFailed: 'There was a problem sending the message.',
          inboxSubjectPrefix: 'FishTracker contact',
          inboxHeading: 'New message from the FishTracker form',
          inboxName: 'Name',
          inboxEmail: 'Email',
          inboxSubject: 'Subject',
          inboxMessage: 'Message',
          confirmationSubject: 'We received your message - FishTracker',
          confirmationGreeting: 'Hello',
          confirmationBody: 'We received your message and we will get back to you as soon as possible.',
          confirmationSubjectLabel: 'Subject',
          confirmationReply: 'If you want to add anything, you can write directly to',
          confirmationSignature: 'The FishTracker team',
        },
      },
    },
  };