# Metanoia - Site Web

## Description
Metanoia est un site web dédié à l'upcycling et à l'artisanat durable. Il présente une marketplace pour des créateurs qui transforment des matières existantes en pièces uniques et luxueuses.

## Caractéristiques

### Design
- **Esthétique minimaliste** : Design épuré inspiré de boboparis.com
- **Palette de couleurs** : Tons beige, crème, et gris doux pour une ambiance luxueuse
- **Typographie** : Playfair Display (serif élégant) + Inter (sans-serif moderne)
- **Images immersives** : Grandes photos d'ateliers artisanaux et de matières textiles

### Structure du site

#### Page d'accueil (`index.html`)
- **Header** : Logo centré, menu hamburger, icônes (recherche, favoris, panier)
- **Hero Section** : Image immersive avec overlay et call-to-action
- **Créateurs** : Grille horizontale avec portraits en noir et blanc
- **Marketplace** : Galerie produits avec effets hover
- **DIY/Inspirations** : Cartes visuelles pour tutoriels
- **Manifesto** : Section philosophie avec image immersive
- **Newsletter** : Formulaire d'inscription avec image de fond
- **Footer** : Liens organisés en colonnes + réseaux sociaux

#### Pages de contenu
- **Philosophie** (`philosophie.html`) : Notre vision et valeurs
- **Créateurs** (`createurs.html`) : Présentation détaillée des artisans
- **Contact** (`contact.html`) : Formulaire de contact + FAQ

### Technologies utilisées
- **HTML5** : Structure sémantique
- **CSS3** : Animations, transitions, responsive design
- **JavaScript** : Interactions, animations au scroll, formulaires
- **Font Awesome** : Icônes
- **Google Fonts** : Typographies Playfair Display et Inter

### Fonctionnalités
- **Responsive Design** : Adaptation mobile, tablette, desktop
- **Animations fluides** : Fade-in, hover effects, parallaxe
- **Navigation** : Menu hamburger, liens internes
- **Formulaires** : Newsletter, contact avec validation
- **Images optimisées** : Lazy loading, formats adaptés

### Palette de couleurs
- **Primaire** : #8b7355 (beige doré)
- **Secondaire** : #2c2c2c (gris foncé)
- **Fond** : #faf9f7 (beige très clair)
- **Accent** : #f5f3f0, #f0ede8 (tons beige)

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Corps** : Inter (sans-serif moderne)
- **Poids** : 300, 400, 500, 600

## Installation et utilisation

1. **Cloner le projet** :
   ```bash
   git clone [url-du-repo]
   cd metanoia
   ```

2. **Ouvrir dans un navigateur** :
   - Ouvrir `index.html` dans un navigateur web
   - Ou utiliser un serveur local (Live Server, etc.)

3. **Structure des fichiers** :
   ```
   metanoia/
   ├── index.html          # Page d'accueil
   ├── philosophie.html    # Page philosophie
   ├── createurs.html      # Page créateurs
   ├── contact.html        # Page contact
   ├── styles.css          # Styles CSS
   ├── script.js           # JavaScript
   ├── images/             # Dossier images (vide pour l'instant)
   └── README.md           # Documentation
   ```

## Personnalisation

### Couleurs
Modifier les variables CSS dans `styles.css` :
```css
:root {
  --primary-color: #8b7355;
  --secondary-color: #2c2c2c;
  --background-color: #faf9f7;
}
```

### Images
Remplacer les URLs Unsplash par vos propres images dans :
- Hero sections
- Galeries produits
- Sections créateurs

### Contenu
- Modifier les textes dans les fichiers HTML
- Ajouter de nouveaux créateurs dans `createurs.html`
- Personnaliser les produits dans la section marketplace

## Responsive Design

Le site s'adapte automatiquement à :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

## Performance

- **Images optimisées** : Formats WebP recommandés
- **Lazy loading** : Chargement différé des images
- **CSS minifié** : Pour la production
- **JavaScript optimisé** : Événements debounced

## Navigateurs supportés

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Licence

© 2024 Metanoia. Tous droits réservés.

## Contact

Pour toute question ou suggestion :
- Email : contact@metanoia.fr
- Site : [metanoia.fr](https://metanoia.fr)

