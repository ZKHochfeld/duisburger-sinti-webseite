# Duisburger Sinti – Webseite

Statische Website (Eleventy) für duisburgersinti.de: Archiv der Aktivitäten, Pressemitteilungen, Ausstellungen, Foto- und Videogalerien.

## Lokal entwickeln

```bash
npm install
npm start
```

Öffnet die Seite unter `http://localhost:8080`.

## Inhalte pflegen (ohne Git)

Unter `/admin` liegt ein Redaktionssystem (Decap CMS). Voraussetzung: die OAuth-Anbindung in `src/admin/config.yml` (`base_url`) muss einmalig eingerichtet werden – siehe Setup-Hinweise, die dir separat zugeschickt wurden.

## Deployment

Jeder Push auf `main` baut die Seite automatisch über GitHub Actions und veröffentlicht sie auf GitHub Pages unter der in `src/CNAME` hinterlegten Domain `duisburgersinti.de`.

## DNS bei Strato

Bei Strato für `duisburgersinti.de` folgende Einträge setzen:

- 4× A-Record auf `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- CNAME `www` → `ZKHochfeld.github.io`

Danach im GitHub-Repo unter Settings → Pages die Custom Domain `duisburgersinti.de` eintragen und "Enforce HTTPS" aktivieren (kann nach DNS-Propagation einige Stunden dauern).
