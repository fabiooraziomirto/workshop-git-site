export const translations = {
  it: {
    title: "Git Workshop: Collaborare senza caos",
    subtitle: "Come gestire il lavoro di squadra nel mondo open source",
    event: "Linux Day UniMe 2025",
    organization: "Organizzazione GitHub: linux-day-unime-2025",
    nav: {
      home: "Home",
      intro: "Introduzione",
      lab1: "Lab 1: Stage e Commit",
      lab2: "Lab 2: Repository Remoti",
      lab3: "Lab 3: Fork e Pull Request",
      resources: "Risorse"
    },
    intro: {
      title: "Introduzione",
      prerequisites: "Prerequisiti",
      prerequisitesText: "Prima di iniziare, assicurati di avere:",
      prerequisitesList: [
        "Git installato sul tuo computer (git-scm.com)",
        "Un account GitHub (github.com)",
        "Un terminale/command prompt",
        "Un editor di testo"
      ],
      setup: "Configurazione iniziale",
      setupText: "Prima di iniziare, configura Git con il tuo nome e email:",
      setupCommands: [
        'git config --global user.name "NOME COGNOME"',
        'git config --global user.email "tua-email@example.com"'
      ],
      verifyConfig: "Verifica la configurazione:",
      verifyCommand: "git config --list"
    },
    lab1: {
      title: "Esercizio 1: Stage e Commit",
      subtitle: "Fondamenti locali",
      description: "Questo esercizio ti insegnerà i concetti base di Git: staging area e commit.",
      part1: "Parte 1: Prime operazioni",
      part2: "Parte 2: Gestione dei file",
      part3: "Parte 3: Modifiche e diff",
      part4: "Parte 4: Staged e unstaged contemporaneamente",
      part5: "Parte 5: Operazioni multiple",
      part6: "Parte 6: Rename",
      reflection: "Domande di riflessione:",
      reflectionQuestions: [
        "Qual è la differenza tra git diff e git diff --staged?",
        "Cosa succede quando usi git rm vs il comando rm del sistema operativo?",
        "Come fa Git a riconoscere un rename?"
      ]
    },
    lab2: {
      title: "Esercizio 2: Repository Remoti",
      subtitle: "GitHub",
      description: "Imparerai a lavorare con repository remoti su GitHub, usando sia SSH che HTTPS.",
      sshSetup: "Setup SSH (Opzionale ma raccomandato)",
      sshDescription: "Se preferisci usare SSH invece di HTTPS:",
      sshSteps: [
        "Genera una chiave SSH (se non ne hai già una):",
        "Copia la chiave pubblica:",
        "Vai su GitHub → Settings → SSH and GPG keys → New SSH key",
        "Incolla la chiave e salva"
      ],
      createRemote: "Creazione del repository remoto",
      pushLocal: "Push del repository locale",
      connectRemote: "Connessione al remote",
      modifyPush: "Modifica e push",
      cloneRepo: "Clone di un repository esistente",
      reflectionQuestions: [
        "Qual è la differenza tra git remote add e git clone?",
        "Cosa fa il flag -u in git push -u origin main?",
        "Quale differenza c'è tra SSH e HTTPS per connettersi a GitHub?"
      ]
    },
    lab3: {
      title: "Esercizio 3: Fork, Clone e Pull Request",
      subtitle: "Flusso Open Source",
      description: "Imparerai il flusso di lavoro tipico dell'open source: fork, modifica, pull request.",
      forkRepo: "Fork del repository template",
      cloneFork: "Clone del tuo fork",
      createContribution: "Crea il tuo contributo",
      addPush: "Aggiungi e push",
      createPR: "Crea la Pull Request",
      issueTracking: "Issue tracking (GitHub Issues)",
      reflectionQuestions: [
        "Qual è la differenza tra un fork e un clone?",
        "Perché creiamo un branch separato invece di lavorare su main?",
        "Come funziona il flusso di revisione delle Pull Request?",
        "A cosa servono le GitHub Issues?"
      ]
    },
    resources: {
      title: "Risorse utili",
      links: [
        {
          title: "Documentazione ufficiale Git",
          url: "https://git-scm.com/doc"
        },
        {
          title: "GitHub Docs",
          url: "https://docs.github.com"
        },
        {
          title: "Git Cheat Sheet",
          url: "https://education.github.com/git-cheat-sheet-education.pdf"
        },
        {
          title: "Visualizzare Git",
          url: "https://git-school.github.io/visualizing-git"
        },
        {
          title: "Learn Git Branching",
          url: "https://learngitbranching.js.org"
        }
      ],
      troubleshooting: "Problemi comuni e soluzioni",
      commonIssues: [
        {
          problem: "Permission denied (publickey) con SSH",
          solution: "Verifica che la chiave SSH sia stata aggiunta a GitHub. Testa la connessione: ssh -T git@github.com"
        },
        {
          problem: "Authentication failed con HTTPS",
          solution: "Usa un Personal Access Token invece della password. Vai su GitHub → Settings → Developer settings → Personal access tokens"
        },
        {
          problem: "error: failed to push some refs",
          solution: "Qualcun altro ha pushato prima di te. Soluzione: git pull prima di git push"
        },
        {
          problem: "fatal: not a git repository",
          solution: "Non sei in una cartella con repository Git. Soluzione: cd nella cartella corretta o esegui git init"
        },
        {
          problem: "Merge conflicts",
          solution: "Git non riesce a unire automaticamente le modifiche. Apri i file in conflitto, risolvi manualmente, poi git add e git commit"
        }
      ],
      finalNotes: "Note finali",
      finalTips: [
        "Committa spesso con messaggi chiari",
        "Usa branch per sperimentare senza rischi",
        "Fai pull prima di iniziare a lavorare",
        "Leggi i messaggi di errore di Git: sono molto informativi",
        "Non aver paura di sbagliare: con Git puoi sempre tornare indietro!"
      ]
    },
    commands: {
      title: "Comandi Git Quick Reference",
      config: "Configurazione",
      localRepo: "Repository locale",
      diff: "Diff e confronti",
      branch: "Branch",
      remote: "Remote",
      fileManagement: "Gestione file"
    }
  },
  en: {
    title: "Git Workshop: Collaborate without Chaos",
    subtitle: "How to manage team work in the open source world",
    event: "Linux Day UniMe 2025",
    organization: "GitHub Organization: linux-day-unime-2025",
    nav: {
      home: "Home",
      intro: "Introduction",
      lab1: "Lab 1: Stage and Commit",
      lab2: "Lab 2: Remote Repositories",
      lab3: "Lab 3: Fork and Pull Request",
      resources: "Resources"
    },
    intro: {
      title: "Introduction",
      prerequisites: "Prerequisites",
      prerequisitesText: "Before starting, make sure you have:",
      prerequisitesList: [
        "Git installed on your computer (git-scm.com)",
        "A GitHub account (github.com)",
        "A terminal/command prompt",
        "A text editor"
      ],
      setup: "Initial setup",
      setupText: "Before starting, configure Git with your name and email:",
      setupCommands: [
        'git config --global user.name "FULL NAME"',
        'git config --global user.email "your-email@example.com"'
      ],
      verifyConfig: "Verify the configuration:",
      verifyCommand: "git config --list"
    },
    lab1: {
      title: "Exercise 1: Stage and Commit",
      subtitle: "Local fundamentals",
      description: "This exercise will teach you the basic concepts of Git: staging area and commit.",
      part1: "Part 1: First operations",
      part2: "Part 2: File management",
      part3: "Part 3: Changes and diff",
      part4: "Part 4: Staged and unstaged simultaneously",
      part5: "Part 5: Multiple operations",
      part6: "Part 6: Rename",
      reflection: "Reflection questions:",
      reflectionQuestions: [
        "What's the difference between git diff and git diff --staged?",
        "What happens when you use git rm vs the rm command of the operating system?",
        "How does Git recognize a rename?"
      ]
    },
    lab2: {
      title: "Exercise 2: Remote Repositories",
      subtitle: "GitHub",
      description: "You'll learn to work with remote repositories on GitHub, using both SSH and HTTPS.",
      sshSetup: "SSH Setup (Optional but recommended)",
      sshDescription: "If you prefer to use SSH instead of HTTPS:",
      sshSteps: [
        "Generate an SSH key (if you don't have one already):",
        "Copy the public key:",
        "Go to GitHub → Settings → SSH and GPG keys → New SSH key",
        "Paste the key and save"
      ],
      createRemote: "Creating the remote repository",
      pushLocal: "Push the local repository",
      connectRemote: "Connect to remote",
      modifyPush: "Modify and push",
      cloneRepo: "Clone an existing repository",
      reflectionQuestions: [
        "What's the difference between git remote add and git clone?",
        "What does the -u flag do in git push -u origin main?",
        "What's the difference between SSH and HTTPS for connecting to GitHub?"
      ]
    },
    lab3: {
      title: "Exercise 3: Fork, Clone and Pull Request",
      subtitle: "Open Source Workflow",
      description: "You'll learn the typical open source workflow: fork, modify, pull request.",
      forkRepo: "Fork the template repository",
      cloneFork: "Clone your fork",
      createContribution: "Create your contribution",
      addPush: "Add and push",
      createPR: "Create the Pull Request",
      issueTracking: "Issue tracking (GitHub Issues)",
      reflectionQuestions: [
        "What's the difference between a fork and a clone?",
        "Why do we create a separate branch instead of working on main?",
        "How does the Pull Request review workflow work?",
        "What are GitHub Issues used for?"
      ]
    },
    resources: {
      title: "Useful resources",
      links: [
        {
          title: "Official Git documentation",
          url: "https://git-scm.com/doc"
        },
        {
          title: "GitHub Docs",
          url: "https://docs.github.com"
        },
        {
          title: "Git Cheat Sheet",
          url: "https://education.github.com/git-cheat-sheet-education.pdf"
        },
        {
          title: "Visualizing Git",
          url: "https://git-school.github.io/visualizing-git"
        },
        {
          title: "Learn Git Branching",
          url: "https://learngitbranching.js.org"
        }
      ],
      troubleshooting: "Common problems and solutions",
      commonIssues: [
        {
          problem: "Permission denied (publickey) with SSH",
          solution: "Verify that the SSH key has been added to GitHub. Test the connection: ssh -T git@github.com"
        },
        {
          problem: "Authentication failed with HTTPS",
          solution: "Use a Personal Access Token instead of password. Go to GitHub → Settings → Developer settings → Personal access tokens"
        },
        {
          problem: "error: failed to push some refs",
          solution: "Someone else pushed before you. Solution: git pull before git push"
        },
        {
          problem: "fatal: not a git repository",
          solution: "You're not in a folder with a Git repository. Solution: cd to the correct folder or run git init"
        },
        {
          problem: "Merge conflicts",
          solution: "Git can't automatically merge the changes. Open the conflicted files, resolve manually, then git add and git commit"
        }
      ],
      finalNotes: "Final notes",
      finalTips: [
        "Commit often with clear messages",
        "Use branches to experiment without risks",
        "Pull before starting to work",
        "Read Git error messages: they're very informative",
        "Don't be afraid to make mistakes: with Git you can always go back!"
      ]
    },
    commands: {
      title: "Git Commands Quick Reference",
      config: "Configuration",
      localRepo: "Local repository",
      diff: "Diff and comparisons",
      branch: "Branch",
      remote: "Remote",
      fileManagement: "File management"
    }
  }
};
