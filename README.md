# hikingProject

# cedric-cf.xyz

Pour se connecter :

Email -> root 
Password -> root

Pour installer le projet : 

- git clone https://github.com/Axelbruget/hikingProject.git
- cd hikingProject
- yarn install 
- ionic serve

Réalisé : 

L'affichage des randonnées, le détail et la randonnée en cours fonctionne. 
Le timer démarre lorsqu'on lance une randonnée, il s'arrête lorsqu'on stoppe la randonnée. 
La map fonctionne et chaque étape est matérialisé par un point sur la carte. 
La position de l'utilisateur est marquée par un rond rouge. 

Intégration de tests unitaires pour .. yarn run test pour les lancer
Intégration de tests fonctionnels dans /e2e : yarn run e2e pour les lancer
Tous le projet a été passé au linter : yarn run lint pour le lancer

Application fonctionnelle sur Windows et Android ( testé sur mon Huawei P8 Lite )
Pour lancer sur Android (En supposant que : JDk java 8, java 1.8, gradle et android studio installés) :

ionic cordova platform add android
ionic cordova resources
ionic cordova prepare android 
ionic cordova run android

Manquant : 
Les fonctionnalités manquantes sont dues à un manque de temps plus qu'à une difficultée particulière (seul pour réaliser ce projet)

Je n'ai pas eu le temps de gérer le déplacement de l'utilisateur en direct.
La validation des étapes manque également.
Quelques tests fonctionnels sont manquants car les fonctionnalités correspondantes n'ont pas été développées.
