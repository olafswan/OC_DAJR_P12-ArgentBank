#### Projet 13 de la formation "Développeur d'application - JavaScript React" par OpenClassrooms

# Utilisez une API pour un compte utilisateur bancaire avec React

### Qu’allez-vous apprendre dans ce projet ?
 
Dans ce projet, vous travaillerez sur le développement front-end d’une application bancaire en utilisant **React et
Redux** pour créer une expérience utilisateur dynamique et réactive.

Votre mission principale sera d'intégrer le front-end avec le back-end via des **appels API**.

Vous écrirez des appels à l'API REST pour connecter les deux parties de l'application, assurant une communication
fluide entre le client et le serveur.

Vous utiliserez React pour développer l'interface utilisateur de l'application bancaire, en vous concentrant sur la
création d'un tableau de bord complet et responsive pour les utilisateurs. 

Redux sera utilisé pour gérer les données de l'application. Cela vous permettra de maintenir un état global cohérent à
travers l'application.

Pour définir les points d'accès de l'API et modéliser les interactions avec les données des transactions, vous 
utiliserez **Swagger**. Cet outil vous aidera à décrire les différentes routes et actions nécessaires pour l'API.

Vous utiliserez Node.js pour exécuter le code JavaScript côté serveur. Cela vous donnera une expérience pratique de 
la gestion d'une application full-stack.

### En quoi ces compétences seront-elles importantes pour votre carrière ? 
 

La maîtrise de React et Redux est cruciale pour tout développeur front-end moderne, en particulier pour ceux qui 
travaillent sur des applications web complexes. 

L'utilisation de Swagger pour documenter les API est également une compétence précieuse, car elle assure la clarté 
et la maintenabilité de l'interface de programmation. 

Ces compétences, combinées à une expérience en développement full-stack avec Node.js, vous rendront un développeur 
web hautement compétent et polyvalent, capable de gérer à la fois le front-end et le back-end d'une application.

### Objectifs pédagogiques
* S'authentifier à une API
* Implémenter un gestionnaire d'état dans une application React
* Intéragir avec une API
* Modéliser une API

***

### Scénario :

Vous venez de commencer à travailler chez Remede Agency, une agence spécialisée dans le développement d'applications 
web.

L'équipe est principalement composée de développeurs back-end et vient de commencer à recruter d'autres spécialistes 
front-end. 

Après quelques jours dans l’entreprise, vous recevez le courriel suivant de Mila, votre cheffe de projet :

```bash
Objet : Bienvenue !
De : Mila
À : Moi

Hello,

Nous avons notre nouveau projet ! Il concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans
le secteur et qui a besoin d'aide pour mettre en place son application.

Nous avons obtenu un contrat en deux parties qui se décompose en plusieurs phases :

Phase 1 : Authentification des utilisateurs - Création d'une application web permettant aux clients de se connecter et
de gérer leurs comptes et leur profil.
Phase 2 : Transactions - Il s’agirait de spécifier les endpoints d’API nécessaires pour une éventuelle deuxième mission
une fois que nous aurons terminé la première.

À la fin du projet, tu présenteras les deux livrables à Avery Moreau, qui gère l’équipe technique d’Argent Bank.

Nous attendons encore des informations, mais je veillerai à ce que tu sois inclus dans toutes les communications pour
que tu sois à jour sur le projet.

Au plaisir de travailler avec toi !

Mila, Cheffe de projet
```

![Logo de ArgentBank](https://user.oc-static.com/upload/2023/12/28/17037832302526_Capture%20d%E2%80%99e%CC%81cran%202023-12-28%20a%CC%80%2018.07.01.png)

Quelques heures plus tard, vous recevez l’e-mail suivant :

```bash
Objet : Brief mission profil Argent Bank
De : Avery
À : Moi, Mila

Bonjour Mila et l’équipe,

 

Je suis Avery Moreau VP Engineering chez Argent Bank.

 

Nous sommes ravis de vous avoir avec nous pour créer notre application web React pour le nouveau système
d'authentification des utilisateurs.

 

Nous avons des délais très serrés et nous aurons besoin d’aide !

 

Voici un aperçu de ce dont nous avons besoin pour la phase 1 : Authentification des utilisateurs.

Créer l’application web complète et responsive avec React. Comme point de départ, nous vous avons fourni le HTML
statique et le CSS pour la page d'accueil, la page de connexion et la page de profil.
Utiliser Redux pour gérer le state de l'ensemble de l'application.
Ce que doit faire l’application (voir les détails pour chacune sur nos modèles de GitHub Issues) :
L'utilisateur peut visiter la page d'accueil
L'utilisateur peut se connecter au système
L'utilisateur peut se déconnecter du système
L'utilisateur ne peut voir les informations relatives à son propre profil qu'après s'être connecté avec succès
L'utilisateur peut modifier le profil et conserver les données dans la base de données. 
 

Vous pouvez commencer par forker notre repo existant et suivre l’avancement du travail grâce aux modèles d’Issues
GitHub que nous y avons incluses.

 

Nos ingénieurs back-end ont déjà créé toutes les API dont vous avez besoin. Vous trouverez toute la documentation
Swagger à l'intérieur du repo.

 

Pour la phase 2 : Transactions, nous sommes encore en phase de conception. De notre côté, nous mettons au point une
fonctionnalité pour les transactions qui doit pouvoir permettre aux utilisateurs :

de visualiser toutes leurs transactions pour le mois en cours, groupées par compte ;
de visualiser les détails d'une transaction dans une autre vue ;
d'ajouter, de modifier ou de supprimer des informations sur une transaction.
Puisque vous gérez déjà l'application web pour la phase 1, nous voulons connaître votre avis sur la façon dont vous
pensez que les API devraient être modélisées du côté back end. Nous avons besoin que vous nous fournissiez un
document décrivant les API proposées pour les transactions, en suivant les directives de Swagger. 

 

Parmi les éléments clés à spécifier pour chaque endpoint de l’API il faudra :

La méthode HTTP (ex. : GET, POST etc.)
La route (ex. : /store/inventory)
La description de ce à quoi correspond l’endpoint (ex. : Retour de l'inventaire des animaux de compagnie)
Les paramètres possibles pour tenir compte des différents scénarios (ex. : itemId (facultatif) = ID de l'article
spécifique à demander à la base de données d'inventaire).
Les différentes réponses avec les codes de réponse correspondants qui ont un sens pour cet endpoint
(ex. : 404 : réponse d'erreur d'article inconnu).

Vous pouvez utiliser la page des transactions présentée dans les maquettes pour guider vos choix (mais vous n'avez
 pas besoin d'implémenter cette page). Assurez-vous simplement que le document est exporté vers un fichier YAML
(c'est-à-dire Fichier > Enregistrer sous YAML) en utilisant la syntaxe Swagger, qui peut être exportée dans
l'outil d'édition de Swagger.

Nous ferons une revue de code et discuterons ensemble de la proposition d'API une fois que tout sera terminé.

Au plaisir de travailler avec vous !

Avery Moreau
```

### Pièces jointes :

[HTML statique et CSS](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs)

[GitHub Issues](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE)

[GitHub à forker](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API)

[Outil d'édition de Swagger](https://editor.swagger.io/)

Toutes ces informations en main, vous vous mettez au travail dès que possible !

***

### Livrables :
1. Un fichier au format TXT contenant le lien vers votre **code** sur GitHub remplissant toutes les exigences de la **phase 1** : Authentification de l'utilisateur.
2. Un fichier **swagger** au format YML des modèles d'API proposés avec les endpoints requis pour la **phase 2** : Transactions.

### Cours :
[Utilisez le state manager Redux pour gérer l’état de vos applications](https://openclassrooms.com/fr/courses/7150626-utilisez-le-state-manager-redux-pour-gerer-l-etat-de-vos-applications)

[Gérez votre application React avec Redux et Redux Toolkit](https://openclassrooms.com/fr/courses/8228131-gerez-votre-application-react-avec-redux-et-redux-toolkit)

### Ressources :
[Organisez votre application avec la logique Redux](https://openclassrooms.com/fr/courses/5511091-organisez-votre-application-avec-la-logique-redux)

### Résultat final lors du passage de la soutenance :
[Lien du site](www.google.com)
