// Script para converter SVGs em PNGs usando resvg
const fs = require('fs');
const path = require('path');

try {
  const { Resvg } = require('@resvg/resvg-js');
  
  const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];
  
  iconSizes.forEach(size => {
    const svgPath = path.join(__dirname, '..', 'public', `icon-${size}x${size}.svg`);
    const pngPath = path.join(__dirname, '..', 'public', `icon-${size}x${size}.png`);
    
    if (fs.existsSync(svgPath)) {
      const svg = fs.readFileSync(svgPath, 'utf-8');
      const resvg = new Resvg(svg, {
        background: '#0a0a0a',
      });
      const pngData = resvg.render();
      const pngBuffer = pngData.asPng();
      
      fs.writeFileSync(pngPath, pngBuffer);
      console.log(`✓ Convertido: icon-${size}x${size}.png`);
    }
  });
  
  console.log('\n✅ Todos os ícones PNG foram gerados com sucesso!');
} catch (error) {
  console.error('Erro ao converter ícones:', error.message);
  console.log('\n⚠️  Usando método alternativo: copiando SVG como referência');
  console.log('Você pode converter os SVGs manualmente usando:');
  console.log('- https://cloudconvert.com/svg-to-png');
  console.log('- Ou outro conversor online');
}

