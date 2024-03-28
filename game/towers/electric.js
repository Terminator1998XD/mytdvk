class Electric extends Tower{
  constructor(){
    //id, buystate, price, maxlevel
    super(2, 'electric', 150, 5, 6);
    this.myanim = [null];

    const sync = {
      currentFrame: 0,
      delay: new DateTimeClock(0.03)
    };

    for(let i = 1; i < 6; i++){
      const texsarr = getTexs('towers/electric/TowerElectricLv0'+i+'/ElectricTower-TowerElectricLv0'+i+'_0',10);

      if(i == 5){
        texsarr.push(...getTexs('towers/electric/TowerElectricLv05/ElectricTower-TowerElectricLv05_1',10));
      }

      const a = new ecbAnim(texsarr,sync);
      this.myanim.push(a);
      a.endcallback = this.Shoot.bind(this);
    }

    this.missleTexture = getTex('Lighter');
  }

  OnUpdateTower(){}

  Shoot(){

    if(this.myblock == null){
      return;
    }

    const enemy2 = this.Scan();
    if(enemy2 != null){
      PlaySound('el');
      dim.map.push(new Missle(this.center, enemy2, this.damage, this.missleTexture));
    }
  }

  OnRenderTower(rect){
    g.save();
    g.shadowColor = 'rgba(0,0,0,0)';
    super.OnRenderTower(rect);
    g.drawImage(this.myanim[this.level].nextFrame(),rect.x,rect.y,rect.w,rect.h);
    g.restore();
  }

  OnPlace(){

  }
}

for(let i = 1; i < 5; i++){
  requireTex('towers/electric/TowerElectricLv0'+i+'/ElectricTower-TowerElectricLv0'+i+'_0',10);
}
requireTex('towers/electric/TowerElectricLv05/ElectricTower-TowerElectricLv05_0',10);
requireTex('towers/electric/TowerElectricLv05/ElectricTower-TowerElectricLv05_1',10);

requireTex('electric');
requireTex('electric1');
requireTex('Lighter');
