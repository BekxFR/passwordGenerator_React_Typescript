# Password Generator App

## Description

Cette application est un générateur de mots de passe aléatoires construit avec React et TypeScript. Elle permet aux utilisateurs de créer des mots de passe sécurisés en spécifiant la longueur et en utilisant une combinaison de caractères. Le design de l'application réactif, est basé sur une maquette Figma et utilise la police JetBrains Mono.

## Fonctionnalités

- **Design Réactif** : L'application est conçue pour être réactive et s'adapte parfaitement à différentes tailles d'écran.
- **Génération de Mots de Passe** : Les utilisateurs peuvent spécifier la longueur souhaitée du mot de passe. Le mot de passe généré est aléatoire et utilise une combinaison de caractères choisis par l'utilisateur.
- **Génération en Temps Réel** : Le mot de passe est généré en temps réel à mesure que l'utilisateur modifie la longueur souhaitée.
- **Affichage du Mot de Passe** : Le mot de passe généré est affiché de manière claire et lisible à l'écran.
- **Copie dans le Presse-papiers** : Les utilisateurs peuvent copier le mot de passe généré dans le presse-papiers en un seul clic.
- **Indicateur de Robustesse** : L'application affiche la robustesse du mot de passe généré.

## Design

- Le design visuel de l'application est basé sur une maquette figma.
- La police utilisée est [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).
- Les icônes utilisées au format svg.

## Technologies utilisées

- **React**
- **TypeScript**
- **CSS** : Pour le style personnalisé
- **Figma** : Pour la conception visuelle

## Installation

1. Sans utilisation du Makefile :

```bash
git clone https://github.com/BekxFR/passwordGenerator_React_Typescript.git
cd passwordGenerator_React_Typescript
npm install
npm run start
```

2. Avec l'utilisation du Makefile :

```bash
git clone https://github.com/BekxFR/passwordGenerator_React_Typescript.git
cd passwordGenerator_React_Typescript
make
```

L'application sera exécutée sur [http://localhost:3000](http://localhost:3000).

## Réalisation

Le générateur de mot de passe a été créé pour pouvoir être utilisé comme un composant exportable.

### Structure des fichiers

L'ensemble des fichiers nécessaires pour ce composant est présent dans le répertoire [src/components/PasswordGenerator](https://github.com/BekxFR/passwordGenerator_React_Typescript/tree/main/src/components/PasswordGenerator).

### Utilisation d'un Context React

Pour faciliter la gestion des états globaux nécessaires au bon fonctionnement de l'application, un Context React a été créé. Ce [Context](https://github.com/BekxFR/passwordGenerator_React_Typescript/tree/main/src/components/PasswordGenerator/context/PasswordGenerator.tsx) contient l'ensemble des valeurs et fonctions setters associées, permettant de centraliser et de partager facilement les états entre les différents composants.

### Typage et interfaces

L'ensemble du code est typé avec des interfaces uniques ou géneriques. Les interfaces utilisées dans le Context et les composants ont été rationalisées pour assurer une cohérence et une maintenabilité du code. Toutes les interfaces géneriques sont définies dans un fichier séparé afin de centraliser les définitions de types et de les réutiliser facilement.

### Index pour les Exports/Imports

Un fichier index est utilisé pour regrouper tous les exports et imports nécessaires, facilitant ainsi la gestion des dépendances et l'organisation du code.

### Hook personnalisé

Un hook personnalisé a été créé pour compter le nombre de cases à cocher validées (`true`). Il utilise `useMemo` pour optimiser les performances.

### Algorithme pour l'indicateur de robustesse

L'algorithme pour l'indicateur de robustesse est basé sur des informations présentes dans un article de tech.co. Cet article montre le temps nécessaire pour hacker un mot de passe en fonction des caractères présents dans le mot de passe et de sa longueur.

### Algorithme pour générer le mot de passe

L'algorithme pour générer le mot de passe est disponible en deux versions :

1. **Version simple** : Sélectionne chaque caractère de façon aléatoire parmi tous les caractères choisis par l'utilisateur.
2. **Version complexe** :
   - Sélectionne d'abord de façon aléatoire autant de caractères pour chaque type sélectionné par l'utilisateur. Par exemple, pour un mot de passe de 9 caractères avec 3 types sélectionnés, il y aura toujours 3 caractères de chaque type. Les types ont un ordre de priorité en fonction de leur nombre total et de leur complexité : symboles, majuscules, minuscules, nombres.
   - Ensuite, les caractères choisis sont placés de façon aléatoire dans le mot de passe final.

### Design

Le design est principalement présent dans le fichier `PasswordGenerator.css` avec des variables utilisées pour les éléments principaux. Certains styles sont également définis dans les fichiers `.tsx` pour le rendu dynamique.

## Utilisation

1. Selectionnez le ou les types de caracteres souhaités dans le mot de passe.
2. Utilisez le curseur pour définir la longueur souhaitée du mot de passe.
3. Le mot de passe généré est affiché en temps réel à mesure que vous ajustez le curseur.
4. Cliquez sur le bouton de copie pour copier le mot de passe dans le presse-papiers.

La robustesse du mot de passe est affichée en fonction de la longueur et du jeu de caractères sélectionnés.

## Informations Supplémentaires

Ce projet a été créé dans le cadre d'un test technique pour démontrer la maîtrise de React et TypeScript. Aucune bibliothèque externe n'a été utilisée dans le développement de cette application.  
Le projet a également été host sur le site codesandbox.io et est actuellement disponible sur [PasswordGenerator](https://wm3rwh-3000.csb.app/).

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
