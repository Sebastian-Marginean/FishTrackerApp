export const siteContent = {
  appName: 'FishTracker',
  tagline: 'Jurnalul digital pentru pescari care vor ordine, control si comunitate.',
  description:
    'FishTracker reuneste intr-o singura aplicatie partida activa, capturile, apele salvate, grupurile private si comunitatea, intr-o experienta rapida si usor de folosit direct de pe telefon.',
  apkUrl: '/downloads/FishTracker-v1.0.1.apk',
  apkLabel: 'Descarca APK pentru Android',
  version: 'v1.0.1',
  status: 'Disponibil acum',
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
  installSteps: [
    'Descarci fisierul APK de pe acest site.',
    'Permiti instalarea daca telefonul cere confirmare pentru surse externe.',
    'Deschizi aplicatia si iti creezi contul in cateva secunde.',
  ],
  stats: [
    { value: 'All-in-one', label: 'partide, capturi, ape, grupuri si comunitate' },
    { value: 'RO + EN', label: 'interfata disponibila in romana si engleza' },
    { value: 'Android', label: 'instalare rapida prin APK' },
  ],
  gallery: [
    {
      id: 'session',
      title: 'Dashboard de partida',
      description: 'Dashboard-ul principal aduna intr-un singur loc partida activa, conditiile meteo, speciile recomandate si controlul fiecarei lansete.',
      imageSrc: '/app-preview/prima-pagina.jpeg',
      imageAlt: 'Dashboard FishTracker cu meteo si lansete active',
      badges: ['Partida activa', 'Meteo', 'Lansete'],
    },
    {
      id: 'waters',
      title: 'Ape si locatii',
      description: 'Ecranul pentru ape si locatii pastreaza toate lacurile importante la indemana, cu cautare rapida si detalii clare pentru fiecare punct salvat.',
      imageSrc: '/app-preview/ecran-ape.jpeg',
      imageAlt: 'Ecranul FishTracker pentru ape si locatii',
      badges: ['Ape', 'Coordonate', 'Editare'],
    },
    {
      id: 'groups',
      title: 'Grupuri private',
      description: 'Zona de grupuri private este construita pentru echipe mici si prieteni, cu acces rapid la grup, cod de invitatie si organizare simpla.',
      imageSrc: '/app-preview/ecran-grupuri.jpeg',
      imageAlt: 'Ecranul FishTracker pentru grupuri private',
      badges: ['Grupuri', 'Jurnal', 'Cod invitatie'],
    },
    {
      id: 'community',
      title: 'Comunitate',
      description: 'Comunitatea aduce chat-ul global direct in aplicatie, astfel incat discutiile, intrebarile si mesajele utile sa fie usor de urmarit.',
      imageSrc: '/app-preview/ecran-comunitate-chat.jpeg',
      imageAlt: 'Ecranul FishTracker pentru comunitate si chat global',
      badges: ['Chat global', 'Mesaje', 'Comunitate'],
    },
    {
      id: 'leaderboard',
      title: 'Clasament lunar',
      description: 'Clasamentul lunar scoate in evidenta pescarii activi si face progresul vizibil prin topuri clare si comparatii usor de parcurs.',
      imageSrc: '/app-preview/ecran-clasament-cei-mai-multi-pesti.jpeg',
      imageAlt: 'Ecranul FishTracker pentru clasamentul lunar',
      badges: ['Top pescari', 'Greutate', 'Luna curenta'],
    },
    {
      id: 'profile',
      title: 'Profilul meu',
      description: 'Profilul meu aduna intr-un singur ecran identitatea utilizatorului, statisticile personale si setarile esentiale ale aplicatiei.',
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
  faqs: [
    {
      question: 'Cum instalez aplicatia pe Android?',
      answer: 'Descarci APK-ul, confirmi instalarea pe telefon si intri direct in aplicatie.',
    },
    {
      question: 'Aplicatia functioneaza doar pentru pescuit individual?',
      answer: 'Nu. FishTracker este util atat pentru pescuit individual, cat si pentru grupuri, cluburi sau echipe mici.',
    },
    {
      question: 'Pot actualiza usor cand apare o versiune noua?',
      answer: 'Da. Versiunile noi pot fi publicate rapid, astfel incat utilizatorii sa aiba acces imediat la cea mai recenta varianta.',
    },
  ],
  releaseNotes: [
    {
      version: 'v1.0.1',
      title: 'Update final Android',
      notes: [
        'Am adaugat camp separat pentru momeala de carlig, distinct de nada si montura.',
        'Aplicatia include acum lacuri globale si lacuri personale, organizate mai clar pentru fiecare utilizator.',
        'Chat-urile au fost fluidizate prin actualizari live mai curate si o experienta mai stabila.',
      ],
    },
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
  contact: {
    email: 'support@fishtracker.eu',
    note: 'Pentru intrebari, colaborari sau suport, ne poti contacta direct prin email.',
  },
};

export type SiteContent = typeof siteContent;
