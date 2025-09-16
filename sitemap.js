import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Corrigir __dirname no ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Páginas fixas
const staticPages = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/sobre-mim", changefreq: "monthly", priority: 0.8 },
];

// Slugs dos procedimentos
const procedureSlugs = [
  "toxina-botulinica-botox",
  "preenchimento-facial-e-labial",
  "fios-de-pdo",
  "bioestimulador-de-colageno",
  "microagulhamento",
  "limpeza-de-pele-cross-peel",
  "design-de-sobrancelha",
  "extensao-de-cilios",
  "alivio-da-dor-ozonioterapia",
];

const BASE_URL = "https://renovaestetica.com";

const urls = [
  ...staticPages,
  ...procedureSlugs.map((slug) => ({
    url: `/procedimentos/${slug}`,
    changefreq: "monthly",
    priority: 0.9,
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

// Criar pasta dist se não existir (Vite build gera "dist")
const buildDir = path.resolve(__dirname, "dist");
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

// Salvar arquivo
const filePath = path.join(buildDir, "sitemap.xml");
fs.writeFileSync(filePath, sitemap);
