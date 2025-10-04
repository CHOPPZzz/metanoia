// Navigation et interactions
document.addEventListener('DOMContentLoaded', function() {
    
// Smooth scrolling pour les liens d'ancrage
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
        e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Animation des éléments au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

    const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

    // Observer les cartes de créateurs
    const creatorCards = document.querySelectorAll('.creator-card');
    creatorCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observer les cartes de produits
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observer les cartes DIY
    const diyCards = document.querySelectorAll('.diy-card');
    diyCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Effet hover amélioré pour les cartes
    const cards = document.querySelectorAll('.creator-card, .product-card, .diy-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.08)';
        });
    });

    // Animation des images au hover
    const images = document.querySelectorAll('.creator-image img, .product-image img, .diy-image img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
    });
});

// Menu hamburger (pour mobile)
const menuHamburger = document.querySelector('.menu-hamburger');
    if (menuHamburger) {
        menuHamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            // Ici vous pouvez ajouter la logique pour afficher/masquer le menu mobile
        });
    }

    // Animation des boutons
    const buttons = document.querySelectorAll('.btn, .btn-add-cart');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animation du hero au chargement
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 800);
    }
    
    if (heroButtons) {
        setTimeout(() => {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }, 1100);
    }

    // Parallax effect pour le hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Animation des titres de section
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(title);
    });

    // Animation des cartes de valeurs (pages marques)
    const valueCards = document.querySelectorAll('.value-card, .principle-card');
    valueCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animation des étapes (tutoriels)
    const steps = document.querySelectorAll('.step, .geste');
    steps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(step);
    });

    // Animation des projets (tutoriel chutes)
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(30px)';
        project.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(project);
    });

    // Effet de révélation progressive pour les textes
    const texts = document.querySelectorAll('.brand-story, .philosophy-text, .tutorial-intro');
    texts.forEach(text => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        text.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(text);
    });

    // Animation des formulaires
    const forms = document.querySelectorAll('.newsletter-form, .contact-form');
    forms.forEach(form => {
        form.style.opacity = '0';
        form.style.transform = 'translateY(30px)';
        form.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(form);
    });

    // Effet de typing pour le titre principal (optionnel)
    const mainTitle = document.querySelector('.hero-title');
    if (mainTitle && window.innerWidth > 768) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 1000);
    }

    // Lazy loading des images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Animation des icônes au hover
    const icons = document.querySelectorAll('.icon-link, .social-link');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Effet de révélation pour les liens
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animation des cartes au scroll avec délai
    const allCards = document.querySelectorAll('.creator-card, .product-card, .diy-card, .value-card, .principle-card, .project-card');
    allCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Fonctionnalité d'ajout au panier
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');
    let cart = JSON.parse(localStorage.getItem('metanoia-cart')) || [];
    let cartCount = 0;

    // Mettre à jour le compteur du panier
    function updateCartCount() {
        cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        const cartIcon = document.querySelector('.icon-link[href="#"]:last-child');
        if (cartIcon) {
            cartIcon.innerHTML = cartCount > 0 ? `🛒 (${cartCount})` : '🛒';
        }
    }

    // Ajouter au panier
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            const productImage = productCard.querySelector('img').src;
            const creatorName = productCard.querySelector('.creator-name').textContent;
            
            // Vérifier si le produit existe déjà
            const existingProduct = cart.find(item => item.name === productName);
            
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    creator: creatorName,
                    quantity: 1
                });
            }
            
            // Sauvegarder dans localStorage
            localStorage.setItem('metanoia-cart', JSON.stringify(cart));
            
            // Mettre à jour le compteur
            updateCartCount();
            
            // Animation du bouton
            this.style.background = '#6b5b47';
            this.textContent = '✓ Ajouté !';
            
            setTimeout(() => {
                this.style.background = '#2c2c2c';
                this.textContent = 'Ajouter au panier';
            }, 1500);
            
            // Animation de l'image vers le panier
            animateToCart(productImage, productCard);
            
            // Notification
            showNotification(`${productName} ajouté au panier !`);
        });
    });

    // Animation de l'image vers le panier
    function animateToCart(imageSrc, productCard) {
        const cartIcon = document.querySelector('.icon-link[href="#"]:last-child');
        if (!cartIcon) return;

        // Créer l'élément animé
        const animatedImage = document.createElement('div');
        animatedImage.style.cssText = `
            position: fixed;
            width: 50px;
            height: 50px;
            background-image: url('${imageSrc}');
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            z-index: 10000;
            pointer-events: none;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        `;

        // Position de départ (bouton)
        const buttonRect = productCard.querySelector('.btn-add-cart').getBoundingClientRect();
        const startX = buttonRect.left + buttonRect.width / 2;
        const startY = buttonRect.top + buttonRect.height / 2;

        // Position d'arrivée (icône panier)
        const cartRect = cartIcon.getBoundingClientRect();
        const endX = cartRect.left + cartRect.width / 2;
        const endY = cartRect.top + cartRect.height / 2;

        // Positionner et ajouter l'élément
        animatedImage.style.left = startX + 'px';
        animatedImage.style.top = startY + 'px';
        document.body.appendChild(animatedImage);

        // Animation
        animatedImage.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0.3)`,
                opacity: 0.7
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            document.body.removeChild(animatedImage);
        };
    }

    // Fonction de notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #8b7355;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 5px 20px rgba(139, 115, 85, 0.3);
            z-index: 10000;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Initialiser le compteur du panier
    updateCartCount();

    console.log('Metanoia - Site chargé avec succès');
});