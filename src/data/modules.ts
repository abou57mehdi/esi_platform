import { getPdfUrl } from '../utils/r2Config';

// Common Core Modules (S1-S4)
export const commonModules = {
  1: [ // Semester 1
    {
      id: "archi-se101",
      code: "ARCHI-SE101",
      name: "Architecture des ordinateurs et Système d'exploitation",
      semester: 1,
      year: "1CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Systèmes et Réseaux",
      elements: [
        {
          id: "archi-se101-e1",
          number: 1,
          title: "Architecture des ordinateurs",
          pdfPath: getPdfUrl("common/S1", "ARCHI-SE101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Architecture Von Neumann", "Processeurs", "Mémoires"]
        },
        {
          id: "archi-se101-e2",
          number: 2,
          title: "Systèmes d'exploitation",
          pdfPath: getPdfUrl("common/S1", "ARCHI-SE101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Processus", "Gestion mémoire", "Systèmes de fichiers"]
        }
      ]
    },
    {
      id: "math101",
      code: "MATH101",
      name: "Mathématique pour l'Ingénieur",
      semester: 1,
      year: "1CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Mathématiques",
      elements: [
        {
          id: "math101-e1",
          number: 1,
          title: "Analyse et Algèbre Linéaire",
          pdfPath: getPdfUrl("common/S1", "MATH101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Matrices", "Espaces vectoriels", "Dérivées"]
        },
        {
          id: "math101-e2",
          number: 2,
          title: "Équations différentielles",
          pdfPath: getPdfUrl("common/S1", "MATH101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["EDO", "Solutions numériques", "Applications"]
        }
      ]
    },
    {
      id: "algo-prog101",
      code: "ALGO-PROG101",
      name: "Algorithmique et Programmation",
      semester: 1,
      year: "1CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Algorithmique",
      elements: [
        {
          id: "algo-prog101-e1",
          number: 1,
          title: "Introduction à l'algorithmique",
          pdfPath: getPdfUrl("common/S1", "ALGO-PROG101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Variables", "Structures conditionnelles", "Boucles"]
        },
        {
          id: "algo-prog101-e2",
          number: 2,
          title: "Structures de données simples",
          pdfPath: getPdfUrl("common/S1", "ALGO-PROG101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Tableaux", "Chaînes de caractères", "Fonctions"]
        }
      ]
    },
    {
      id: "ged-ds101",
      code: "GED-DS101",
      name: "Gestion électronique des documents et Documents structurés",
      semester: 1,
      year: "1CS",
      credits: 5,
      coefficient: 2,
      professor: "Equipe pédagogique",
      category: "Gestion de contenus",
      elements: [
        {
          id: "ged-ds101-e1",
          number: 1,
          title: "XML et langages associés",
          pdfPath: getPdfUrl("common/S1", "GED-DS101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["XML", "DTD", "Schéma XML"]
        },
        {
          id: "ged-ds101-e2",
          number: 2,
          title: "Gestion électronique des documents",
          pdfPath: getPdfUrl("common/S1", "GED-DS101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["GED", "Workflow", "Archivage"]
        }
      ]
    },
    {
      id: "reseau101",
      code: "RESEAU101",
      name: "Réseaux informatiques",
      semester: 1,
      year: "1CS",
      credits: 5,
      coefficient: 2,
      professor: "Equipe pédagogique",
      category: "Réseaux",
      elements: [
        {
          id: "reseau101-e1",
          number: 1,
          title: "Fondements des réseaux",
          pdfPath: getPdfUrl("common/S1", "RESEAU101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Modèle OSI", "TCP/IP", "Topologies"]
        },
        {
          id: "reseau101-e2",
          number: 2,
          title: "Protocoles et services",
          pdfPath: getPdfUrl("common/S1", "RESEAU101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["IP", "TCP/UDP", "DNS", "DHCP"]
        }
      ]
    },
    {
      id: "ro101",
      code: "RO101",
      name: "Recherche Opérationnelle",
      semester: 1,
      year: "1CS",
      credits: 4,
      coefficient: 2,
      professor: "Equipe pédagogique",
      category: "Mathématiques Appliquées",
      elements: [
        {
          id: "ro101-e1",
          number: 1,
          title: "Programmation linéaire",
          pdfPath: getPdfUrl("common/S1", "RO101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Formulation", "Méthode du simplexe", "Dualité"]
        },
        {
          id: "ro101-e2",
          number: 2,
          title: "Graphes et optimisation",
          pdfPath: getPdfUrl("common/S1", "RO101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Graphes", "Chemins optimaux", "Arbres couvrants"]
        }
      ]
    },
    {
      id: "eco101",
      code: "ECO101",
      name: "Économie de l'Entreprise",
      semester: 1,
      year: "1CS",
      credits: 3,
      coefficient: 1,
      professor: "Equipe pédagogique",
      category: "Économie",
      elements: [
        {
          id: "eco101-e1",
          number: 1,
          title: "Microéconomie",
          pdfPath: getPdfUrl("common/S1", "ECO101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Offre et demande", "Élasticité", "Théorie du consommateur"]
        },
        {
          id: "eco101-e2",
          number: 2,
          title: "Macroéconomie",
          pdfPath: getPdfUrl("common/S1", "ECO101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["PIB", "Inflation", "Emploi"]
        }
      ]
    },
    {
      id: "ang-tec101",
      code: "ANG-TEC101",
      name: "Anglais et TEC 1",
      semester: 1,
      year: "1CS",
      credits: 2,
      coefficient: 1,
      professor: "Equipe pédagogique",
      category: "Langues",
      elements: [
        {
          id: "ang-tec101-e1",
          number: 1,
          title: "Anglais technique",
          pdfPath: getPdfUrl("common/S1", "ANG-TEC101-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Vocabulaire technique", "Lecture scientifique", "Communication"]
        },
        {
          id: "ang-tec101-e2",
          number: 2,
          title: "Communication professionnelle",
          pdfPath: getPdfUrl("common/S1", "ANG-TEC101-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Présentations", "CV", "Entretiens"]
        }
      ]
    }
  ],
  2: [ // Semester 2
    {
      id: "acbd201",
      code: "ACBD201",
      name: "Analyse et Conception des Bases de Données",
      semester: 2,
      year: "1CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Bases de données",
      elements: [
        {
          id: "acbd201-e1",
          number: 1,
          title: "Modélisation conceptuelle",
          pdfPath: getPdfUrl("common/S2", "ACBD201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Modèle entité-association", "Normalisation", "Diagrammes UML"]
        },
        {
          id: "acbd201-e2",
          number: 2,
          title: "Modélisation logique et physique",
          pdfPath: getPdfUrl("common/S2", "ACBD201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["SQL", "Contraintes", "Index"]
        }
      ]
    },
    {
      id: "prob-stat201",
      code: "PROB-STAT201",
      name: "Probabilités et statistiques",
      semester: 2,
      year: "1CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Mathématiques",
      elements: [
        {
          id: "prob-stat201-e1",
          number: 1,
          title: "Probabilités",
          pdfPath: getPdfUrl("common/S2", "PROB-STAT201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Espaces probabilisés", "Variables aléatoires", "Lois usuelles"]
        },
        {
          id: "prob-stat201-e2",
          number: 2,
          title: "Statistiques inférentielles",
          pdfPath: getPdfUrl("common/S2", "PROB-STAT201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Estimation", "Tests d'hypothèses", "Régression"]
        }
      ]
    },
    {
      id: "prog-web201",
      code: "PROG-WEB201",
      name: "Programmation et Technologies Web",
      semester: 2,
      year: "1CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Web",
      elements: [
        {
          id: "prog-web201-e1",
          number: 1,
          title: "HTML, CSS et JavaScript",
          pdfPath: getPdfUrl("common/S2", "PROG-WEB201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Structure HTML", "Stylisation CSS", "DOM"]
        },
        {
          id: "prog-web201-e2",
          number: 2,
          title: "Frameworks web",
          pdfPath: getPdfUrl("common/S2", "PROG-WEB201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["React", "Vue.js", "Angular"]
        }
      ]
    },
    {
      id: "algo-adv201",
      code: "ALGO-ADV201",
      name: "Algorithmique et Programmation Avancée",
      semester: 2,
      year: "1CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Algorithmique",
      elements: [
        {
          id: "algo-adv201-e1",
          number: 1,
          title: "Structures de données complexes",
          pdfPath: getPdfUrl("common/S2", "ALGO-ADV201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Listes chaînées", "Piles", "Files", "Arbres"]
        },
        {
          id: "algo-adv201-e2",
          number: 2,
          title: "Algorithmes avancés",
          pdfPath: getPdfUrl("common/S2", "ALGO-ADV201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Diviser pour régner", "Programmation dynamique", "Gloutons"]
        }
      ]
    },
    {
      id: "eserv-gc201",
      code: "ESERV-GC201",
      name: "E-services et gestion de contenu d'entreprise",
      semester: 2,
      year: "1CS",
      credits: 5,
      coefficient: 2,
      professor: "Equipe pédagogique",
      category: "Systèmes d'information",
      elements: [
        {
          id: "eserv-gc201-e1",
          number: 1,
          title: "E-services et architectures orientées services",
          pdfPath: getPdfUrl("common/S2", "ESERV-GC201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["SOA", "Web Services", "REST", "SOAP"]
        },
        {
          id: "eserv-gc201-e2",
          number: 2,
          title: "CMS et gestion de contenu",
          pdfPath: getPdfUrl("common/S2", "ESERV-GC201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["WordPress", "Drupal", "SharePoint"]
        }
      ]
    },
    {
      id: "gci201",
      code: "GCI201",
      name: "Gestion du capital immatériel",
      semester: 2,
      year: "1CS",
      credits: 4,
      coefficient: 2,
      professor: "Equipe pédagogique",
      category: "Management",
      elements: [
        {
          id: "gci201-e1",
          number: 1,
          title: "Stratégie de l'intangible",
          pdfPath: getPdfUrl("common/S2", "GCI201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Patrimoine immatériel", "Veille stratégique", "Innovation"]
        },
        {
          id: "gci201-e2",
          number: 2,
          title: "Valorisation des actifs incorporels",
          pdfPath: getPdfUrl("common/S2", "GCI201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Propriété intellectuelle", "Marques", "Brevets"]
        }
      ]
    },
    {
      id: "mgt201",
      code: "MGT201",
      name: "Management pour l'ingénieur",
      semester: 2,
      year: "1CS",
      credits: 3,
      coefficient: 1,
      professor: "Equipe pédagogique",
      category: "Management",
      elements: [
        {
          id: "mgt201-e1",
          number: 1,
          title: "Fondements du management",
          pdfPath: getPdfUrl("common/S2", "MGT201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Leadership", "Communication", "Organisation"]
        },
        {
          id: "mgt201-e2",
          number: 2,
          title: "Management de projets",
          pdfPath: getPdfUrl("common/S2", "MGT201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Gantt", "PERT", "Agilité"]
        }
      ]
    },
    {
      id: "ang-tec201",
      code: "ANG-TEC201",
      name: "Anglais et TEC 2",
      semester: 2,
      year: "1CS",
      credits: 2,
      coefficient: 1,
      professor: "Equipe pédagogique",
      category: "Langues",
      elements: [
        {
          id: "ang-tec201-e1",
          number: 1,
          title: "Anglais technique avancé",
          pdfPath: getPdfUrl("common/S2", "ANG-TEC201-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Documentation technique", "Normes", "Publications"]
        },
        {
          id: "ang-tec201-e2",
          number: 2,
          title: "Communication interculturelle",
          pdfPath: getPdfUrl("common/S2", "ANG-TEC201-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Communication internationale", "Culture d'entreprise"]
        }
      ]
    }
  ],
  3: [ // Semester 3
    {
      id: "cpo301",
      code: "CPO301",
      name: "Conception et Programmation Orienté Objet",
      semester: 3,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Programmation",
      elements: [
        {
          id: "cpo301-e1",
          number: 1,
          title: "Principes de l'orienté objet",
          pdfPath: getPdfUrl("common/S3", "CPO301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Classes", "Objets", "Encapsulation"]
        },
        {
          id: "cpo301-e2",
          number: 2,
          title: "Héritage et polymorphisme",
          pdfPath: getPdfUrl("common/S3", "CPO301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Héritage", "Polymorphisme", "Abstraction"]
        }
      ]
    },
    {
      id: "bda-admin301",
      code: "BDA-ADMIN301",
      name: "Bases de Données avancés et administration des BD",
      semester: 3,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Bases de données",
      elements: [
        {
          id: "bda-admin301-e1",
          number: 1,
          title: "Bases de données avancées",
          pdfPath: getPdfUrl("common/S3", "BDA-ADMIN301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["SQL avancé", "Optimisation", "Transactions"]
        },
        {
          id: "bda-admin301-e2",
          number: 2,
          title: "Administration des bases de données",
          pdfPath: getPdfUrl("common/S3", "BDA-ADMIN301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["SGBD", "Sauvegarde", "Sécurité"]
        }
      ]
    },
    {
      id: "fsi301",
      code: "FSI301",
      name: "Fondements des systèmes intelligents",
      semester: 3,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Intelligence Artificielle",
      elements: [
        {
          id: "fsi301-e1",
          number: 1,
          title: "Introduction à l'IA",
          pdfPath: getPdfUrl("common/S3", "FSI301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Agents intelligents", "Représentation des connaissances"]
        },
        {
          id: "fsi301-e2",
          number: 2,
          title: "Algorithmes de recherche",
          pdfPath: getPdfUrl("common/S3", "FSI301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Recherche heuristique", "Algorithmes génétiques"]
        }
      ]
    },
    {
      id: "admin-sys301",
      code: "ADMIN-SYS301",
      name: "Administration des systèmes",
      semester: 3,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Systèmes",
      elements: [
        {
          id: "admin-sys301-e1",
          number: 1,
          title: "Administration système Linux",
          pdfPath: getPdfUrl("common/S3", "ADMIN-SYS301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Shell", "Permissions", "Services"]
        },
        {
          id: "admin-sys301-e2",
          number: 2,
          title: "Virtualisation",
          pdfPath: getPdfUrl("common/S3", "ADMIN-SYS301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["VM", "Conteneurs", "Hyperviseurs"]
        }
      ]
    },
    {
      id: "fsd301",
      code: "FSD301",
      name: "Fondements pour les sciences de données",
      semester: 3,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Science des données",
      elements: [
        {
          id: "fsd301-e1",
          number: 1,
          title: "Statistiques descriptives",
          pdfPath: getPdfUrl("common/S3", "FSD301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Mesures", "Distribution", "Visualisation"]
        },
        {
          id: "fsd301-e2",
          number: 2,
          title: "Analyse exploratoire des données",
          pdfPath: getPdfUrl("common/S3", "FSD301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["EDA", "Nettoyage", "Transformation"]
        }
      ]
    },
    {
      id: "math-sd301",
      code: "MATH-SD301",
      name: "Mathématique pour les sciences de données",
      semester: 3,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Mathématiques",
      elements: [
        {
          id: "math-sd301-e1",
          number: 1,
          title: "Algèbre linéaire",
          pdfPath: getPdfUrl("common/S3", "MATH-SD301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Vecteurs", "Matrices", "Espaces vectoriels"]
        },
        {
          id: "math-sd301-e2",
          number: 2,
          title: "Calcul différentiel",
          pdfPath: getPdfUrl("common/S3", "MATH-SD301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Dérivées", "Optimisation", "Gradient"]
        }
      ]
    },
    {
      id: "pm-entre301",
      code: "PM-ENTRE301",
      name: "Project Management et Entrepreneuriat",
      semester: 3,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Management",
      elements: [
        {
          id: "pm-entre301-e1",
          number: 1,
          title: "Gestion de projet",
          pdfPath: getPdfUrl("common/S3", "PM-ENTRE301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Méthodes", "Planning", "Ressources"]
        },
        {
          id: "pm-entre301-e2",
          number: 2,
          title: "Entrepreneuriat",
          pdfPath: getPdfUrl("common/S3", "PM-ENTRE301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Création d'entreprise", "Business plan", "Financement"]
        }
      ]
    },
    {
      id: "ang-tec301",
      code: "ANG-TEC301",
      name: "Anglais et TEC 3",
      semester: 3,
      year: "2CS",
      credits: 2,
      coefficient: 1,
      professor: "Equipe pédagogique",
      category: "Langues",
      elements: [
        {
          id: "ang-tec301-e1",
          number: 1,
          title: "Communication professionnelle",
          pdfPath: getPdfUrl("common/S3", "ANG-TEC301-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Présentations", "Rédaction", "Négociation"]
        },
        {
          id: "ang-tec301-e2",
          number: 2,
          title: "Terminologie technique",
          pdfPath: getPdfUrl("common/S3", "ANG-TEC301-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Vocabulaire", "Traduction", "Documentation"]
        }
      ]
    }
  ],
  4: [ // Semester 4
    {
      id: "dev-adv401",
      code: "DEV-ADV401",
      name: "Développement avancé",
      semester: 4,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Programmation",
      elements: [
        {
          id: "dev-adv401-e1",
          number: 1,
          title: "Design patterns",
          pdfPath: getPdfUrl("common/S4", "DEV-ADV401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["GoF", "Architecturaux", "Créationnels"]
        },
        {
          id: "dev-adv401-e2",
          number: 2,
          title: "Tests et qualité logicielle",
          pdfPath: getPdfUrl("common/S4", "DEV-ADV401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["TDD", "JUnit", "Couverture"]
        }
      ]
    },
    {
      id: "jee401",
      code: "JEE401",
      name: "Développement logiciel JEE",
      semester: 4,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Développement Web",
      elements: [
        {
          id: "jee401-e1",
          number: 1,
          title: "Architecture JEE",
          pdfPath: getPdfUrl("common/S4", "JEE401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Servlets", "JSP", "EJB"]
        },
        {
          id: "jee401-e2",
          number: 2,
          title: "Services web",
          pdfPath: getPdfUrl("common/S4", "JEE401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["SOAP", "REST", "WS-Security"]
        }
      ]
    },
    {
      id: "gl401",
      code: "GL401",
      name: "Génie logiciel",
      semester: 4,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Génie Logiciel",
      elements: [
        {
          id: "gl401-e1",
          number: 1,
          title: "Méthodes de développement",
          pdfPath: getPdfUrl("common/S4", "GL401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Agile", "Scrum", "DevOps"]
        },
        {
          id: "gl401-e2",
          number: 2,
          title: "Modélisation UML",
          pdfPath: getPdfUrl("common/S4", "GL401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Diagrammes", "Cas d'utilisation", "Classes"]
        }
      ]
    },
    {
      id: "dev-wm401",
      code: "DEV-WM401",
      name: "Développement web et mobile",
      semester: 4,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Développement",
      elements: [
        {
          id: "dev-wm401-e1",
          number: 1,
          title: "Technologies web modernes",
          pdfPath: getPdfUrl("common/S4", "DEV-WM401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["React", "Vue.js", "Angular"]
        },
        {
          id: "dev-wm401-e2",
          number: 2,
          title: "Développement mobile",
          pdfPath: getPdfUrl("common/S4", "DEV-WM401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Android", "iOS", "Flutter"]
        }
      ]
    },
    {
      id: "ic401",
      code: "IC401",
      name: "Ingénierie des connaissances",
      semester: 4,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Intelligence Artificielle",
      elements: [
        {
          id: "ic401-e1",
          number: 1,
          title: "Représentation des connaissances",
          pdfPath: getPdfUrl("common/S4", "IC401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Logique", "Réseaux sémantiques", "Ontologies"]
        },
        {
          id: "ic401-e2",
          number: 2,
          title: "Systèmes experts",
          pdfPath: getPdfUrl("common/S4", "IC401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Règles", "Inférence", "Moteurs"]
        }
      ]
    },
    {
      id: "cn401",
      code: "CN401",
      name: "Confiance numérique",
      semester: 4,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Sécurité",
      elements: [
        {
          id: "cn401-e1",
          number: 1,
          title: "Sécurité des systèmes d'information",
          pdfPath: getPdfUrl("common/S4", "CN401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Cryptographie", "Authentification", "PKI"]
        },
        {
          id: "cn401-e2",
          number: 2,
          title: "Vie privée et protection des données",
          pdfPath: getPdfUrl("common/S4", "CN401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["RGPD", "Anonymisation", "Consentement"]
        }
      ]
    },
    {
      id: "gmsi401",
      code: "GMSI401",
      name: "Gouvernance et management des Systèmes d'Information",
      semester: 4,
      year: "2CS",
      credits: 6,
      coefficient: 3,
      professor: "Equipe pédagogique",
      category: "Management",
      elements: [
        {
          id: "gmsi401-e1",
          number: 1,
          title: "Gouvernance des SI",
          pdfPath: getPdfUrl("common/S4", "GMSI401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["COBIT", "ITIL", "TOGAF"]
        },
        {
          id: "gmsi401-e2",
          number: 2,
          title: "Stratégie informatique",
          pdfPath: getPdfUrl("common/S4", "GMSI401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Alignement", "ROI", "Innovation"]
        }
      ]
    },
    {
      id: "mr401",
      code: "MR401",
      name: "Méthodologie de recherche",
      semester: 4,
      year: "2CS",
      credits: 3,
      coefficient: 1,
      professor: "Equipe pédagogique",
      category: "Recherche",
      elements: [
        {
          id: "mr401-e1",
          number: 1,
          title: "Méthodes de recherche",
          pdfPath: getPdfUrl("common/S4", "MR401-E1.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Scientifique", "Expérimentale", "Observationnelle"]
        },
        {
          id: "mr401-e2",
          number: 2,
          title: "Rédaction scientifique",
          pdfPath: getPdfUrl("common/S4", "MR401-E2.pdf"),
          pages: 0,
          fileSize: "",
          topics: ["Articles", "Mémoires", "Présentations"]
        }
      ]
    }
  ]
};

// Filière-Specific Modules (S5)
export const filiereModules = {
  isitd: {
    5: [ // Semester 5 for ISITD
      {
        id: "tdm501-isitd",
        code: "TDM501-ISITD",
        name: "Technologies de données massives",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Big Data",
        elements: [
          {
            id: "tdm501-isitd-e1",
            number: 1,
            title: "Élément 1",
            pdfPath: getPdfUrl("isitd/semestre_cinq/technologies_de_données_massives/elt1", "hadoop_intro.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Hadoop", "Introduction", "Architecture"]
          },
          {
            id: "tdm501-isitd-e2",
            number: 2,
            title: "Élément 2",
            pdfPath: getPdfUrl("isitd/semestre_cinq/technologies_de_données_massives/elt2", "hadoop_ch2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["MapReduce", "HDFS", "YARN"]
          }
        ]
      },
      {
        id: "bi501-isitd",
        code: "BI501-ISITD",
        name: "Business Intelligence",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Business Intelligence",
        elements: [
          {
            id: "bi501-isitd-e1",
            number: 1,
            title: "Fondements de la Business Intelligence",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "BI501-ISITD-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Data Warehousing", "OLAP", "Reporting"]
          },
          {
            id: "bi501-isitd-e2",
            number: 2,
            title: "Outils de Business Intelligence",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "BI501-ISITD-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Tableau", "Power BI", "QlikView"]
          }
        ]
      },
      {
        id: "se501-isitd",
        code: "SE501-ISITD",
        name: "Systèmes embarqués",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes Embarqués",
        elements: [
          {
            id: "se501-isitd-e1",
            number: 1,
            title: "Architecture des systèmes embarqués",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "SE501-ISITD-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Microcontrôleurs", "Architectures ARM", "Interfaces"]
          },
          {
            id: "se501-isitd-e2",
            number: 2,
            title: "Programmation temps réel",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "SE501-ISITD-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RTOS", "Synchronisation", "Contraintes temporelles"]
          }
        ]
      },
      {
        id: "tdti501-isitd",
        code: "TDTI501-ISITD",
        name: "Transformation digitale et technologies innovantes",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Transformation Digitale",
        elements: [
          {
            id: "tdti501-isitd-e1",
            number: 1,
            title: "Stratégies de transformation digitale",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "TDTI501-ISITD-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Stratégie digitale", "Changement organisationnel", "Innovation"]
          },
          {
            id: "tdti501-isitd-e2",
            number: 2,
            title: "Technologies émergentes",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "TDTI501-ISITD-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["IoT", "Cloud Computing", "Blockchain"]
          }
        ]
      },
      {
        id: "uisi501-isitd",
        code: "UISI501-ISITD",
        name: "Urbanisation et intégration des Systèmes d'Information",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes d'Information",
        elements: [
          {
            id: "uisi501-isitd-e1",
            number: 1,
            title: "Architecture orientée services",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "UISI501-ISITD-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["SOA", "Microservices", "API Management"]
          },
          {
            id: "uisi501-isitd-e2",
            number: 2,
            title: "Intégration des systèmes",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "UISI501-ISITD-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["ESB", "Middleware", "ETL"]
          }
        ]
      },
      {
        id: "su501-isitd",
        code: "SU501-ISITD",
        name: "Systèmes ubiquitaires",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes Ubiquitaires",
        elements: [
          {
            id: "su501-isitd-e1",
            number: 1,
            title: "Concepts des systèmes ubiquitaires",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "SU501-ISITD-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Ubiquité", "Contexte", "Mobilité"]
          },
          {
            id: "su501-isitd-e2",
            number: 2,
            title: "Applications ubiquitaires",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "SU501-ISITD-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["IoT", "Smart Cities", "Wearables"]
          }
        ]
      },
      {
        id: "qasi501-isitd",
        code: "QASI501-ISITD",
        name: "Qualité et Audit des Systèmes d'Information",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Qualité et Audit",
        elements: [
          {
            id: "qasi501-isitd-e1",
            number: 1,
            title: "Normes et modèles qualité",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "QASI501-ISITD-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["ISO 9001", "CMMI", "ITIL"]
          },
          {
            id: "qasi501-isitd-e2",
            number: 2,
            title: "Audit des SI",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "QASI501-ISITD-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Contrôles", "Risques", "Conformité"]
          }
        ]
      },
      {
        id: "dp501-isitd",
        code: "DP501-ISITD",
        name: "Développement personnel",
        semester: 5,
        year: "3CS",
        filiere: "ISITD",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Développement Personnel",
        elements: [
          {
            id: "dp501-isitd-e1",
            number: 1,
            title: "Compétences relationnelles",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "DP501-ISITD-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Communication", "Leadership", "Travail d'équipe"]
          },
          {
            id: "dp501-isitd-e2",
            number: 2,
            title: "Gestion du stress et motivation",
            pdfPath: getPdfUrl("filieres/ISITD/S5", "DP501-ISITD-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Stress", "Motivation", "Équilibre vie pro"]
          }
        ]
      }
    ],
    3: [ // Semester 3 for ISITD (using common modules but with ISITD-specific elements)
      {
        id: "cpo301",
        code: "CPO301",
        name: "Conception et Programmation Orienté Objet",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Programmation",
        elements: [
          {
            id: "cpo301-e1",
            number: 1,
            title: "Principes de l'orienté objet",
            pdfPath: getPdfUrl("common/S3", "CPO301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Classes", "Objets", "Encapsulation"]
          },
          {
            id: "cpo301-e2",
            number: 2,
            title: "Héritage et polymorphisme",
            pdfPath: getPdfUrl("common/S3", "CPO301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Héritage", "Polymorphisme", "Abstraction"]
          }
        ]
      },
      {
        id: "bda-admin301",
        code: "BDA-ADMIN301",
        name: "Bases de Données avancés et administration des BD",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Bases de données",
        elements: [
          {
            id: "bda-admin301-e1",
            number: 1,
            title: "Bases de données avancées",
            pdfPath: getPdfUrl("common/S3", "BDA-ADMIN301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["SQL avancé", "Optimisation", "Transactions"]
          },
          {
            id: "bda-admin301-e2",
            number: 2,
            title: "Administration des bases de données",
            pdfPath: getPdfUrl("common/S3", "BDA-ADMIN301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["SGBD", "Sauvegarde", "Sécurité"]
          }
        ]
      },
      {
        id: "fsi301",
        code: "FSI301",
        name: "Fondements des systèmes intelligents",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Intelligence Artificielle",
        elements: [
          {
            id: "fsi301-e1",
            number: 1,
            title: "Introduction à l'IA",
            pdfPath: getPdfUrl("common/S3", "FSI301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Agents intelligents", "Représentation des connaissances"]
          },
          {
            id: "fsi301-e2",
            number: 2,
            title: "Algorithmes de recherche",
            pdfPath: getPdfUrl("common/S3", "FSI301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Recherche heuristique", "Algorithmes génétiques"]
          }
        ]
      },
      {
        id: "admin-sys301",
        code: "ADMIN-SYS301",
        name: "Administration des systèmes",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes",
        elements: [
          {
            id: "admin-sys301-e1",
            number: 1,
            title: "Administration système Linux",
            pdfPath: getPdfUrl("common/S3", "ADMIN-SYS301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Shell", "Permissions", "Services"]
          },
          {
            id: "admin-sys301-e2",
            number: 2,
            title: "Virtualisation",
            pdfPath: getPdfUrl("common/S3", "ADMIN-SYS301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["VM", "Conteneurs", "Hyperviseurs"]
          }
        ]
      },
      {
        id: "fsd301",
        code: "FSD301",
        name: "Fondements pour les sciences de données",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Science des données",
        elements: [
          {
            id: "fsd301-e1",
            number: 1,
            title: "Statistiques descriptives",
            pdfPath: getPdfUrl("common/S3", "FSD301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Mesures", "Distribution", "Visualisation"]
          },
          {
            id: "fsd301-e2",
            number: 2,
            title: "Analyse exploratoire des données",
            pdfPath: getPdfUrl("common/S3", "FSD301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["EDA", "Nettoyage", "Transformation"]
          }
        ]
      },
      {
        id: "math-sd301",
        code: "MATH-SD301",
        name: "Mathématique pour les sciences de données",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Mathématiques",
        elements: [
          {
            id: "math-sd301-e1",
            number: 1,
            title: "Algèbre linéaire",
            pdfPath: getPdfUrl("common/S3", "MATH-SD301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Vecteurs", "Matrices", "Espaces vectoriels"]
          },
          {
            id: "math-sd301-e2",
            number: 2,
            title: "Calcul différentiel",
            pdfPath: getPdfUrl("common/S3", "MATH-SD301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Dérivées", "Optimisation", "Gradient"]
          }
        ]
      },
      {
        id: "pm-entre301",
        code: "PM-ENTRE301",
        name: "Project Management et Entrepreneuriat",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "pm-entre301-e1",
            number: 1,
            title: "Gestion de projet",
            pdfPath: getPdfUrl("common/S3", "PM-ENTRE301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Méthodes", "Planning", "Ressources"]
          },
          {
            id: "pm-entre301-e2",
            number: 2,
            title: "Entrepreneuriat",
            pdfPath: getPdfUrl("common/S3", "PM-ENTRE301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Création d'entreprise", "Business plan", "Financement"]
          }
        ]
      },
      {
        id: "ang-tec301",
        code: "ANG-TEC301",
        name: "Anglais et TEC 3",
        semester: 3,
        year: "2CS",
        credits: 2,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Langues",
        elements: [
          {
            id: "ang-tec301-e1",
            number: 1,
            title: "Communication professionnelle",
            pdfPath: getPdfUrl("common/S3", "ANG-TEC301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Présentations", "Rédaction", "Négociation"]
          },
          {
            id: "ang-tec301-e2",
            number: 2,
            title: "Terminologie technique",
            pdfPath: getPdfUrl("common/S3", "ANG-TEC301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Vocabulaire", "Traduction", "Documentation"]
          }
        ]
      }
    ],
    4: [ // Semester 4 for ISITD
      {
        id: "dev-adv401",
        code: "DEV-ADV401",
        name: "Développement avancé",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Programmation",
        elements: [
          {
            id: "dev-adv401-e1",
            number: 1,
            title: "Design patterns",
            pdfPath: getPdfUrl("common/S4", "DEV-ADV401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["GoF", "Architecturaux", "Créationnels"]
          },
          {
            id: "dev-adv401-e2",
            number: 2,
            title: "Tests et qualité logicielle",
            pdfPath: getPdfUrl("common/S4", "DEV-ADV401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["TDD", "JUnit", "Couverture"]
          }
        ]
      },
      {
        id: "jee401",
        code: "JEE401",
        name: "Développement logiciel JEE",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Développement Web",
        elements: [
          {
            id: "jee401-e1",
            number: 1,
            title: "Architecture JEE",
            pdfPath: getPdfUrl("common/S4", "JEE401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Servlets", "JSP", "EJB"]
          },
          {
            id: "jee401-e2",
            number: 2,
            title: "Services web",
            pdfPath: getPdfUrl("common/S4", "JEE401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["SOAP", "REST", "WS-Security"]
          }
        ]
      },
      {
        id: "gl401",
        code: "GL401",
        name: "Génie logiciel",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Génie Logiciel",
        elements: [
          {
            id: "gl401-e1",
            number: 1,
            title: "Méthodes de développement",
            pdfPath: getPdfUrl("common/S4", "GL401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Agile", "Scrum", "DevOps"]
          },
          {
            id: "gl401-e2",
            number: 2,
            title: "Modélisation UML",
            pdfPath: getPdfUrl("common/S4", "GL401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Diagrammes", "Cas d'utilisation", "Classes"]
          }
        ]
      },
      {
        id: "dev-wm401",
        code: "DEV-WM401",
        name: "Développement web et mobile",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Développement",
        elements: [
          {
            id: "dev-wm401-e1",
            number: 1,
            title: "Technologies web modernes",
            pdfPath: getPdfUrl("common/S4", "DEV-WM401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["React", "Vue.js", "Angular"]
          },
          {
            id: "dev-wm401-e2",
            number: 2,
            title: "Développement mobile",
            pdfPath: getPdfUrl("common/S4", "DEV-WM401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Android", "iOS", "Flutter"]
          }
        ]
      },
      {
        id: "ic401",
        code: "IC401",
        name: "Ingénierie des connaissances",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Intelligence Artificielle",
        elements: [
          {
            id: "ic401-e1",
            number: 1,
            title: "Représentation des connaissances",
            pdfPath: getPdfUrl("common/S4", "IC401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Logique", "Réseaux sémantiques", "Ontologies"]
          },
          {
            id: "ic401-e2",
            number: 2,
            title: "Systèmes experts",
            pdfPath: getPdfUrl("common/S4", "IC401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Règles", "Inférence", "Moteurs"]
          }
        ]
      },
      {
        id: "cn401",
        code: "CN401",
        name: "Confiance numérique",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Sécurité",
        elements: [
          {
            id: "cn401-e1",
            number: 1,
            title: "Sécurité des systèmes d'information",
            pdfPath: getPdfUrl("common/S4", "CN401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Cryptographie", "Authentification", "PKI"]
          },
          {
            id: "cn401-e2",
            number: 2,
            title: "Vie privée et protection des données",
            pdfPath: getPdfUrl("common/S4", "CN401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RGPD", "Anonymisation", "Consentement"]
          }
        ]
      },
      {
        id: "gmsi401",
        code: "GMSI401",
        name: "Gouvernance et management des Systèmes d'Information",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "gmsi401-e1",
            number: 1,
            title: "Gouvernance des SI",
            pdfPath: getPdfUrl("common/S4", "GMSI401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["COBIT", "ITIL", "TOGAF"]
          },
          {
            id: "gmsi401-e2",
            number: 2,
            title: "Stratégie informatique",
            pdfPath: getPdfUrl("common/S4", "GMSI401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Alignement", "ROI", "Innovation"]
          }
        ]
      },
      {
        id: "mr401",
        code: "MR401",
        name: "Méthodologie de recherche",
        semester: 4,
        year: "2CS",
        credits: 3,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Recherche",
        elements: [
          {
            id: "mr401-e1",
            number: 1,
            title: "Méthodes de recherche",
            pdfPath: getPdfUrl("common/S4", "MR401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Scientifique", "Expérimentale", "Observationnelle"]
          },
          {
            id: "mr401-e2",
            number: 2,
            title: "Rédaction scientifique",
            pdfPath: getPdfUrl("common/S4", "MR401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Articles", "Mémoires", "Présentations"]
          }
        ]
      }
    ]
  },
  icsds: {
    5: [ // Semester 5 for ICSDS
      {
        id: "bi501-icsds",
        code: "BI501-ICS",
        name: "Business Intelligence",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Business Intelligence",
        elements: [
          {
            id: "bi501-icsds-e1",
            number: 1,
            title: "Fondements de la Business Intelligence",
            pdfPath: getPdfUrl("filieres/ICS/S5", "BI501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Data Warehousing", "OLAP", "Reporting"]
          },
          {
            id: "bi501-icsds-e2",
            number: 2,
            title: "Outils de Business Intelligence",
            pdfPath: getPdfUrl("filieres/ICS/S5", "BI501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Tableau", "Power BI", "QlikView"]
          }
        ]
      },
      {
        id: "da501-icsds",
        code: "DA501-ICS",
        name: "Data Architecture",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Architecture des données",
        elements: [
          {
            id: "da501-icsds-e1",
            number: 1,
            title: "Architecture des plateformes Big Data",
            pdfPath: getPdfUrl("filieres/ICS/S5", "DA501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Hadoop", "Spark", "Kafka"]
          },
          {
            id: "da501-icsds-e2",
            number: 2,
            title: "Modélisation des données",
            pdfPath: getPdfUrl("filieres/ICS/S5", "DA501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Dimensionnelle", "Data Vault", "Data Lake"]
          }
        ]
      },
      {
        id: "acp501-icsds",
        code: "ACP501-ICS",
        name: "Analyse et Conduite de Projet",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Gestion de projet",
        elements: [
          {
            id: "acp501-icsds-e1",
            number: 1,
            title: "Gestion de projet data science",
            pdfPath: getPdfUrl("filieres/ICS/S5", "ACP501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["CRISP-DM", "Kanban", "Agilité"]
          },
          {
            id: "acp501-icsds-e2",
            number: 2,
            title: "Gouvernance des projets",
            pdfPath: getPdfUrl("filieres/ICS/S5", "ACP501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RACI", "Budget", "Risques"]
          }
        ]
      },
      {
        id: "cvpr501-icsds",
        code: "CVP501-ICS",
        name: "Computer Vision and Pattern Recognition",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Vision par ordinateur",
        elements: [
          {
            id: "cvpr501-icsds-e1",
            number: 1,
            title: "Traitement d'images",
            pdfPath: getPdfUrl("filieres/ICS/S5", "CVP501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Filtres", "Segmentation", "Descripteurs"]
          },
          {
            id: "cvpr501-icsds-e2",
            number: 2,
            title: "Réseaux de neurones convolutifs",
            pdfPath: getPdfUrl("filieres/ICS/S5", "CVP501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["CNN", "Transfer Learning", "Object Detection"]
          }
        ]
      },
      {
        id: "tga501-icsds",
        code: "TGA501-ICS",
        name: "Text and Graph Analysis",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Analyse de texte",
        elements: [
          {
            id: "tga501-icsds-e1",
            number: 1,
            title: "Traitement du langage naturel",
            pdfPath: getPdfUrl("filieres/ICS/S5", "TGA501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Tokenisation", "POS", "NER"]
          },
          {
            id: "tga501-icsds-e2",
            number: 2,
            title: "Analyse de graphes",
            pdfPath: getPdfUrl("filieres/ICS/S5", "TGA501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Graphes", "Centrality", "Communautés"]
          }
        ]
      },
      {
        id: "su501-icsds",
        code: "SU501-ICS",
        name: "Systèmes ubiquitaires",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes Ubiquitaires",
        elements: [
          {
            id: "su501-icsds-e1",
            number: 1,
            title: "Concepts des systèmes ubiquitaires",
            pdfPath: getPdfUrl("filieres/ICS/S5", "SU501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Ubiquité", "Contexte", "Mobilité"]
          },
          {
            id: "su501-icsds-e2",
            number: 2,
            title: "Applications ubiquitaires",
            pdfPath: getPdfUrl("filieres/ICS/S5", "SU501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["IoT", "Smart Cities", "Wearables"]
          }
        ]
      },
      {
        id: "gri501-icsds",
        code: "GRI501-ICS",
        name: "Gestion des Risques et Innovation",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Gestion des risques",
        elements: [
          {
            id: "gri501-icsds-e1",
            number: 1,
            title: "Gestion des risques en DS",
            pdfPath: getPdfUrl("filieres/ICS/S5", "GRI501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Risques", "Mitigation", "Assurance"]
          },
          {
            id: "gri501-icsds-e2",
            number: 2,
            title: "Innovation et entrepreneuriat",
            pdfPath: getPdfUrl("filieres/ICS/S5", "GRI501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Innovation", "Startups", "Financement"]
          }
        ]
      },
      {
        id: "mr501-icsds",
        code: "MR501-ICS",
        name: "Méthodologie de recherche",
        semester: 5,
        year: "3CS",
        filiere: "ICS",
        credits: 3,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Recherche",
        elements: [
          {
            id: "mr501-icsds-e1",
            number: 1,
            title: "Méthodes de recherche en IA",
            pdfPath: getPdfUrl("filieres/ICS/S5", "MR501-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Expérimentation", "Validation", "Publication"]
          },
          {
            id: "mr501-icsds-e2",
            number: 2,
            title: "Éthique en IA et DS",
            pdfPath: getPdfUrl("filieres/ICS/S5", "MR501-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Éthique", "Biais", "Transparence"]
          }
        ]
      }
    ],
    3: [ // Semester 3 for ICSDS
      {
        id: "acp301",
        code: "ACP301",
        name: "Analyse et Conduite de Projets",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Gestion de projet",
        elements: [
          {
            id: "acp301-e1",
            number: 1,
            title: "Gestion de projet",
            pdfPath: getPdfUrl("common/S3", "ACP301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Méthodes", "Planning", "Ressources"]
          },
          {
            id: "acp301-e2",
            number: 2,
            title: "Conduite de projet",
            pdfPath: getPdfUrl("common/S3", "ACP301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Leadership", "Communication", "Suivi"]
          }
        ]
      },
      {
        id: "poo301",
        code: "POO301",
        name: "Programmation Orientée Objet",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Programmation",
        elements: [
          {
            id: "poo301-e1",
            number: 1,
            title: "Principes de l'orienté objet",
            pdfPath: getPdfUrl("common/S3", "POO301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Classes", "Objets", "Encapsulation"]
          },
          {
            id: "poo301-e2",
            number: 2,
            title: "Héritage et polymorphisme",
            pdfPath: getPdfUrl("common/S3", "POO301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Héritage", "Polymorphisme", "Abstraction"]
          }
        ]
      },
      {
        id: "si301",
        code: "SI301",
        name: "Statistiques Inférentielles et Processus Stochastiques",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Statistiques",
        elements: [
          {
            id: "si301-e1",
            number: 1,
            title: "Statistiques inférentielles",
            pdfPath: getPdfUrl("common/S3", "SI301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Tests", "Intervalles", "Régression"]
          },
          {
            id: "si301-e2",
            number: 2,
            title: "Processus stochastiques",
            pdfPath: getPdfUrl("common/S3", "SI301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Markov", "Poisson", "Brownien"]
          }
        ]
      },
      {
        id: "ti301",
        code: "TI301",
        name: "Théorie de l'Information et Traitement du Signal",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Théorie de l'information",
        elements: [
          {
            id: "ti301-e1",
            number: 1,
            title: "Théorie de l'information",
            pdfPath: getPdfUrl("common/S3", "TI301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Entropy", "Compression", "Codage"]
          },
          {
            id: "ti301-e2",
            number: 2,
            title: "Traitement du signal",
            pdfPath: getPdfUrl("common/S3", "TI301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["FFT", "Filtrage", "Échantillonnage"]
          }
        ]
      },
      {
        id: "fsi301-icsds",
        code: "FSI301",
        name: "Fondements des systèmes intelligents",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Intelligence Artificielle",
        elements: [
          {
            id: "fsi301-icsds-e1",
            number: 1,
            title: "Introduction à l'IA",
            pdfPath: getPdfUrl("common/S3", "FSI301-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Agents intelligents", "Représentation des connaissances"]
          },
          {
            id: "fsi301-icsds-e2",
            number: 2,
            title: "Algorithmes de recherche",
            pdfPath: getPdfUrl("common/S3", "FSI301-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Recherche heuristique", "Algorithmes génétiques"]
          }
        ]
      },
      {
        id: "roa301",
        code: "ROA301",
        name: "Recherche Opérationnelle Avancée",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Recherche Opérationnelle",
        elements: [
          {
            id: "roa301-e1",
            number: 1,
            title: "Optimisation combinatoire",
            pdfPath: getPdfUrl("common/S3", "ROA301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Graphes", "Algorithmes", "Complexité"]
          },
          {
            id: "roa301-e2",
            number: 2,
            title: "Programmation linéaire avancée",
            pdfPath: getPdfUrl("common/S3", "ROA301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Simplexe", "Dualité", "Post-optimisation"]
          }
        ]
      },
      {
        id: "daa301",
        code: "DAA301",
        name: "Data Acquisition and Analysis",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Science des données",
        elements: [
          {
            id: "daa301-e1",
            number: 1,
            title: "Acquisition des données",
            pdfPath: getPdfUrl("common/S3", "DAA301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Sources", "API", "Web scraping"]
          },
          {
            id: "daa301-e2",
            number: 2,
            title: "Analyse exploratoire",
            pdfPath: getPdfUrl("common/S3", "DAA301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["EDA", "Visualisation", "Statistiques"]
          }
        ]
      },
      {
        id: "pm-entre301-icsds",
        code: "PM-ENT301",
        name: "Project Management et Entrepreneuriat",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "pm-entre301-icsds-e1",
            number: 1,
            title: "Gestion de projet",
            pdfPath: getPdfUrl("common/S3", "PM-ENT301-ICS-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Méthodes", "Planning", "Ressources"]
          },
          {
            id: "pm-entre301-icsds-e2",
            number: 2,
            title: "Entrepreneuriat",
            pdfPath: getPdfUrl("common/S3", "PM-ENT301-ICS-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Création d'entreprise", "Business plan", "Financement"]
          }
        ]
      }
    ],
    4: [ // Semester 4 for ICSDS
      {
        id: "pam401",
        code: "PAM401",
        name: "Programmation avancée et mobile",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Programmation",
        elements: [
          {
            id: "pam401-e1",
            number: 1,
            title: "Programmation fonctionnelle",
            pdfPath: getPdfUrl("common/S4", "PAM401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Lambda", "Immutabilité", "Monades"]
          },
          {
            id: "pam401-e2",
            number: 2,
            title: "Développement mobile",
            pdfPath: getPdfUrl("common/S4", "PAM401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Android", "iOS", "Flutter"]
          }
        ]
      },
      {
        id: "bda401",
        code: "BDA401",
        name: "Bases de Données Avancées",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Bases de données",
        elements: [
          {
            id: "bda401-e1",
            number: 1,
            title: "Bases NoSQL",
            pdfPath: getPdfUrl("common/S4", "BDA401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["MongoDB", "Cassandra", "Redis"]
          },
          {
            id: "bda401-e2",
            number: 2,
            title: "Data warehousing",
            pdfPath: getPdfUrl("common/S4", "BDA401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["ETL", "Dimensions", "Faits"]
          }
        ]
      },
      {
        id: "mrsc401",
        code: "MRSC401",
        name: "Modèles de régression et séries chronologiques",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Statistiques",
        elements: [
          {
            id: "mrsc401-e1",
            number: 1,
            title: "Modèles de régression",
            pdfPath: getPdfUrl("common/S4", "MRSC401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Linéaire", "Logistique", "Polynomiale"]
          },
          {
            id: "mrsc401-e2",
            number: 2,
            title: "Séries chronologiques",
            pdfPath: getPdfUrl("common/S4", "MRSC401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["ARIMA", "Tendance", "Saisonnalité"]
          }
        ]
      },
      {
        id: "ml401",
        code: "ML401",
        name: "Machine Learning",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Machine Learning",
        elements: [
          {
            id: "ml401-e1",
            number: 1,
            title: "Apprentissage supervisé",
            pdfPath: getPdfUrl("common/S4", "ML401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Classification", "Régression", "SVM"]
          },
          {
            id: "ml401-e2",
            number: 2,
            title: "Apprentissage non supervisé",
            pdfPath: getPdfUrl("common/S4", "ML401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Clustering", "PCA", "Association"]
          }
        ]
      },
      {
        id: "srv401",
        code: "SRV401",
        name: "Systèmes Répartis et Virtualisation",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes",
        elements: [
          {
            id: "srv401-e1",
            number: 1,
            title: "Systèmes répartis",
            pdfPath: getPdfUrl("common/S4", "SRV401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RPC", "Middleware", "Consistance"]
          },
          {
            id: "srv401-e2",
            number: 2,
            title: "Virtualisation",
            pdfPath: getPdfUrl("common/S4", "SRV401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["VM", "Conteneurs", "Orchestration"]
          }
        ]
      },
      {
        id: "ct401",
        code: "CT401",
        name: "Cryptocurrency Technologies",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Cryptomonnaies",
        elements: [
          {
            id: "ct401-e1",
            number: 1,
            title: "Blockchain fondamentaux",
            pdfPath: getPdfUrl("common/S4", "CT401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Hachage", "Preuve de travail", "Consensus"]
          },
          {
            id: "ct401-e2",
            number: 2,
            title: "Smart contracts",
            pdfPath: getPdfUrl("common/S4", "CT401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Ethereum", "Solidity", "DApps"]
          }
        ]
      },
      {
        id: "ms401",
        code: "MS401",
        name: "Management Stratégique",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "ms401-e1",
            number: 1,
            title: "Stratégie d'entreprise",
            pdfPath: getPdfUrl("common/S4", "MS401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Analyse SWOT", "Positionnement", "Avantage concurrentiel"]
          },
          {
            id: "ms401-e2",
            number: 2,
            title: "Innovation stratégique",
            pdfPath: getPdfUrl("common/S4", "MS401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Innovation", "R&D", "Transformation"]
          }
        ]
      },
      {
        id: "atec401",
        code: "ATEC401",
        name: "Anglais et TEC Professionnels",
        semester: 4,
        year: "2CS",
        credits: 2,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Langues",
        elements: [
          {
            id: "atec401-e1",
            number: 1,
            title: "Communication professionnelle",
            pdfPath: getPdfUrl("common/S4", "ATEC401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Présentations", "Rédaction", "Négociation"]
          },
          {
            id: "atec401-e2",
            number: 2,
            title: "Terminologie technique",
            pdfPath: getPdfUrl("common/S4", "ATEC401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Vocabulaire", "Traduction", "Documentation"]
          }
        ]
      }
    ]
  },
  iind: {
    5: [ // Semester 5 for IIND
      {
        id: "tdm501-iind",
        code: "TDM501-IIN",
        name: "Technologies de données massives",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Big Data",
        elements: [
          {
            id: "tdm501-iind-e1",
            number: 1,
            title: "Introduction au Big Data",
            pdfPath: getPdfUrl("filieres/IIN/S5", "TDM501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Hadoop", "MapReduce", "HDFS"]
          },
          {
            id: "tdm501-iind-e2",
            number: 2,
            title: "Traitement distribué avec Spark",
            pdfPath: getPdfUrl("filieres/IIN/S5", "TDM501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Spark Core", "RDD", "DataFrames"]
          }
        ]
      },
      {
        id: "bi501-iind",
        code: "BI501-IIN",
        name: "Business Intelligence",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Business Intelligence",
        elements: [
          {
            id: "bi501-iind-e1",
            number: 1,
            title: "Fondements de la Business Intelligence",
            pdfPath: getPdfUrl("filieres/IIN/S5", "BI501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Data Warehousing", "OLAP", "Reporting"]
          },
          {
            id: "bi501-iind-e2",
            number: 2,
            title: "Outils de Business Intelligence",
            pdfPath: getPdfUrl("filieres/IIN/S5", "BI501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Tableau", "Power BI", "QlikView"]
          }
        ]
      },
      {
        id: "ic501-iind",
        code: "IC501-IIN",
        name: "Intelligence compétitive",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Intelligence Compétitive",
        elements: [
          {
            id: "ic501-iind-e1",
            number: 1,
            title: "Fondements de l'intelligence compétitive",
            pdfPath: getPdfUrl("filieres/IIN/S5", "IC501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Veille", "Analyse concurrentielle", "Stratégie"]
          },
          {
            id: "ic501-iind-e2",
            number: 2,
            title: "Outils et méthodes",
            pdfPath: getPdfUrl("filieres/IIN/S5", "IC501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Collecte", "Analyse", "Diffusion"]
          }
        ]
      },
      {
        id: "aec501-iind",
        code: "AEC501-IIN",
        name: "Analyse et extraction de connaissances",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Analyse de données",
        elements: [
          {
            id: "aec501-iind-e1",
            number: 1,
            title: "Méthodes d'analyse de données",
            pdfPath: getPdfUrl("filieres/IIN/S5", "AEC501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Statistiques", "Visualisation", "Corrélation"]
          },
          {
            id: "aec501-iind-e2",
            number: 2,
            title: "Extraction de connaissances",
            pdfPath: getPdfUrl("filieres/IIN/S5", "AEC501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Pattern mining", "Association", "Séquences"]
          }
        ]
      },
      {
        id: "dig501-iind",
        code: "DIG501-IIN",
        name: "Data and information governance",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Gouvernance des données",
        elements: [
          {
            id: "dig501-iind-e1",
            number: 1,
            title: "Politiques de gouvernance",
            pdfPath: getPdfUrl("filieres/IIN/S5", "DIG501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Politiques", "Cadres", "Normes"]
          },
          {
            id: "dig501-iind-e2",
            number: 2,
            title: "Qualité et maîtrise des données",
            pdfPath: getPdfUrl("filieres/IIN/S5", "DIG501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Qualité", "Maîtrise", "Conformité"]
          }
        ]
      },
      {
        id: "su501-iind",
        code: "SU501-IIN",
        name: "Systèmes ubiquitaires",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes Ubiquitaires",
        elements: [
          {
            id: "su501-iind-e1",
            number: 1,
            title: "Concepts des systèmes ubiquitaires",
            pdfPath: getPdfUrl("filieres/IIN/S5", "SU501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Ubiquité", "Contexte", "Mobilité"]
          },
          {
            id: "su501-iind-e2",
            number: 2,
            title: "Applications ubiquitaires",
            pdfPath: getPdfUrl("filieres/IIN/S5", "SU501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["IoT", "Smart Cities", "Wearables"]
          }
        ]
      },
      {
        id: "qasi501-iind",
        code: "QASI501-IIN",
        name: "Qualité et Audit des Systèmes d'Information",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Qualité et Audit",
        elements: [
          {
            id: "qasi501-iind-e1",
            number: 1,
            title: "Normes et modèles qualité",
            pdfPath: getPdfUrl("filieres/IIN/S5", "QASI501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["ISO 9001", "CMMI", "ITIL"]
          },
          {
            id: "qasi501-iind-e2",
            number: 2,
            title: "Audit des SI",
            pdfPath: getPdfUrl("filieres/IIN/S5", "QASI501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Contrôles", "Risques", "Conformité"]
          }
        ]
      },
      {
        id: "dp501-iind",
        code: "DP501-IIN",
        name: "Développement personnel",
        semester: 5,
        year: "3CS",
        filiere: "IIN",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Développement Personnel",
        elements: [
          {
            id: "dp501-iind-e1",
            number: 1,
            title: "Compétences relationnelles",
            pdfPath: getPdfUrl("filieres/IIN/S5", "DP501-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Communication", "Leadership", "Travail d'équipe"]
          },
          {
            id: "dp501-iind-e2",
            number: 2,
            title: "Gestion du stress et motivation",
            pdfPath: getPdfUrl("filieres/IIN/S5", "DP501-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Stress", "Motivation", "Équilibre vie pro"]
          }
        ]
      }
    ],
    3: [ // Semester 3 for IIND
      {
        id: "cpo301-iind",
        code: "CPO301",
        name: "Conception et Programmation Orienté Objet",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Programmation",
        elements: [
          {
            id: "cpo301-iind-e1",
            number: 1,
            title: "Principes de l'orienté objet",
            pdfPath: getPdfUrl("common/S3", "CPO301-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Classes", "Objets", "Encapsulation"]
          },
          {
            id: "cpo301-iind-e2",
            number: 2,
            title: "Héritage et polymorphisme",
            pdfPath: getPdfUrl("common/S3", "CPO301-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Héritage", "Polymorphisme", "Abstraction"]
          }
        ]
      },
      {
        id: "bda-admin301-iind",
        code: "BDA-ADM301",
        name: "Bases de Données avancés et administration des BD",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Bases de données",
        elements: [
          {
            id: "bda-admin301-iind-e1",
            number: 1,
            title: "Bases de données avancées",
            pdfPath: getPdfUrl("common/S3", "BDA-ADM301-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["SQL avancé", "Optimisation", "Transactions"]
          },
          {
            id: "bda-admin301-iind-e2",
            number: 2,
            title: "Administration des bases de données",
            pdfPath: getPdfUrl("common/S3", "BDA-ADM301-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["SGBD", "Sauvegarde", "Sécurité"]
          }
        ]
      },
      {
        id: "fsi301-iind",
        code: "FSI301",
        name: "Fondements des systèmes intelligents",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Intelligence Artificielle",
        elements: [
          {
            id: "fsi301-iind-e1",
            number: 1,
            title: "Introduction à l'IA",
            pdfPath: getPdfUrl("common/S3", "FSI301-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Agents intelligents", "Représentation des connaissances"]
          },
          {
            id: "fsi301-iind-e2",
            number: 2,
            title: "Algorithmes de recherche",
            pdfPath: getPdfUrl("common/S3", "FSI301-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Recherche heuristique", "Algorithmes génétiques"]
          }
        ]
      },
      {
        id: "admin-sys301-iind",
        code: "ADS301",
        name: "Administration des systèmes",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes",
        elements: [
          {
            id: "admin-sys301-iind-e1",
            number: 1,
            title: "Administration système Linux",
            pdfPath: getPdfUrl("common/S3", "ADS301-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Shell", "Permissions", "Services"]
          },
          {
            id: "admin-sys301-iind-e2",
            number: 2,
            title: "Virtualisation",
            pdfPath: getPdfUrl("common/S3", "ADS301-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["VM", "Conteneurs", "Hyperviseurs"]
          }
        ]
      },
      {
        id: "tri301",
        code: "TRI301",
        name: "Technologies de recherche d'information",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Recherche d'information",
        elements: [
          {
            id: "tri301-e1",
            number: 1,
            title: "Indexation et recherche",
            pdfPath: getPdfUrl("filieres/IIN/S3", "TRI301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Indexation", "Requêtes", "Pertinence"]
          },
          {
            id: "tri301-e2",
            number: 2,
            title: "Algorithmes de recherche",
            pdfPath: getPdfUrl("filieres/IIN/S3", "TRI301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["PageRank", "TF-IDF", "Similarité"]
          }
        ]
      },
      {
        id: "math-sd301-iind",
        code: "MSD301",
        name: "Mathématique pour les sciences de données",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Mathématiques",
        elements: [
          {
            id: "math-sd301-iind-e1",
            number: 1,
            title: "Algèbre linéaire",
            pdfPath: getPdfUrl("common/S3", "MSD301-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Vecteurs", "Matrices", "Espaces vectoriels"]
          },
          {
            id: "math-sd301-iind-e2",
            number: 2,
            title: "Calcul différentiel",
            pdfPath: getPdfUrl("common/S3", "MSD301-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Dérivées", "Optimisation", "Gradient"]
          }
        ]
      },
      {
        id: "pm-entre301-iind",
        code: "PME301",
        name: "Project Management et Entrepreneuriat",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "pm-entre301-iind-e1",
            number: 1,
            title: "Gestion de projet",
            pdfPath: getPdfUrl("common/S3", "PME301-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Méthodes", "Planning", "Ressources"]
          },
          {
            id: "pm-entre301-iind-e2",
            number: 2,
            title: "Entrepreneuriat",
            pdfPath: getPdfUrl("common/S3", "PME301-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Création d'entreprise", "Business plan", "Financement"]
          }
        ]
      },
      {
        id: "ang-tec301-iind",
        code: "AT301",
        name: "Anglais et TEC 3",
        semester: 3,
        year: "2CS",
        credits: 2,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Langues",
        elements: [
          {
            id: "ang-tec301-iind-e1",
            number: 1,
            title: "Communication professionnelle",
            pdfPath: getPdfUrl("common/S3", "AT301-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Présentations", "Rédaction", "Négociation"]
          },
          {
            id: "ang-tec301-iind-e2",
            number: 2,
            title: "Terminologie technique",
            pdfPath: getPdfUrl("common/S3", "AT301-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Vocabulaire", "Traduction", "Documentation"]
          }
        ]
      }
    ],
    4: [ // Semester 4 for IIND
      {
        id: "owsm401",
        code: "OWSM401",
        name: "Ontologies et web sémantique",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Web sémantique",
        elements: [
          {
            id: "owsm401-e1",
            number: 1,
            title: "Ontologies et langages",
            pdfPath: getPdfUrl("filieres/IIN/S4", "OWSM401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["OWL", "RDF", "SPARQL"]
          },
          {
            id: "owsm401-e2",
            number: 2,
            title: "Web sémantique",
            pdfPath: getPdfUrl("filieres/IIN/S4", "OWSM401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Linked Data", "Triple stores", "Applications"]
          }
        ]
      },
      {
        id: "id401",
        code: "ID401",
        name: "Ingénierie documentaire",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Ingénierie documentaire",
        elements: [
          {
            id: "id401-e1",
            number: 1,
            title: "Organisation de l'information",
            pdfPath: getPdfUrl("filieres/IIN/S4", "ID401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Classification", "Taxonomies", "Métadonnées"]
          },
          {
            id: "id401-e2",
            number: 2,
            title: "Recherche documentaire",
            pdfPath: getPdfUrl("filieres/IIN/S4", "ID401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Recherche", "Indexation", "Evaluation"]
          }
        ]
      },
      {
        id: "taid401",
        code: "TAID401",
        name: "Traitement et indexation automatiques des documents",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Traitement de documents",
        elements: [
          {
            id: "taid401-e1",
            number: 1,
            title: "Traitement automatique",
            pdfPath: getPdfUrl("filieres/IIN/S4", "TAID401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["OCR", "NLP", "Classification"]
          },
          {
            id: "taid401-e2",
            number: 2,
            title: "Indexation automatique",
            pdfPath: getPdfUrl("filieres/IIN/S4", "TAID401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Indexation", "Résumé", "Extraction"]
          }
        ]
      },
      {
        id: "cgcm401",
        code: "CGCM401",
        name: "Conception et gestion des contenus multimédia",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Contenu multimédia",
        elements: [
          {
            id: "cgcm401-e1",
            number: 1,
            title: "Conception multimédia",
            pdfPath: getPdfUrl("filieres/IIN/S4", "CGCM401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Design", "Interactivité", "Narration"]
          },
          {
            id: "cgcm401-e2",
            number: 2,
            title: "Gestion des contenus",
            pdfPath: getPdfUrl("filieres/IIN/S4", "CGCM401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Stockage", "Distribution", "Droits"]
          }
        ]
      },
      {
        id: "ic401-iind",
        code: "IC401",
        name: "Ingénierie des connaissances",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Intelligence Artificielle",
        elements: [
          {
            id: "ic401-iind-e1",
            number: 1,
            title: "Représentation des connaissances",
            pdfPath: getPdfUrl("common/S4", "IC401-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Logique", "Réseaux sémantiques", "Ontologies"]
          },
          {
            id: "ic401-iind-e2",
            number: 2,
            title: "Systèmes experts",
            pdfPath: getPdfUrl("common/S4", "IC401-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Règles", "Inférence", "Moteurs"]
          }
        ]
      },
      {
        id: "cn401-iind",
        code: "CN401",
        name: "Confiance numérique",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Sécurité",
        elements: [
          {
            id: "cn401-iind-e1",
            number: 1,
            title: "Sécurité des systèmes d'information",
            pdfPath: getPdfUrl("common/S4", "CN401-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Cryptographie", "Authentification", "PKI"]
          },
          {
            id: "cn401-iind-e2",
            number: 2,
            title: "Vie privée et protection des données",
            pdfPath: getPdfUrl("common/S4", "CN401-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RGPD", "Anonymisation", "Consentement"]
          }
        ]
      },
      {
        id: "gmsi401-iind",
        code: "GMSI401",
        name: "Gouvernance et mangement des Systèmes d'Information",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "gmsi401-iind-e1",
            number: 1,
            title: "Gouvernance des SI",
            pdfPath: getPdfUrl("common/S4", "GMSI401-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["COBIT", "ITIL", "TOGAF"]
          },
          {
            id: "gmsi401-iind-e2",
            number: 2,
            title: "Stratégie informatique",
            pdfPath: getPdfUrl("common/S4", "GMSI401-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Alignement", "ROI", "Innovation"]
          }
        ]
      },
      {
        id: "mr401-iind",
        code: "MR401",
        name: "Méthodologie de recherche",
        semester: 4,
        year: "2CS",
        credits: 3,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Recherche",
        elements: [
          {
            id: "mr401-iind-e1",
            number: 1,
            title: "Méthodes de recherche",
            pdfPath: getPdfUrl("common/S4", "MR401-IIN-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Scientifique", "Expérimentale", "Observationnelle"]
          },
          {
            id: "mr401-iind-e2",
            number: 2,
            title: "Rédaction scientifique",
            pdfPath: getPdfUrl("common/S4", "MR401-IIN-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Articles", "Mémoires", "Présentations"]
          }
        ]
      }
    ]
  },
  issic: {
    5: [ // Semester 5 for ISSIC
      {
        id: "eh501-issic",
        code: "EH501-ISC",
        name: "Ethical hacking",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Sécurité offensive",
        elements: [
          {
            id: "eh501-issic-e1",
            number: 1,
            title: "Fondements de l'ethical hacking",
            pdfPath: getPdfUrl("filieres/ISC/S5", "EH501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Méthodologie", "Reconnaissance", "Scanning"]
          },
          {
            id: "eh501-issic-e2",
            number: 2,
            title: "Attaques et contre-mesures",
            pdfPath: getPdfUrl("filieres/ISC/S5", "EH501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Exploitation", "Post-exploitation", "Pivot"]
          }
        ]
      },
      {
        id: "sei501-issic",
        code: "SEI501-ISC",
        name: "Systèmes embarqués et intelligents",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Sécurité embarquée",
        elements: [
          {
            id: "sei501-issic-e1",
            number: 1,
            title: "Sécurité des systèmes embarqués",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SEI501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["IoT Security", "Firmware", "Side-channel attacks"]
          },
          {
            id: "sei501-issic-e2",
            number: 2,
            title: "Systèmes intelligents sécurisés",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SEI501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["AI Security", "ML Security", "Privacy"]
          }
        ]
      },
      {
        id: "sm501-issic",
        code: "SM501-ISC",
        name: "Sécurité réseaux et mobile",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Sécurité réseau",
        elements: [
          {
            id: "sm501-issic-e1",
            number: 1,
            title: "Sécurité des réseaux",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SM501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Firewall", "VPN", "IDS/IPS"]
          },
          {
            id: "sm501-issic-e2",
            number: 2,
            title: "Sécurité mobile",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SM501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Mobile threats", "App security", "BYOD"]
          }
        ]
      },
      {
        id: "su501-issic",
        code: "SU501-ISC",
        name: "Systèmes ubiquitaires",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes Ubiquitaires",
        elements: [
          {
            id: "su501-issic-e1",
            number: 1,
            title: "Sécurité des systèmes ubiquitaires",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SU501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Ubiquité", "Contexte", "Mobilité"]
          },
          {
            id: "su501-issic-e2",
            number: 2,
            title: "Applications ubiquitaires sécurisées",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SU501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["IoT", "Smart Cities", "Wearables"]
          }
        ]
      },
      {
        id: "bss501-issic",
        code: "BSS501-ISC",
        name: "Biometric Systems and Security",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Biométrie",
        elements: [
          {
            id: "bss501-issic-e1",
            number: 1,
            title: "Technologies biométriques",
            pdfPath: getPdfUrl("filieres/ISC/S5", "BSS501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Visage", "Empreinte", "Iris"]
          },
          {
            id: "bss501-issic-e2",
            number: 2,
            title: "Sécurité biométrique",
            pdfPath: getPdfUrl("filieres/ISC/S5", "BSS501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Spoofing", "Template protection", "Privacy"]
          }
        ]
      },
      {
        id: "ssd501-issic",
        code: "SSD501-ISC",
        name: "Sécurité des systèmes distribués",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Sécurité distribuée",
        elements: [
          {
            id: "ssd501-issic-e1",
            number: 1,
            title: "Sécurité dans les systèmes distribués",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SSD501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Consistance", "Authentification", "Autorisation"]
          },
          {
            id: "ssd501-issic-e2",
            number: 2,
            title: "Protocoles de sécurité",
            pdfPath: getPdfUrl("filieres/ISC/S5", "SSD501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["TLS", "SSH", "Kerberos"]
          }
        ]
      },
      {
        id: "gassi501-issic",
        code: "GASSI501-ISC",
        name: "Gouvernance & Audit de la sécurité des Systèmes d'Information",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Gouvernance de la sécurité",
        elements: [
          {
            id: "gassi501-issic-e1",
            number: 1,
            title: "Gouvernance de la sécurité",
            pdfPath: getPdfUrl("filieres/ISC/S5", "GASSI501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Normes", "Politiques", "Cadres"]
          },
          {
            id: "gassi501-issic-e2",
            number: 2,
            title: "Audit de sécurité",
            pdfPath: getPdfUrl("filieres/ISC/S5", "GASSI501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Vulnérabilités", "Compliance", "Reporting"]
          }
        ]
      },
      {
        id: "mr501-issic",
        code: "MR501-ISC",
        name: "Méthodologie de recherche",
        semester: 5,
        year: "3CS",
        filiere: "ISC",
        credits: 3,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Recherche",
        elements: [
          {
            id: "mr501-issic-e1",
            number: 1,
            title: "Méthodes de recherche en sécurité",
            pdfPath: getPdfUrl("filieres/ISC/S5", "MR501-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Expérimentation", "Validation", "Publication"]
          },
          {
            id: "mr501-issic-e2",
            number: 2,
            title: "Éthique en cybersécurité",
            pdfPath: getPdfUrl("filieres/ISC/S5", "MR501-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Éthique", "Responsabilité", "Légalité"]
          }
        ]
      }
    ],
    3: [ // Semester 3 for ISSIC
      {
        id: "asp301",
        code: "ASP301",
        name: "Analyse des systèmes et Conduite de Projet",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Gestion de projet",
        elements: [
          {
            id: "asp301-e1",
            number: 1,
            title: "Analyse des systèmes",
            pdfPath: getPdfUrl("filieres/ISC/S3", "ASP301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Modélisation", "Analyse fonctionnelle", "UML"]
          },
          {
            id: "asp301-e2",
            number: 2,
            title: "Conduite de projet",
            pdfPath: getPdfUrl("filieres/ISC/S3", "ASP301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Leadership", "Communication", "Suivi"]
          }
        ]
      },
      {
        id: "poo301-issic",
        code: "POO301",
        name: "Programmation Orientée Objet",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Programmation",
        elements: [
          {
            id: "poo301-issic-e1",
            number: 1,
            title: "Principes de l'orienté objet",
            pdfPath: getPdfUrl("common/S3", "POO301-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Classes", "Objets", "Encapsulation"]
          },
          {
            id: "poo301-issic-e2",
            number: 2,
            title: "Héritage et polymorphisme",
            pdfPath: getPdfUrl("common/S3", "POO301-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Héritage", "Polymorphisme", "Abstraction"]
          }
        ]
      },
      {
        id: "si301-issic",
        code: "SI301",
        name: "Statistiques Inférentielles et Processus Stochastiques",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Statistiques",
        elements: [
          {
            id: "si301-issic-e1",
            number: 1,
            title: "Statistiques inférentielles",
            pdfPath: getPdfUrl("common/S3", "SI301-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Tests", "Intervalles", "Régression"]
          },
          {
            id: "si301-issic-e2",
            number: 2,
            title: "Processus stochastiques",
            pdfPath: getPdfUrl("common/S3", "SI301-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Markov", "Poisson", "Brownien"]
          }
        ]
      },
      {
        id: "fc301",
        code: "FC301",
        name: "Fondements de la cyberdéfense",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Cyberdéfense",
        elements: [
          {
            id: "fc301-e1",
            number: 1,
            title: "Concepts de base",
            pdfPath: getPdfUrl("filieres/ISC/S3", "FC301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Menaces", "Vulnérabilités", "Risques"]
          },
          {
            id: "fc301-e2",
            number: 2,
            title: "Stratégies de défense",
            pdfPath: getPdfUrl("filieres/ISC/S3", "FC301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Prévention", "Détection", "Réponse"]
          }
        ]
      },
      {
        id: "ti301-issic",
        code: "TI301",
        name: "Théorie de l'Information et Traitement du Signal",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Théorie de l'information",
        elements: [
          {
            id: "ti301-issic-e1",
            number: 1,
            title: "Théorie de l'information",
            pdfPath: getPdfUrl("common/S3", "TI301-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Entropy", "Compression", "Codage"]
          },
          {
            id: "ti301-issic-e2",
            number: 2,
            title: "Traitement du signal",
            pdfPath: getPdfUrl("common/S3", "TI301-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["FFT", "Filtrage", "Échantillonnage"]
          }
        ]
      },
      {
        id: "arnq301",
        code: "ARNQ301",
        name: "Administration réseau et Qos",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Réseaux",
        elements: [
          {
            id: "arnq301-e1",
            number: 1,
            title: "Administration réseau",
            pdfPath: getPdfUrl("filieres/ISC/S3", "ARNQ301-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Configuration", "Monitoring", "Troubleshooting"]
          },
          {
            id: "arnq301-e2",
            number: 2,
            title: "Qualité de service",
            pdfPath: getPdfUrl("filieres/ISC/S3", "ARNQ301-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["QoS", "Priorisation", "Bandwidth"]
          }
        ]
      },
      {
        id: "pm-entre301-issic",
        code: "PME301",
        name: "Project Management et Entrepreneuriat",
        semester: 3,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "pm-entre301-issic-e1",
            number: 1,
            title: "Gestion de projet",
            pdfPath: getPdfUrl("common/S3", "PME301-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Méthodes", "Planning", "Ressources"]
          },
          {
            id: "pm-entre301-issic-e2",
            number: 2,
            title: "Entrepreneuriat",
            pdfPath: getPdfUrl("common/S3", "PME301-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Création d'entreprise", "Business plan", "Financement"]
          }
        ]
      },
      {
        id: "ang-tec301-issic",
        code: "AT301",
        name: "Anglais et TEC 3",
        semester: 3,
        year: "2CS",
        credits: 2,
        coefficient: 1,
        professor: "Equipe pédagogique",
        category: "Langues",
        elements: [
          {
            id: "ang-tec301-issic-e1",
            number: 1,
            title: "Communication professionnelle",
            pdfPath: getPdfUrl("common/S3", "AT301-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Présentations", "Rédaction", "Négociation"]
          },
          {
            id: "ang-tec301-issic-e2",
            number: 2,
            title: "Terminologie technique",
            pdfPath: getPdfUrl("common/S3", "AT301-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Vocabulaire", "Traduction", "Documentation"]
          }
        ]
      }
    ],
    4: [ // Semester 4 for ISSIC
      {
        id: "pam401-issic",
        code: "PAM401",
        name: "Programmation avancée et mobile",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Programmation",
        elements: [
          {
            id: "pam401-issic-e1",
            number: 1,
            title: "Programmation sécurisée",
            pdfPath: getPdfUrl("filieres/ISC/S4", "PAM401-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Secure coding", "Input validation", "OWASP"]
          },
          {
            id: "pam401-issic-e2",
            number: 2,
            title: "Sécurité des applications mobiles",
            pdfPath: getPdfUrl("filieres/ISC/S4", "PAM401-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Mobile threats", "App security", "Reverse engineering"]
          }
        ]
      },
      {
        id: "ssa401",
        code: "SSA401",
        name: "Sécurité des services et applications",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Sécurité applicative",
        elements: [
          {
            id: "ssa401-e1",
            number: 1,
            title: "Sécurité des services web",
            pdfPath: getPdfUrl("filieres/ISC/S4", "SSA401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Web services", "API security", "OAuth"]
          },
          {
            id: "ssa401-e2",
            number: 2,
            title: "Sécurité des applications",
            pdfPath: getPdfUrl("filieres/ISC/S4", "SSA401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["App security", "Code review", "Penetration testing"]
          }
        ]
      },
      {
        id: "ms401-issic",
        code: "MS401",
        name: "Mathématiques pour la sécurité",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Mathématiques",
        elements: [
          {
            id: "ms401-issic-e1",
            number: 1,
            title: "Mathématiques discrètes",
            pdfPath: getPdfUrl("filieres/ISC/S4", "MS401-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Théorie des nombres", "Arithmétique", "Logique"]
          },
          {
            id: "ms401-issic-e2",
            number: 2,
            title: "Cryptographie mathématique",
            pdfPath: getPdfUrl("filieres/ISC/S4", "MS401-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RSA", "AES", "Elliptic curves"]
          }
        ]
      },
      {
        id: "ml401-issic",
        code: "ML401",
        name: "Machine Learning",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Machine Learning",
        elements: [
          {
            id: "ml401-issic-e1",
            number: 1,
            title: "Apprentissage supervisé",
            pdfPath: getPdfUrl("common/S4", "ML401-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Classification", "Régression", "SVM"]
          },
          {
            id: "ml401-issic-e2",
            number: 2,
            title: "Apprentissage pour la sécurité",
            pdfPath: getPdfUrl("filieres/ISC/S4", "ML401-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Anomaly detection", "Malware detection", "IDS"]
          }
        ]
      },
      {
        id: "srv401-issic",
        code: "SRV401",
        name: "Systèmes Répartis et Virtualisation",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Systèmes",
        elements: [
          {
            id: "srv401-issic-e1",
            number: 1,
            title: "Sécurité des systèmes répartis",
            pdfPath: getPdfUrl("filieres/ISC/S4", "SRV401-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RPC", "Middleware", "Consistance"]
          },
          {
            id: "srv401-issic-e2",
            number: 2,
            title: "Sécurité de la virtualisation",
            pdfPath: getPdfUrl("filieres/ISC/S4", "SRV401-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["VM", "Conteneurs", "Orchestration"]
          }
        ]
      },
      {
        id: "ic401-issic",
        code: "IC401",
        name: "Ingénierie de la cryptographie",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Cryptographie",
        elements: [
          {
            id: "ic401-issic-e1",
            number: 1,
            title: "Cryptographie symétrique",
            pdfPath: getPdfUrl("filieres/ISC/S4", "IC401-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["DES", "AES", "Modes"]
          },
          {
            id: "ic401-issic-e2",
            number: 2,
            title: "Cryptographie asymétrique",
            pdfPath: getPdfUrl("filieres/ISC/S4", "IC401-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RSA", "ECC", "Signatures"]
          }
        ]
      },
      {
        id: "gia401",
        code: "GIA401",
        name: "Gestion des identités et accès",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "IAM",
        elements: [
          {
            id: "gia401-e1",
            number: 1,
            title: "Gestion des identités",
            pdfPath: getPdfUrl("filieres/ISC/S4", "GIA401-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["LDAP", "Active Directory", "SSO"]
          },
          {
            id: "gia401-e2",
            number: 2,
            title: "Contrôle d'accès",
            pdfPath: getPdfUrl("filieres/ISC/S4", "GIA401-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["RBAC", "ABAC", "MAC"]
          }
        ]
      },
      {
        id: "ms401-issic",
        code: "MS401",
        name: "Management de la sécurité",
        semester: 4,
        year: "2CS",
        credits: 6,
        coefficient: 3,
        professor: "Equipe pédagogique",
        category: "Management",
        elements: [
          {
            id: "ms401-issic-e1",
            number: 1,
            title: "Politiques de sécurité",
            pdfPath: getPdfUrl("filieres/ISC/S4", "MS401-ISC-E1.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Politiques", "Procédures", "Normes"]
          },
          {
            id: "ms401-issic-e2",
            number: 2,
            title: "Gestion des incidents",
            pdfPath: getPdfUrl("filieres/ISC/S4", "MS401-ISC-E2.pdf"),
            pages: 0,
            fileSize: "",
            topics: ["Incidents", "Crise", "Restauration"]
          }
        ]
      }
    ]
  }
};

// Helper to get modules by semester and filière
export const getModulesBySemester = (semester: number, filiere: string | null = null) => {
  if (semester <= 4) {
    // For common semesters (S1-S4), check if filiere-specific modules exist
    if (filiere) {
      const filiereSpecificModules = filiereModules[filiere as keyof typeof filiereModules];
      if (filiereSpecificModules && filiereSpecificModules[semester as keyof typeof filiereSpecificModules]) {
        return filiereSpecificModules[semester as keyof typeof filiereSpecificModules] || [];
      }
    }
    return commonModules[semester as keyof typeof commonModules] || [];
  } else if (semester === 5 && filiere) {
    return filiereModules[filiere as keyof typeof filiereModules]?.[5] || [];
  } else if (semester === 6) {
    // For S6 (PFE), all students have the same content
    return [
      {
        id: "pfe",
        code: "PFE",
        name: "Projet de Fin d'Études",
        semester: 6,
        year: "3CS",
        credits: 30,
        coefficient: 10,
        professor: "Équipe pédagogique PFE",
        category: "Projet",
        elements: [
          {
            id: "pfe-guidelines",
            number: 1,
            title: "Guide du PFE",
            pdfPath: getPdfUrl("pfe", "PFE-Guidelines.pdf"),
            pages: 45,
            fileSize: "2.1 MB",
            topics: ["Modalités", "Calendrier", "Évaluation"]
          },
          {
            id: "pfe-template",
            number: 2,
            title: "Modèle de rapport",
            pdfPath: getPdfUrl("pfe", "PFE-Template.pdf"),
            pages: 32,
            fileSize: "1.8 MB",
            topics: ["Format", "Structure", "Bibliographie"]
          }
        ]
      }
    ];
  }
  return [];
};