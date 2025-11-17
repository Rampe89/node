const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const host = "0.0.0.0";
const port = 3000;

const users = {
  admin: "admin123",
  user: "user123"
};

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "text/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".gif":
      return "image/gif";
    case ".svg":
      return "image/svg+xml";
    case ".ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
}

function serveStatic(filePath, res) {
  const fullPath = path.join(__dirname, filePath);
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      console.error("Fehler beim Laden", fullPath, err.code);
      res.writeHead(err.code === "ENOENT" ? 404 : 500, {
        "Content-Type": "text/plain; charset=utf-8"
      });
      res.end(err.code === "ENOENT" ? "Datei nicht gefunden" : "Interner Serverfehler");
      return;
    }
    res.writeHead(200, { "Content-Type": getContentType(fullPath) });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const method = req.method;
  const urlPath = req.url.split("?")[0];

  console.log(method, urlPath);

  // Login Endpoint wie bisher
  if (method === "POST" && urlPath === "/login") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const data = querystring.parse(body);
      const username = data.username;
      const password = data.password;

      if (username && password && users[username] === password) {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Erfolgreich eingeloggt als " + username);
      } else {
        res.writeHead(401, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Login fehlgeschlagen Benutzername oder Passwort falsch");
      }
    });
    return;
  }

  if (method === "GET") {
    if (urlPath === "/" || urlPath === "/index.html") {
      serveStatic("index.html", res);
      return;
    }

    const staticExts = [".html", ".js", ".css", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".ico"];
    const ext = path.extname(urlPath).toLowerCase();

    if (staticExts.includes(ext)) {
      const safePath = urlPath.replace(/^\/+/, "");
      serveStatic(safePath, res);
      return;
    }

    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Seite nicht gefunden");
    return;
  }

  res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Methode nicht erlaubt");
});

server.listen(port, host, () => {
  console.log("Server läuft unter http://" + host + ":" + port);
});
