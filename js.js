fetch('films.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('filmGrid');
    const searchInput = document.getElementById('searchInput');

    // Fonction d'affichage des films
    function afficherFilms(films) {
      grid.innerHTML = ''; // Vide la grille avant d'afficher
      films.forEach(film => {
        const card = document.createElement('div');
        card.className = 'card';

        // Set description par défaut si elle est vide
        const description = film.description ? film.description : " ";

        card.innerHTML = `
          <img src="${film.image}" alt="${film.title}">
          <div class="info">
            <div class="title">${film.title}</div>
            <div class="genre">${film.year}</div>
            <p>${description}</p>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    // Afficher tous les films au début
    afficherFilms(data);

    // Rechercher les films correspondants au texte saisi
    searchInput.addEventListener('input', () => {
      const texte = searchInput.value.toLowerCase(); // Récupérer le texte de recherche

      // Filtrer les films en fonction de la recherche
      const resultats = data.filter(film =>
        film.title.toLowerCase().includes(texte) ||  // Chercher dans le titre
        film.year.toLowerCase().includes(texte) ||   // Chercher dans l'année
        film.description.toLowerCase().includes(texte) // Chercher dans la description
      );

      afficherFilms(resultats); // Affiche uniquement les résultats trouvés
    });
  })
  .catch(error => {
    console.error("Erreur de chargement des films :", error);
  });
