export const tasks = [
  {
    id: "proxmox-local-server-integration",
    title: "Proxmox Local Server Integration",
    project: "Proxmox Local Server + AI/Agents Voorbereiding",
    deadline: "2026-06-15",
    value: "high",
    createdAt: "2026-06-01",
    status: "open",
    priority: "high",
    tags: [
      "#proxmox",
      "#localserver",
      "#aiagents",
      "#brasco-os",
      "#network",
      "#infrastructure",
      "#security",
      "#automation"
    ],
    summary: "Voorbereiden van een veilige lokale koppeling tussen Brasco OS en een Proxmox-server binnen het eigen netwerk. Eerste fase is read-only statuscontrole. Latere fases zijn beperkte acties, agent-uitvoering en gecontroleerde automatisering.",
    nextAction: "Vul alleen niet-gevoelige inventarisatiegegevens in en bepaal daarna de read-only Proxmox user/token buiten GitHub.",
    whyNow: "De koppeling raakt infrastructuur, AI/agents en automatisering; daarom moet eerst een veilig read-only model bestaan voordat Brasco OS acties mag voorstellen.",
    warning: "Geen wachtwoorden, tokens, private keys of root-login werkwijze documenteren. Alle gevoelige waarden blijven placeholders.",
    futurePlan: [
      "Read-only Proxmox statusdashboard in Brasco OS",
      "Aparte Proxmox user/token met minimale rechten",
      "Mapping van VM's, containers, lokale AI's en agents",
      "Beperkte acties via voorstel en handmatige bevestiging",
      "Agent-uitvoering met aparte executor user",
      "Automatisering met auditlog, rollback-denken en blokkades voor destructieve acties"
    ],
    percentages: [
      { item: "Inventarisatie", progress: 10, complexity: 35 },
      { item: "Veiligheidsmodel", progress: 20, complexity: 55 },
      { item: "Read-only dashboard", progress: 0, complexity: 60 },
      { item: "API-token/user inrichting", progress: 0, complexity: 65 },
      { item: "AI/agent mapping", progress: 0, complexity: 70 },
      { item: "Automatisering", progress: 0, complexity: 80 },
      { item: "GitHub documentatiebackup", progress: 0, complexity: 30 }
    ],
    actionPlan: [
      {
        phase: "Fase 1",
        task: "Inventariseer Proxmox serverdata, netwerkgegevens, storage, backup en aanwezige AI/agents zonder secrets vast te leggen.",
        role: "Commandor",
        complexity: 35,
        progress: 10,
        dependencies: "Alleen niet-gevoelige server- en netwerkgegevens.",
        nextAction: "Vul placeholders in voor IP, hostnaam, storage en backup-locatie."
      },
      {
        phase: "Fase 2",
        task: "Leg veiligheidsmodel vast: read-only eerst, geen root-login, geen secrets en geen destructieve acties.",
        role: "Watcher",
        complexity: 55,
        progress: 20,
        dependencies: "Bevestiging van toegestane en verboden acties.",
        nextAction: "Definieer minimale rechten voor Brasco OS read-only user."
      },
      {
        phase: "Fase 3",
        task: "Ontwerp read-only dashboard voor hoststatus, VM's, containers, storage en backups.",
        role: "Executor",
        complexity: 60,
        progress: 0,
        dependencies: "Read-only user/token buiten GitHub ingericht.",
        nextAction: "Maak dataveldenlijst voor statusdashboard."
      },
      {
        phase: "Fase 4",
        task: "Bereid API-token en users voor zonder tokens of keys in Brasco OS op te slaan.",
        role: "System",
        complexity: 65,
        progress: 0,
        dependencies: "Rechtenmodel en Proxmox userstrategie.",
        nextAction: "Maak tokennaam-placeholder en rechtenmatrix."
      },
      {
        phase: "Fase 5",
        task: "Breng lokale AI's en agents in kaart: locatie, type, rechten en toegestane taken.",
        role: "Specialist",
        complexity: 70,
        progress: 0,
        dependencies: "Inventarisatie van VM's, containers en agent-processen.",
        nextAction: "Bepaal welke AI/agents alleen gelezen worden en welke later taken mogen uitvoeren."
      },
      {
        phase: "Fase 6",
        task: "Ontwerp automatisering met goedkeuring, auditlog en blokkades voor VM verwijderen, rebooten en storage wijzigen.",
        role: "Commandor",
        complexity: 80,
        progress: 0,
        dependencies: "Werkend read-only dashboard en agent mapping.",
        nextAction: "Definieer bevestigingsflow voor beperkte acties."
      }
    ],
    brascoRoles: {
      Commandor: "Bepaalt prioriteit, vertaalt serveropdrachten eerst naar testvoorstellen en bewaakt expliciete toestemming.",
      Executor: "Bereidt dashboard, API-koppeling, statuschecks en later beperkte acties voor.",
      Watcher: "Blokkeert ontbrekende data, te brede rechten, secrets en destructieve acties zonder bevestiging.",
      Specialist: "Adviseert over Proxmox-architectuur, lokale AI/agents, netwerk en rechtenmodel.",
      System: "Bewaakt documentatie, build, bestandsstructuur, placeholders en GitHub-backup zonder secrets."
    },
    checklist: {
      serverData: [
        "Proxmox IP-adres: [NOG INVULLEN]",
        "Proxmox hostnaam: [NOG INVULLEN]",
        "Proxmox webinterface URL: https://[IP]:8006",
        "Netwerknaam/VLAN indien aanwezig: [NOG INVULLEN]",
        "Gateway/router IP: [NOG INVULLEN]",
        "DNS-server: [NOG INVULLEN]",
        "Storage namen: [NOG INVULLEN]",
        "Backup-locatie: [NOG INVULLEN]"
      ],
      users: [
        "Admin eigenaar: Fabian",
        "Proxmox admin user: [NOG INVULLEN]",
        "Brasco OS read-only user: [NOG AANMAKEN]",
        "Agent executor user: [NOG AANMAKEN]",
        "API-token naam: [NOG AANMAKEN]",
        "SSH-key pad: [NOG INVULLEN]",
        "Toegestane acties per user: [NOG DEFINIEREN]"
      ],
      aiAgents: [
        "Welke lokale AI's draaien er: [NOG INVULLEN]",
        "Welke agents zijn aanwezig: [NOG INVULLEN]",
        "Draait AI in VM, container of extern: [NOG INVULLEN]",
        "Mag Brasco OS alleen lezen of ook acties uitvoeren: [NOG BESLISSEN]",
        "Welke taken mogen automatisch: [NOG BESLISSEN]",
        "Welke taken vereisen handmatige goedkeuring: [NOG BESLISSEN]"
      ]
    },
    pdfSource: "docs/pdf/Proxmox_Local_Server_AI_Agents_Preparation.md",
    reportSource: "docs/PROXMOX_LOCAL_SERVER_INTEGRATION.md"
  },
  {
    id: "h2-zutphen-landing-partner-network",
    title: "H2 Zutphen Landing & Partner Network",
    project: "H2 Zutphen Landing & Partner Network",
    url: "https://h2-zutphen.nl",
    deadline: "2026-06-15",
    value: "high",
    createdAt: "2026-06-01",
    status: "open",
    tags: [
      "#h2zutphen",
      "#waterstof",
      "#landingpage",
      "#partnernetwerk",
      "#chatbox",
      "#commercie",
      "#seo",
      "#brasco-os"
    ],
    summary: "Professionele vierpagina-landingssite voor H2 Zutphen met contact/chatbox, leadopvolging en groeipad naar een H2-partnernetwerk.",
    nextAction: "Maak eerst de projectstructuur en het functionele pagina-overzicht aan voordat er visueel of technisch gebouwd wordt.",
    whyNow: "Deze taak combineert websitebouw, leadgeneratie, partnernetwerk en Brasco OS-uitvoering; daardoor is vroege structuur belangrijk om losse onderdelen te voorkomen.",
    warning: "Er is nog geen definitieve branding, juridische tekst, leadopslagkeuze of contactbestemming vastgelegd.",
    websitePages: [
      {
        name: "Home",
        goal: "Korte krachtige introductie, visuele hero en CTA voor contact of partner worden."
      },
      {
        name: "Over H2 Zutphen",
        goal: "Missie, lokale energiecontext en betrouwbare uitleg zonder juridische claims."
      },
      {
        name: "Partners & Netwerk",
        goal: "Toekomstige partners, latere netwerkkaart of partnerlijst en interesseformulier voor bedrijven."
      },
      {
        name: "Contact",
        goal: "Contactformulier, werkende basis-chatbox, leadverzameling en opvolgactie in Brasco OS."
      }
    ],
    chatbox: {
      status: "basis vereist",
      requirements: [
        "Zichtbaar op elke pagina",
        "Vragen ontvangen",
        "Bevestigingsreactie tonen",
        "Leads verzamelen: naam, e-mail, organisatie, vraag",
        "Later koppelbaar aan AI of CRM"
      ]
    },
    futurePlan: [
      "H2-partnernetwerk met bedrijven, projecten en regio's",
      "Besloten partneromgeving voor documenten, updates en leads",
      "Commerciële promotiepagina's voor andere domeinen en URLs",
      "Leadgeneratie via contact, chatbox, partnerinteresse en campagnes",
      "SEO-structuur met lokale waterstof-, energie- en partnerpagina's",
      "Contentplanning voor nieuws, cases, partnerupdates en uitlegpagina's",
      "CRM-koppeling voor follow-up, status en pipeline",
      "Schaalbare site-architectuur met herbruikbare pagina- en leadmodules"
    ],
    percentages: [
      { item: "Domein en basisstructuur", progress: 15, complexity: 35 },
      { item: "Design / branding", progress: 5, complexity: 55 },
      { item: "Vier pagina's", progress: 10, complexity: 60 },
      { item: "Chatbox", progress: 0, complexity: 70 },
      { item: "Contactformulier", progress: 0, complexity: 45 },
      { item: "Leadverwerking", progress: 0, complexity: 65 },
      { item: "Partnernetwerk toekomstplan", progress: 25, complexity: 75 },
      { item: "SEO", progress: 10, complexity: 50 },
      { item: "Commerciële promotiestructuur", progress: 10, complexity: 70 },
      { item: "PDF-projectbeschrijving", progress: 60, complexity: 30 },
      { item: "Brasco OS-koppeling", progress: 35, complexity: 55 }
    ],
    actionPlan: [
      {
        phase: "Fase 1",
        task: "Projectscope vastzetten: pagina's, leadvelden, CTA's en veilige claims.",
        role: "Commandor",
        complexity: 35,
        progress: 40,
        dependencies: "Besluit over toon, doelgroep en contactbestemming.",
        nextAction: "Bevestig scope en prioriteit binnen Brasco OS."
      },
      {
        phase: "Fase 2",
        task: "Website-informatiearchitectuur maken voor Home, Over, Partners & Netwerk en Contact.",
        role: "Specialist",
        complexity: 55,
        progress: 20,
        dependencies: "Projectscope en kernboodschap.",
        nextAction: "Schrijf per pagina doel, secties en CTA."
      },
      {
        phase: "Fase 3",
        task: "Landingspagina en vier routes technisch bouwen.",
        role: "Executor",
        complexity: 65,
        progress: 0,
        dependencies: "Pagina-opzet en basisdesign.",
        nextAction: "Maak componentstructuur en navigatie."
      },
      {
        phase: "Fase 4",
        task: "Basis-chatbox en contactformulier bouwen.",
        role: "Executor",
        complexity: 70,
        progress: 0,
        dependencies: "Leadvelden, privacytekst en opslagkeuze.",
        nextAction: "Maak formulierstate, bevestigingsreactie en lokale leadbuffer."
      },
      {
        phase: "Fase 5",
        task: "Watcher-controle op ontbrekende info, risico's, claims en opvolging.",
        role: "Watcher",
        complexity: 45,
        progress: 15,
        dependencies: "Conceptcontent en leadflow.",
        nextAction: "Maak risico-overzicht en blokkerende vragen."
      },
      {
        phase: "Fase 6",
        task: "Partnernetwerk, SEO en commerciele promotiestructuur uitwerken.",
        role: "Specialist",
        complexity: 75,
        progress: 15,
        dependencies: "Doelgroepen, domeinen/URLs en partnerpropositie.",
        nextAction: "Maak partnercategorieen en promotiepagina-template."
      },
      {
        phase: "Fase 7",
        task: "Build, bestandsstructuur en projectdocumentatie bewaken.",
        role: "System",
        complexity: 40,
        progress: 25,
        dependencies: "Werkende app en projectbestanden.",
        nextAction: "Draai build en controleer diff."
      }
    ],
    brascoRoles: {
      Commandor: "Bepaalt prioriteit, vertaalt opdrachten naar testvoorstellen en kiest de volgende stap.",
      Executor: "Voert websitebouw, chatbox, formulier, leadflow en technische taken uit.",
      Watcher: "Signaleert ontbrekende input, risico's, blokkades, verlopen deadlines en claimgevoelige teksten.",
      Specialist: "Adviseert over H2-netwerk, UX, SEO, partnerpropositie en commerciele positionering.",
      System: "Bewaakt status, voortgang, bestandsstructuur, build en documentatie."
    },
    pdfSource: "docs/h2-zutphen-projectbeschrijving.md"
  },
  {
    id: 1,
    title: "Hydrogen Planning",
    deadline: "2026-06-12",
    value: "high",
    createdAt: "2026-06-08"
  },
  {
    id: 2,
    title: "CRM Follow-up",
    deadline: "2026-06-15",
    value: "medium",
    createdAt: "2026-06-05"
  },
  {
    id: 3,
    title: "Domain Transfer",
    deadline: "2026-06-20",
    value: "medium",
    createdAt: "2026-06-01"
  }
];
