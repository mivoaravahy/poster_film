import os
import json

# Configuration
films = []
dossier_courant = os.path.dirname(os.path.abspath(__file__))

# Parcourir les fichiers du répertoire courant
for fichier in os.listdir(dossier_courant):
    if fichier.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        # Ignorer les images spéciales (comme l'icône)
        if fichier == 'ppl.jpg':
            continue
            
        nom_base = os.path.splitext(fichier)[0]  # Enlève l'extension

        # Découper selon " - "
        parties = nom_base.split(' - ')

        titre = parties[0].strip().title() if len(parties) > 0 else ''
        description = parties[1].strip() if len(parties) > 1 else ''
        year = parties[2].strip() if len(parties) > 2 else ''

        films.append({
            "title": titre,
            "year": year,
            "description": description,
            "image": fichier  # Chemin direct sans dossier
        })

# Sauvegarder dans films.json
with open('films.json', 'w', encoding='utf-8') as f:
    json.dump(films, f, ensure_ascii=False, indent=2)

print(f"✅ films.json généré avec {len(films)} films.")
