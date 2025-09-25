# TestTechniqueCbActeamIt

## Rappel des consignes

Le test technique consistait en :

1. Lire le fichier trains.json
2. Afficher les tableaux des arrivées et des départs
3. Afficher les informations pour chaque trains et styliser en cas de retard
4. Trier les trains par heure croissante

## Explications

- J'ai choisi VueJS car j'aime sa structure, un composant avec son script et son CSS.
- J'ai aussi gardé le javascript dans la création de l'appli pour rester fidèle aux langages recommandés de l'exercice qui sont HTML/CSS/JS.
- L'extraction du JSON se fait via l'import classique et sa déclaration de type `import trains from "@/assets/trains.json" with { type: "json" };`
  - Le fichiers JSON est dans le dossiers `assets`
- Une fois le fichier JSON récupéré, je fais appel à l'utilitaire `utils.js` contenant la fonction de tri `TrieParHeure` pour retourner chaque liste de train (départs et arrivées) triée en fonction de l'heure croissantes avant de les exporter pour affichage.
- Les commentaires sur les fonctions sont là pour des raisons d'explications.
- Dans le `template` et plus particulièrement dans le corps `tbody`, je boucle dans les listes des trains avec un ajout de `class` conditionnelles (badge et fond de cellule) en cas de retard.

## Procédure de démarrage

Pour visualiser l'application fonctionnelle:

1. Installer NodeJs si ce n'est pas déjà fait
2. Cloner le repo (https://github.com/Kahlamar/TestTechniqueCbActeamIt)
3. Aller dans le dossier `TestTechniqueCbActeamIt` avec la commande `cd TestTechniqueCbActeamIt`
4. Réaliser la commande `npm install`
5. Une fois la commande terminée, lancer la commande `npm run dev`
6. Ouvrir un navigateur et demander le localhost au port 5173 : `http://localhost:5173/`

## Application du VM EC2

Le lien pour voir l'application tourner sur une VM EC2 est le suivant : `http://ec2-98-88-24-254.compute-1.amazonaws.com/`
