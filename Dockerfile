# Utiliser l'image officielle de Node.js pour construire l'application
FROM node:20 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers de package et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code source de l'application dans le conteneur
COPY . .

# Construire l'application React pour la production
RUN npm run build

# Utiliser une image de serveur Nginx pour servir l'application construite
FROM nginx:alpine

# Copier les fichiers de build de l'étape précédente dans le répertoire de Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exposer le port 80 pour l'accès HTTP
EXPOSE 80

# Lancer Nginx en tant que processus principal
CMD ["nginx", "-g", "daemon off;"]
