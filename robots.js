import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Corrigir __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Conteúdo do robots.txt
const robotsContent = `
User-agent: *
Disallow:

Sitemap: https://renovaestetica.com/sitemap.xml
`;

// Criar pasta dist se não existir
const buildDir = path.resolve(__dirname, "dist");
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

// Salvar arquivo robots.txt
const filePath = path.join(buildDir, "robots.txt");
fs.writeFileSync(filePath, robotsContent.trim());
