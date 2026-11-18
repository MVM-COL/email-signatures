// Frame-capture server for the logo animation. No dependencies.
// Usage: node logo-animation/render.mjs   → open http://localhost:8766/logo-animation/?capture=<set>&size=WxH[&fps=N][&bg=%23FFFFFF][&firstFinal=1]
// The page renders each frame to a canvas and POSTs it here; frames land in logo-animation/.frames/<set>/NNNN.png.
// Then build the files with the ffmpeg commands in logo-animation/README.md.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FRAMES = path.join(ROOT, 'logo-animation', '.frames');
const PORT = Number(process.env.PORT || 8766);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.css': 'text/css' };

http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  if (req.method === 'POST' && url.pathname === '/frame') {
    const set = (url.searchParams.get('set') || 'default').replace(/[^a-z0-9_-]/gi, '');
    const i = String(Number(url.searchParams.get('i') || 0)).padStart(4, '0');
    const dir = path.join(FRAMES, set);
    fs.mkdirSync(dir, { recursive: true });
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => { fs.writeFileSync(path.join(dir, `${i}.png`), Buffer.concat(chunks)); res.end('ok'); });
    return;
  }
  let file = path.join(ROOT, decodeURIComponent(url.pathname));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('not found'); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`render server on http://localhost:${PORT}  frames → ${FRAMES}`));
