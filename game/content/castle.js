class Castle extends GameObject{
  constructor(map, i, j){
    super(new Vector3(i*tileSize+map.castleoffset.x,j*tileSize+map.castleoffset.y,2), new Size(tileSize*3,tileSize*2));
    this.setTexture(getTex('castle'));
    window.castle = this;
    this.ispath = true;
    this.i = i;
    this.j = j;
    this.hp = 20;
  }

  OnRender(rect){
    g.drawImage(this.NextFrame(),rect.x,rect.y,rect.w,rect.h);
    if(!OnPause){
      g.save();
      g.fillStyle = 'red';
      g.font = '28px Arial';

      const heartAndHp = '\u2764 ' + this.hp; // Сочетание символа сердца и значения hp
      const dol = money + "$";

      const heartAndHpWidth = g.measureText(heartAndHp).width;
      const moneyWidth = g.measureText(dol).width;

      let textX = rect.x + rect.w / 2 - (heartAndHpWidth + moneyWidth) / 2;

      g.fillText(heartAndHp, textX, -rect.h/2-5);
      textX += heartAndHpWidth + 25;

      g.fillStyle = 'lime';
      g.fillText(dol, textX, -rect.h/2-5);

      g.restore();
    }
  }

  TakeDamage(damage){
    this.hp = Math.max(0, this.hp - damage);
    if(this.hp <= 0){
      Lose();
    }
    else PlaySound('aaa');
  }
}
