# Automated Testing mit Playwright
Playwright wird für integrierte End-to-End-Tests (E2E) verwendet. Damit soll erreicht werden, dass bei Änderungen alles weiterhin wie erwartet funktioniert.

Dies ist nur ein erster Aufschlag, möglicherweise stehen die "Kosten" nicht im Verhältnis zum Nutzen:

- Tests müssen häufig durchgeführt werden, idealerweise automatisiert nach jedem Commit ("Continuous Integration"/CI).
- Tests müssen angepasst werden, wenn Änderungen an der Funktionalität vorgenommen werden.
- Tests sollten den größten Teil der Website abdecken ("Coverage").
- Tests sind aufwendig zu erstellen, wenn es darum geht, Rätsel mit dynamischen oder animierten Elementen zu lösen.

## Installation & Lokale Verwendung

Das Playwright-Paket wird mit `npm init playwright` installiert. Im interaktiven Dialog folgende Optionen (tw. abweichend vom Default!) wählen:

1. Do you want to use TypeScript or JavaScript? · **JavaScript**
2. Where to put your end-to-end tests? · **tests**
3. Add a GitHub Actions workflow? (Y/n) · **false**
4. Install Playwright browsers? (Y/n) · **false**
5. Install Playwright operating system dependencies? (y/N) · **false**

Danach können die Tests mit `npx playwright test` durchgeführt werden.

*Hinweis: Das momentane Setup funktioniert auf Arch Linux und testet nur mit Chromium. Dafür muss `chromium` installiert sein. Der Pfad zur Chromium-Executable ist in playwright.config.js:50 festgelegt und muss ggf. angepasst werden.*

[Vollständige Anleitung und Dokumentation (EN)](https://playwright.dev/docs/intro) auf playwright.dev



## Status

- [x] Basic Pages (Index, About, ...)
- [x] Flag#01: Phishing
- [ ] Flag#02
- [ ] Flag#03
- [ ] Flag#04
- [ ] Flag#05
- [ ] Flag#06
- [ ] Flag#07
- [ ] Flag#08
- [ ] Flag#09
- [ ] Flag#10
- [ ] Flag#11
- [ ] Flag#12
- [ ] Flag#13

