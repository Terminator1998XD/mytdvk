class Sniper extends Tower{
  constructor(){
    //id, buystate, price, maxlevel
    super(3, 'sniper', 200, 5, 8);
    this.textures = [
      null,getTex('towers/sniper/TowerSniper_Lv01'),getTex('towers/sniper/TowerSniper_Lv02'),getTex('towers/sniper/TowerSniper_Lv03'),getTex('towers/sniper/TowerSniper_Lv04'),getTex('towers/sniper/TowerSniper_Lv05')
    ];
  }

  OnUpdateTower(){

  }

  OnRenderTower(rect){
    super.OnRenderTower(rect);
    g.save();
    g.shadowColor = 'rgba(0,0,0,0)';
    g.drawImage(this.textures[this.level],rect.x,rect.y,rect.w,rect.h);
    const bot = this.bot;
    if(bot != null){
      bot.OnRender(rect);
    }
    g.restore();
  }

  OnPlace(){
    const sync = {
      currentFrame: 0,
      delay: new DateTimeClock(0.05)
    };
    this.bot = new ShootBot(this,getTex('bullet'),'sh',new ecbAnim([
      ...getTexs('towers/sniper/',2)
    ],sync));
    this.bot.pos = this.center;
  }
}

for(let i = 1; i < 6; i++){
  requireTex('towers/sniper/TowerSniper_Lv0'+i);
}

requireTex('towers/sniper/',2);
requireTex('sniper');
requireTex('sniper1');
requireTex('Bullet');
