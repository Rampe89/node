const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const hostname = '0.0.0.0';
const port = 3000;

// Dummy-Daten für Logins
const users = {
    admin: "admin123", // Passwort für Admin
    user: "user123"    // Passwort für normalen User
};

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/' || req.url === '/index.html') {
            // Startseite ausliefern
            serveFile('index.html', res);
        } else if (req.url === '/bruteforce.html') {
            // Brute-Force-Demo ausliefern
            serveFile('bruteforce.html', res);
        } else if (req.url === '/phishingquiz.html') {
            // Phishing-Quiz ausliefern
            serveFile('phishingquiz.html', res);
        } else if (req.url === '/password-simulator.html') {
            // Passwortstärke-Simulator ausliefern
            serveFile('password-simulator.html', res);
        } else if (req.url === '/social-engineering.html') {
            // Social-Engineering-Lab ausliefern
            serveFile('social-engineering.html', res);
        } else if (req.url === '/updates.html') {
            // Updates und Patches Lab ausliefern
            serveFile('updates.html', res);
        } else if (req.url === '/dirbuster.html') {
            // DirBuster Lab ausliefern
            serveFile('dirbuster.html', res);
        } else if (req.url === '/secret-flag.html') {
            // Secret Flag Seite ausliefern
            serveFile('secret-flag.html', res);
        } else if (req.url === '/hash.html') {
            // Hashing Lab ausliefern
            serveFile('hash.html', res);
        } else if (req.url === '/admin.html') {
            // Admin-Seite ausliefern
            serveFile('admin.html', res);
        } else if (req.url === '/impressum.html') {
            // Impressum-Seite ausliefern
            serveFile('impressum.html', res);
        } else if (req.url === '/datenschutz.html') {
            // Datenschutz-Seite ausliefern
            serveFile('datenschutz.html', res);
        } else if (req.url === '/sources.html') {
            // Quellen-Seite ausliefern
            serveFile('sources.html', res);
         } else if (req.url === '/assets.html') {
            // Assets-Seite ausliefern
            serveFile('assets.html', res);
         } else if (req.url === '/fred.html') {
            // Fred-Seite ausliefern
            serveFile('fred.html', res);
         } else if (req.url === '/cookies.html') {
            // Cookie-Seite ausliefern
            serveFile('cookies.html', res);
         } else if (req.url === '/contact.html') {
            // Kontakt-Seite ausliefern
            serveFile('contact.html', res);
         } else if (req.url === '/datenschutz2.html') {
            // DSchutzinteraktiv-Seite ausliefern
            serveFile('datenschutz2.html', res);
         } else if (req.url === '/robot.html') {
            // Rbobot-Seite ausliefern
            serveFile('robot.html', res);
         } else if (req.url === '/about.html') {
            // about-Seite ausliefern
            serveFile('about.html', res);
         } else if (req.url === '/geheim.html') {
            // geheim-Seite ausliefern
            serveFile('geheim.html', res);
         } else if (req.url === '/spam.html') {
            // spam-Seite ausliefern
            serveFile('spam.html', res);
         } else if (req.url === '/sql.html') {
            // sql-Seite ausliefern
            serveFile('sql.html', res);
        } else if (req.url === '/landing.html') {
            // landing-Seite ausliefern
            serveFile('landing.html', res);
        } else if (req.url === '/lehrplan.html') {
            // lehrplan-Seite ausliefern
            serveFile('lehrplan.html', res);
        } else if (req.url === '/pt1.html') {
            // pt-Seite ausliefern
            serveFile('pt1.html', res);
        } else if (req.url === '/lernbuddy.html') {
            // pt-Seite ausliefern
            serveFile('lernbuddy.html', res);
         } else if (req.url === '/new.html') {
            // -kiosk Seite ausliefern
            serveFile('new.html', res);
            
         } else {
            // 404-Seite
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Seite nicht gefunden!');
        }
    } else if (req.method === 'POST' && req.url === '/login') {
        // Login-Daten verarbeiten
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { username, password } = querystring.parse(body);

            // Login prüfen
            if (users[username] && users[username] === password) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(`Erfolgreich eingeloggt als ${username}`);
            } else {
                res.statusCode = 401;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Login fehlgeschlagen: Benutzername oder Passwort falsch!');
            }
        });
    } else {
        // 404-Seite
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Seite nicht gefunden!');
    }
});

// Funktion zum Ausliefern von HTML-Dateien
function serveFile(filename, res) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Fehler beim Laden der Seite!');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
}

server.listen(port, hostname, () => {
    console.log(`Server läuft auf http://${hostname}:${port}/`);
});
