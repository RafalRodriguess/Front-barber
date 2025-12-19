// Script para gerar ícones PWA - Execute com: node scripts/generate-icons.js
// Requer: npm install sharp

const fs = require('fs');
const path = require('path');

// Criar ícones usando HTML5 Canvas via Node.js
// Como alternativa simples, vamos criar um HTML que pode ser usado para gerar os ícones
// Ou você pode usar um serviço online como https://realfavicongenerator.net/

const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

const svgTemplate = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="${size * 0.176}" fill="#0a0a0a"/>
  <text x="256" y="380" font-family="serif" font-size="380" font-weight="bold" fill="#fac638" text-anchor="middle" dominant-baseline="middle">K</text>
</svg>`;

console.log('Para gerar os ícones PNG, você pode:');
console.log('1. Usar um serviço online: https://realfavicongenerator.net/');
console.log('2. Usar o SVG gerado e converter manualmente');
console.log('3. Ou usar um conversor SVG para PNG');

iconSizes.forEach(size => {
  const svg = svgTemplate(size);
  const fileName = `public/icon-${size}x${size}.svg`;
  fs.writeFileSync(fileName, svg);
  console.log(`Criado: ${fileName}`);
});

console.log('\nSVGs criados! Agora converta para PNG usando uma ferramenta online ou local.');

