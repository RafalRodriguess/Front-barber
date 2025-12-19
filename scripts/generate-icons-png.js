// Script para gerar ícones PNG a partir do SVG
const fs = require('fs');
const path = require('path');

const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// SVG template com "K" dourado
const generateSVG = (size) => {
  const fontSize = Math.floor(size * 0.74);
  const yPos = Math.floor(size * 0.74);
  const borderRadius = Math.floor(size * 0.176);
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${borderRadius}" fill="#0a0a0a"/>
  <text x="${size/2}" y="${yPos}" font-family="'Playfair Display', serif" font-size="${fontSize}" font-weight="bold" fill="#fac638" text-anchor="middle" dominant-baseline="middle">K</text>
</svg>`;
};

// Para converter SVG para PNG, você pode usar:
// 1. Serviço online: https://cloudconvert.com/svg-to-png
// 2. Chrome DevTools: Abra o SVG no navegador, use DevTools para capturar como PNG
// 3. Ou usar uma ferramenta de linha de comando

console.log('SVGs gerados! Para converter para PNG, você pode:');
console.log('1. Usar: https://cloudconvert.com/svg-to-png');
console.log('2. Ou usar ImageMagick: convert icon-192x192.svg icon-192x192.png');
console.log('\nGerando SVG base...');

// Criar SVG base para usar como referência
const baseSVG = generateSVG(512);
fs.writeFileSync('public/icon-base.svg', baseSVG);
console.log('✓ Criado: public/icon-base.svg');

// Criar todos os tamanhos SVG
iconSizes.forEach(size => {
  const svg = generateSVG(size);
  const fileName = `public/icon-${size}x${size}.svg`;
  fs.writeFileSync(fileName, svg);
  console.log(`✓ Criado: ${fileName}`);
});

console.log('\n📝 Próximos passos:');
console.log('Para gerar os PNGs, você pode:');
console.log('1. Abrir cada SVG no navegador e fazer screenshot');
console.log('2. Usar um conversor online como cloudconvert.com');
console.log('3. Ou instalar ImageMagick e rodar:');
iconSizes.forEach(size => {
  console.log(`   convert public/icon-${size}x${size}.svg public/icon-${size}x${size}.png`);
});

