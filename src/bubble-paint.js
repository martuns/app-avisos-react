registerPaint('randomBackground', class {
    paint(ctx, geom) {
      const color1 = getRandomHexColor();
      const color2 = getRandomHexColor();
      
      const gradient = ctx.createLinearGradient(0, 0, geom.width, 0);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, geom.width, geom.height);
    }
  })
  
  function getRandomHexColor() {
    return '#'+ Math.floor(Math.random() * 16777215).toString(16)
  }

  