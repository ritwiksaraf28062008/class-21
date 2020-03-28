function bounceoff(o,p){

    if (o.x - p.x < p.width/2 + o.width/2
      && p.x - o.x < p.width/2 + o.width/2) {
    o.velocityX = o.velocityX * (-1);
    p.velocityX = p.velocityX * (-1);
  }
  if (o.y - p.y < p.height/2 + o.height/2
    && p.y - o.y < p.height/2 + o.height/2){
    o.velocityY = o.velocityY * (-1);
    p.velocityY = p.velocityY * (-1);
  }
  
  }