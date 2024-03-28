class Archer extends Tower{
  constructor(){
    //id, buystate, price, maxlevel
    super(0, 'archer', 50, 5, 1);
    this.textures = [
      null,getTex('towers/archer/TowerArcher_Lv01'),getTex('towers/archer/TowerArcher_Lv02'),getTex('towers/archer/TowerArcher_Lv03'),getTex('towers/archer/TowerArcher_Lv04'),getTex('towers/archer/TowerArcher_Lv05')
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
    this.bot = new ShootBot(this,getTex('Arrow'),'arr',new ecbAnim([
      ...getTexs('towers/archer/',4)
    ],sync));
    this.bot.pos = this.center;
  }
}

for(let i = 1; i < 6; i++){
  requireTex('towers/archer/TowerArcher_Lv0'+i);
}

requireTex('towers/archer/',4);
requireTex('archer');
requireTex('archer1');
requireTex('Arrow');
