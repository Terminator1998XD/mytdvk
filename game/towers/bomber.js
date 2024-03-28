class Bomber extends Tower{
  constructor(){
    //id, buystate, price, maxlevel
    super(1, 'bomber', 105, 5, 10);
    this.idle = [null];
    this.ashoot = [null];

    const sync = {
      currentFrame: 0,
      delay: new DateTimeClock(0.05)
    };

    for(let i = 1; i < 6; i++){
      this.idle.push(new Anim(getTexs('towers/bomber/TowerBomber'+i+'Idle/BomberTower-TowerBombLv0'+i+"_Idle_0",10),0.01));
      const shootanim = new ecbAnim([...getTexs('towers/bomber/TowerBomber'+i+'Shoot/BomberTower-TowerBombLv0'+i+"_Shoot_0",10),
                                  ...getTexs('towers/bomber/TowerBomber'+i+'Shoot/BomberTower-TowerBombLv0'+i+"_Shoot_0",10)],sync);
      this.ashoot.push(shootanim);
      shootanim.endcallback = this.Shoot.bind(this);
    }

    this.state = 'idle';
    this.enemy = null;

    this.missleTexture = getTex('bomb');
  }

  OnUpdateTower(){}

  Shoot(){

    if(this.myblock == null){
      return;
    }

    PlaySound('bomb');
    dim.map.push(new Missle(this.center, this.enemy, this.damage, this.missleTexture));
  }

  OnRenderTower(rect){
    super.OnRenderTower(rect);
    g.save();
    g.shadowColor = 'rgba(0,0,0,0)';
    const {center, enemy} = this;

    if(enemy == null || Vector3.Distance(enemy.pos, center) > this.attackRadius || enemy.hp < 1){
      const enemy2 = this.Scan();
      if(enemy2 != null){
        this.enemy = enemy2;
        this.state = 'ashoot';
      }
      else{
        this.enemy = null;
        this.state = 'idle';
      }
    }

    g.drawImage(this[this.state][this.level].nextFrame(),rect.x,rect.y,rect.w,rect.h);
    g.restore();
  }

  OnPlace(){

  }
}

for(let i = 1; i < 6; i++){
  requireTex('towers/bomber/TowerBomber'+i+'Idle/BomberTower-TowerBombLv0'+i+"_Idle_0",10);
  requireTex('towers/bomber/TowerBomber'+i+'Shoot/BomberTower-TowerBombLv0'+i+"_Shoot_0",10);
  requireTex('towers/bomber/TowerBomber'+i+'Shoot/BomberTower-TowerBombLv0'+i+"_Shoot_0",10);
}

requireTex('bomber');
requireTex('bomber1');
requireTex('Bomb');
